import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

interface Video {
  id: string;
  title: string;
  image: any;
  category: string;
  time: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Exploring the World",
    image:
      "https://img.freepik.com/free-photo/animal-eye-staring-close-up-watch-nature-generative-ai_188544-15471.jpg",
    category: "News",
    time: "10 hrs ago",
  },
  {
    id: "2",
    title: "Cooking Masterclass",
    image:
      "https://c4.wallpaperflare.com/wallpaper/848/223/819/nature-jpg-format-download-1920x1200-wallpaper-preview.jpg",
    category: "News",
    time: "12 hrs ago",
  },
  {
    id: "3",
    title: "Tech Innovations 2024",
    image:
      "https://t4.ftcdn.net/jpg/09/37/12/73/360_F_937127370_RzigoTq55hhV6TOcnRXbZ2kBjSOgWUMJ.jpg",
    category: "News",
    time: "8 hrs ago",
  },
];

interface Word {
  id: string;
  word: string;
  definition: string;
  relatedWords: string[];
  category: string;
  pronunciation: {
    UK: string;
  };
  image: string;
}

const dictionary: Word[] = [
  {
    id: "1",
    word: "Aardvark",
    definition:
      "A nocturnal mammal native to Africa, known for digging with its large claws.",
    relatedWords: ["Ant", "Burrow", "Insectivore"],
    category: "Animal",
    pronunciation: {
      UK: "/ˈɑːd.vɑːk/",
    },
    image: "https://b-cdn.springnest.com/media/img/9u/aardvarke131f0a.jpg",
  },
  {
    id: "2",
    word: "Abandon",
    definition: "To leave behind or forsake someone or something.",
    relatedWords: ["Desert", "Forsake", "Leave"],
    category: "Action",
    pronunciation: {
      UK: "/əˈbæn.dən/",
    },
    image: "https://example.com/abandon-image.png",
  },
  {
    id: "3",
    word: "Abate",
    definition: "To reduce or lessen in degree, intensity, or severity.",
    relatedWords: ["Diminish", "Decrease", "Reduce"],
    category: "Action",
    pronunciation: {
      UK: "/əˈbeɪt/",
    },
    image: "https://example.com/abate-image.png",
  },
  {
    id: "4",
    word: "Abbey",
    definition:
      "A building or complex of buildings used by a religious community, especially monks.",
    relatedWords: ["Monastery", "Church", "Convent"],
    category: "Place",
    pronunciation: {
      UK: "/ˈæb.i/",
    },
    image:
      "https://cdn.britannica.com/12/144312-050-B06DACFC/Dominican-abbey-Santa-Maria-da-Vitoria-Portugal.jpg",
  },
  {
    id: "5",
    word: "Cacophony",
    definition: "A harsh, discordant mixture of sounds.",
    relatedWords: ["Noise", "Discord", "Clamor"],
    category: "Sound",
    pronunciation: { UK: "/kəˈkɒf.ə.ni/" },
    image: "https://example.com/cacophony-image.png",
  },
  {
    id: "6",
    word: "Ephemeral",
    definition: "Lasting for a very short time.",
    relatedWords: ["Fleeting", "Transient", "Short-lived"],
    category: "Time",
    pronunciation: { UK: "/ɪˈfem.ər.əl/" },
    image: "https://example.com/ephemeral-image.png",
  },
  {
    id: "7",
    word: "Gregarious",
    definition: "Fond of company; sociable.",
    relatedWords: ["Sociable", "Friendly", "Outspoken"],
    category: "Personality",
    pronunciation: { UK: "/ɡrɪˈɡeəriəs/" },
    image: "https://example.com/gregarious-image.png",
  },
  {
    id: "8",
    word: "Harbinger",
    definition:
      "A person or thing that announces or signals the approach of another.",
    relatedWords: ["Messenger", "Forerunner", "Precursor"],
    category: "Person/Thing",
    pronunciation: { UK: "/ˈhɑːbɪndʒə(r)/" },
    image: "https://example.com/harbinger-image.png",
  },
  {
    id: "9",
    word: "Iridescent",
    definition:
      "Showing luminous colors that seem to change when seen from different angles.",
    relatedWords: ["Shimmering", "Gleaming", "Rainbow-like"],
    category: "Visual",
    pronunciation: { UK: "/ˌɪrɪˈdɛsənt/" },
    image: "https://example.com/iridescent-image.png",
  },
  {
    id: "10",
    word: "Juxtapose",
    definition: "To place or deal with close together for contrasting effect.",
    relatedWords: ["Contrast", "Compare", "Oppose"],
    category: "Action",
    pronunciation: { UK: "/ˈdʒʌkstəpəʊz/" },
    image: "https://example.com/juxtapose-image.png",
  },
  {
    id: "11",
    word: "Kinetic",
    definition: "Relating to or resulting from motion.",
    relatedWords: ["Moving", "Dynamic", "Active"],
    category: "Physics",
    pronunciation: { UK: "/kɪˈnɛtɪk/" },
    image: "https://example.com/kinetic-image.png",
  },
  {
    id: "12",
    word: "Laconic",
    definition: "Using very few words.",
    relatedWords: ["Succinct", "Brief", "Concise"],
    category: "Communication",
    pronunciation: { UK: "/ləˈkɒnɪk/" },
    image: "https://example.com/laconic-image.png",
  },
  {
    id: "13",
    word: "Mellifluous",
    definition: "Sweet or musical; pleasant to hear.",
    relatedWords: ["Euphonious", "Harmonious", "Musical"],
    category: "Sound",
    pronunciation: { UK: "/mɛˈlɪfluəs/" },
    image: "https://example.com/mellifluous-image.png",
  },
  {
    id: "14",
    word: "Nuance",
    definition:
      "A subtle difference in or shade of meaning, expression, or sound.",
    relatedWords: ["Subtlety", "Refinement", "Distinction"],
    category: "Language",
    pronunciation: { UK: "/ˈnjuːɑːns/" },
    image: "https://example.com/nuance-image.png",
  },
  {
    id: "15",
    word: "Obdurate",
    definition:
      "Stubbornly refusing to change one's opinion or course of action.",
    relatedWords: ["Stubborn", "Resistant", "Intransigent"],
    category: "Personality",
    pronunciation: { UK: "/ˈɒbdʒʊreɪt/" },
    image: "https://example.com/obdurate-image.png",
  },
  {
    id: "16",
    word: "Quixotic",
    definition: "Exceedingly idealistic; unrealistic and impractical.",
    relatedWords: ["Idealistic", "Romantic", "Unrealistic"],
    category: "Personality",
    pronunciation: { UK: "/kwɪkˈsɒtɪk/" },
    image: "https://example.com/quixotic-image.png",
  },
];

export default function home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [words, setWords] = useState<Word[]>([]); // Holds the full dictionary data
  const [filteredWords, setFilteredWords] = useState<Word[]>([]); // Holds the filtered data based on search
  const flatListRef = useRef(null);

  // Fetch the dictionary data from the API
  useEffect(() => {
    fetch("https://64544639a74f994b333d117e.mockapi.io/dictionary")
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
        setFilteredWords(data); // Initially, display all the words
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text === "") {
      setFilteredWords(words); // Reset to the full data if the search query is empty
    } else {
      setFilteredWords(
        words.filter((item) =>
          item.word.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  const handleListenPress = () => {
    router.push("/details/listening");
  };

  const handleNewPress = () => {
    router.push("/details/news");
  };

  const handleWordPress = (word: Object) => {
    router.push(`/details/vocabularyDetail?word=${JSON.stringify(word)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          {/* Logo */}
          <Image
            source={require("../../assets/images/cat_t.png")}
            style={styles.logo}
          />
          {/* Greeting */}
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hi, Ronald A. Martin</Text>
            <Text style={styles.subGreeting}>Have a nice day!</Text>
          </View>
          {/* Notification Icon */}
          <TouchableOpacity>
            <Svg width="40" height="40" viewBox="0 0 38 38" fill="none">
              <Circle
                cx="19.0585"
                cy="18.9415"
                r="17.9944"
                stroke="black"
                stroke-width="1.89415"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6981 10.4178C21.3149 10.4178 24.2496 12.2624 24.5812 15.2261V16.7705C24.6945 17.3263 24.9579 17.8462 25.3372 18.269C25.3602 18.2954 25.3815 18.3219 25.3969 18.3525C25.7438 18.875 25.9432 19.4777 25.9731 20.0999L25.9501 20.2567C25.9765 21.1091 25.6935 21.9444 25.1471 22.6041C24.455 23.3534 23.5063 23.823 22.4869 23.9194C19.9733 24.1921 17.4358 24.1921 14.9255 23.9194C13.9197 23.8162 12.9881 23.3466 12.3088 22.6041C11.7556 21.9546 11.4632 21.1227 11.4828 20.2738V20.1672C11.5263 19.528 11.7394 18.9083 12.1051 18.3756L12.1656 18.2988C12.5449 17.8727 12.8049 17.357 12.9216 16.8004V15.2559L12.9608 15.1689C13.0912 14.949 13.3376 14.8229 13.5967 14.8493C13.8865 14.8825 14.1235 15.1025 14.1695 15.3889V16.9342V17.0169C14.0101 17.7925 13.6504 18.5119 13.1245 19.1018C12.9216 19.424 12.8083 19.7905 12.7912 20.1672V20.3334C12.775 20.8628 12.9515 21.3819 13.2907 21.7953C13.7604 22.2777 14.3894 22.5743 15.0619 22.634C17.4929 22.8974 19.9477 22.8974 22.3804 22.634C23.0733 22.5709 23.7169 22.2615 24.1882 21.7586C24.5113 21.3554 24.6783 20.8525 24.6647 20.3403V20.1672C24.6476 19.7871 24.5385 19.4214 24.3382 19.0949C23.7927 18.5085 23.4092 17.7891 23.2361 17.0101C23.2327 16.9836 23.2327 16.9538 23.2361 16.9274V15.3752C23.0162 13.1113 20.7395 11.7066 18.7578 11.7066C17.9156 11.7066 17.0863 11.9197 16.3541 12.3289L16.2638 12.3757C16.0779 12.449 15.8683 12.4354 15.6918 12.3357C15.4881 12.2155 15.362 11.9964 15.3688 11.7629C15.3747 11.5268 15.5086 11.3137 15.7182 11.2071C16.6269 10.694 17.6523 10.4247 18.6981 10.4178ZM20.1267 25.3939C20.3628 25.1808 20.7259 25.168 20.9791 25.3777C21.2552 25.6036 21.2953 26.0136 21.0651 26.2863C20.4992 27.0219 19.6246 27.4549 18.6913 27.4652L18.5046 27.4583C17.6454 27.3953 16.8502 26.9725 16.3243 26.2863L16.2672 26.2096C16.1044 25.9403 16.1572 25.584 16.4104 25.3777C16.6865 25.1476 17.0999 25.1876 17.3292 25.4638C17.4298 25.5976 17.5491 25.7135 17.6855 25.8133C18.0452 26.0801 18.4978 26.1934 18.941 26.1269C19.3877 26.0605 19.7866 25.8235 20.0542 25.4638H20.0602L20.1267 25.3939Z"
                fill="black"
              />
              <Path
                d="M24.5812 15.2261H24.6479L24.647 15.2187L24.5812 15.2261ZM24.5812 16.7705H24.5135L24.5162 16.7838L24.5812 16.7705ZM25.3372 18.269L25.3872 18.2255L25.3866 18.2247L25.3372 18.269ZM25.3969 18.3525L25.3371 18.3824L25.3416 18.3892L25.3969 18.3525ZM25.9731 20.0999L26.0399 20.1097L26.0393 20.0967L25.9731 20.0999ZM25.9501 20.2567L25.8834 20.2469L25.8838 20.2588L25.9501 20.2567ZM25.1471 22.6041L25.1959 22.6492L25.1982 22.6464L25.1471 22.6041ZM22.4869 23.9194L22.4807 23.8533L22.4797 23.8534L22.4869 23.9194ZM14.9255 23.9194L14.9327 23.8534L14.9323 23.8534L14.9255 23.9194ZM12.3088 22.6041L12.2583 22.6472L12.2599 22.6489L12.3088 22.6041ZM11.4828 20.2738L11.5491 20.2753V20.2738H11.4828ZM11.4828 20.1672L11.4165 20.1627V20.1672H11.4828ZM12.1051 18.3756L12.0529 18.3344L12.0504 18.338L12.1051 18.3756ZM12.1656 18.2988L12.116 18.2547L12.1135 18.2578L12.1656 18.2988ZM12.9216 16.8004L12.9879 16.8143V16.8004H12.9216ZM12.9216 15.2559L12.8612 15.2286L12.8553 15.2416V15.2559H12.9216ZM12.9608 15.1689L12.9035 15.1349L12.9004 15.1417L12.9608 15.1689ZM13.5967 14.8493L13.6043 14.7834L13.6034 14.7834L13.5967 14.8493ZM14.1695 15.3889H14.2366L14.2349 15.3783L14.1695 15.3889ZM14.1695 17.0169L14.2358 17.0305V17.0169H14.1695ZM13.1245 19.1018L13.0743 19.057L13.0684 19.0664L13.1245 19.1018ZM12.7912 20.1672L12.7249 20.1642V20.1672H12.7912ZM12.7912 20.3334L12.8575 20.3355V20.3334H12.7912ZM13.2907 21.7953L13.2393 21.8375L13.2432 21.8415L13.2907 21.7953ZM15.0619 22.634L15.0691 22.5681L15.0678 22.5679L15.0619 22.634ZM22.3804 22.634L22.3743 22.5679L22.3732 22.5681L22.3804 22.634ZM24.1882 21.7586L24.2367 21.8041L24.24 21.8001L24.1882 21.7586ZM24.6647 20.3403H24.5984L24.5984 20.342L24.6647 20.3403ZM24.6647 20.1672H24.7311L24.7309 20.1643L24.6647 20.1672ZM24.3382 19.0949L24.3959 19.0596L24.3868 19.0498L24.3382 19.0949ZM23.2361 17.0101L23.1701 17.0186L23.1714 17.0244L23.2361 17.0101ZM23.2361 16.9274L23.3024 16.9359V16.9274H23.2361ZM23.2361 15.3752H23.3027L23.3021 15.3688L23.2361 15.3752ZM16.3541 12.3289L16.3847 12.3877L16.3864 12.3867L16.3541 12.3289ZM16.2638 12.3757L16.2882 12.4377L16.2943 12.4346L16.2638 12.3757ZM15.6918 12.3357L15.6581 12.3928L15.6592 12.3934L15.6918 12.3357ZM15.3688 11.7629L15.435 11.7648L15.435 11.7646L15.3688 11.7629ZM15.7182 11.2071L15.7483 11.2663L15.7508 11.2649L15.7182 11.2071ZM20.1267 25.3939L20.0821 25.3445L20.0787 25.3482L20.1267 25.3939ZM20.9791 25.3777L20.9368 25.4288L20.9371 25.429L20.9791 25.3777ZM21.0651 26.2863L21.0144 26.2435L21.0126 26.2459L21.0651 26.2863ZM18.6913 27.4652L18.6889 27.5315L18.692 27.5315L18.6913 27.4652ZM18.5046 27.4583L18.4998 27.5245L18.5022 27.5246L18.5046 27.4583ZM16.3243 26.2863L16.2711 26.3259L16.2717 26.3267L16.3243 26.2863ZM16.2672 26.2096L16.2102 26.2441L16.214 26.2492L16.2672 26.2096ZM16.4104 25.3777L16.4522 25.4291L16.4528 25.4286L16.4104 25.3777ZM17.3292 25.4638L17.3823 25.4239L17.3802 25.4215L17.3292 25.4638ZM17.6855 25.8133L17.725 25.76L17.7246 25.7598L17.6855 25.8133ZM18.941 26.1269L18.9313 26.0614L18.9312 26.0614L18.941 26.1269ZM20.0542 25.4638V25.3975H20.0209L20.0011 25.4242L20.0542 25.4638ZM20.0602 25.4638V25.5301H20.0886L20.1082 25.5095L20.0602 25.4638ZM18.6981 10.4841C21.2915 10.4841 24.1885 12.3126 24.5153 15.2334L24.647 15.2187C24.3107 12.2121 21.3383 10.3516 18.6981 10.3516V10.4841ZM24.5149 15.2261V16.7705H24.6475V15.2261H24.5149ZM24.5162 16.7838C24.632 17.3512 24.9008 17.8818 25.2879 18.3133L25.3866 18.2247C25.015 17.8106 24.7571 17.3014 24.6461 16.7573L24.5162 16.7838ZM25.2872 18.3125C25.3096 18.3383 25.3262 18.3594 25.3376 18.3822L25.4562 18.3229C25.4369 18.2843 25.4108 18.2526 25.3872 18.2255L25.2872 18.3125ZM25.3416 18.3892C25.682 18.9019 25.8776 19.493 25.9069 20.1031L26.0393 20.0967C26.0089 19.4624 25.8055 18.8482 25.4521 18.3159L25.3416 18.3892ZM25.9075 20.0903L25.8845 20.2471L26.0157 20.2664L26.0387 20.1095L25.9075 20.0903ZM25.8838 20.2588C25.9097 21.0952 25.6321 21.9147 25.0961 22.5619L25.1982 22.6464C25.755 21.9742 26.0432 21.123 26.0163 20.2547L25.8838 20.2588ZM25.0984 22.5592C24.4174 23.2964 23.4839 23.7586 22.4807 23.8533L22.4931 23.9854C23.5288 23.8875 24.4926 23.4104 25.1958 22.6491L25.0984 22.5592ZM22.4797 23.8534C19.9709 24.1257 17.4382 24.1257 14.9327 23.8534L14.9184 23.9853C17.4334 24.2585 19.9757 24.2585 22.494 23.9853L22.4797 23.8534ZM14.9323 23.8534C13.9427 23.7519 13.0261 23.2898 12.3577 22.5594L12.2599 22.6489C12.9502 23.4033 13.8968 23.8805 14.9188 23.9853L14.9323 23.8534ZM12.3592 22.5612C11.8167 21.9241 11.5299 21.1081 11.5491 20.2753L11.4166 20.2722C11.3966 21.1374 11.6945 21.9851 12.2583 22.6471L12.3592 22.5612ZM11.5491 20.2738V20.1672H11.4165V20.2738H11.5491ZM11.549 20.1717C11.5916 19.5442 11.8008 18.9359 12.1597 18.4131L12.0504 18.338C11.678 18.8806 11.461 19.5117 11.4167 20.1627L11.549 20.1717ZM12.1571 18.4166L12.2176 18.3399L12.1135 18.2578L12.053 18.3345L12.1571 18.4166ZM12.2151 18.3429C12.6021 17.9081 12.8674 17.3819 12.9865 16.814L12.8567 16.7868C12.7423 17.332 12.4877 17.8372 12.1161 18.2548L12.2151 18.3429ZM12.9879 16.8004V15.2559H12.8553V16.8004H12.9879ZM12.9821 15.2831L13.0213 15.1962L12.9004 15.1417L12.8612 15.2286L12.9821 15.2831ZM13.0179 15.2028C13.1351 15.005 13.3566 14.8915 13.59 14.9153L13.6034 14.7834C13.3185 14.7543 13.0473 14.8931 12.9038 15.1351L13.0179 15.2028ZM13.5891 14.9152C13.8505 14.9451 14.0629 15.1433 14.104 15.3994L14.2349 15.3783C14.184 15.0616 13.9225 14.82 13.6043 14.7834L13.5891 14.9152ZM14.1032 15.3889V16.9342H14.2358V15.3889H14.1032ZM14.1032 16.9342V17.0169H14.2358V16.9342H14.1032ZM14.1046 17.0035C13.9475 17.7678 13.5931 18.4766 13.075 19.0576L13.174 19.1459C13.7077 18.5473 14.0727 17.8172 14.2344 17.0302L14.1046 17.0035ZM13.0684 19.0664C12.8593 19.3985 12.7425 19.7761 12.725 20.1642L12.8574 20.1702C12.874 19.8048 12.9839 19.4495 13.1806 19.1371L13.0684 19.0664ZM12.7249 20.1672V20.3334H12.8575V20.1672H12.7249ZM12.7249 20.3314C12.7083 20.8768 12.8901 21.4116 13.2395 21.8373L13.3419 21.7532C13.0128 21.3522 12.8418 20.8487 12.8575 20.3355L12.7249 20.3314ZM13.2432 21.8415C13.724 22.3354 14.3679 22.639 15.0561 22.7L15.0678 22.5679C14.4109 22.5097 13.7967 22.22 13.3382 21.749L13.2432 21.8415ZM15.0548 22.6999C17.4905 22.9638 19.9501 22.9638 22.3875 22.6999L22.3732 22.5681C19.9453 22.8309 17.4953 22.8309 15.0691 22.5681L15.0548 22.6999ZM22.3864 22.7C23.0951 22.6355 23.7539 22.319 24.2366 21.8039L24.1399 21.7133C23.6799 22.204 23.0515 22.5063 22.3743 22.568L22.3864 22.7ZM24.24 21.8001C24.5729 21.3846 24.745 20.8663 24.731 20.3385L24.5984 20.342C24.6116 20.8387 24.4497 21.3263 24.1365 21.7171L24.24 21.8001ZM24.731 20.3403V20.1672H24.5984V20.3403H24.731ZM24.7309 20.1643C24.7134 19.7732 24.6011 19.3966 24.3947 19.0603L24.2817 19.1296C24.476 19.4462 24.5819 19.8009 24.5985 20.1702L24.7309 20.1643ZM24.3868 19.0498C23.8491 18.4718 23.4713 17.7629 23.3008 16.9957L23.1714 17.0244C23.3471 17.8153 23.7364 18.5453 24.2897 19.1401L24.3868 19.0498ZM23.3019 17.0016C23.2992 16.9808 23.2992 16.9567 23.3019 16.9359L23.1704 16.9189C23.1662 16.951 23.1662 16.9865 23.1704 17.0185L23.3019 17.0016ZM23.3024 16.9274V15.3752H23.1698V16.9274H23.3024ZM23.3021 15.3688C23.0779 13.0605 20.762 11.6403 18.7578 11.6403V11.7729C20.717 11.7729 22.9545 13.1622 23.1701 15.3816L23.3021 15.3688ZM18.7578 11.6403C17.9045 11.6403 17.064 11.8562 16.3218 12.271L16.3864 12.3867C17.1086 11.9832 17.9268 11.7729 18.7578 11.7729V11.6403ZM16.3236 12.27L16.2332 12.3169L16.2943 12.4346L16.3846 12.3877L16.3236 12.27ZM16.2394 12.3141C16.0722 12.3801 15.8834 12.3678 15.7244 12.278L15.6592 12.3934C15.8531 12.503 16.0837 12.518 16.2881 12.4374L16.2394 12.3141ZM15.7255 12.2786C15.5415 12.17 15.429 11.973 15.435 11.7648L15.3025 11.7609C15.2949 12.0198 15.4347 12.2609 15.6581 12.3928L15.7255 12.2786ZM15.435 11.7646C15.4404 11.5526 15.5605 11.3617 15.7483 11.2662L15.6882 11.148C15.4567 11.2657 15.3091 11.5009 15.3025 11.7612L15.435 11.7646ZM15.7508 11.2649C16.6495 10.7574 17.6638 10.4909 18.6986 10.4841L18.6977 10.3516C17.6407 10.3584 16.6042 10.6307 15.6856 11.1494L15.7508 11.2649ZM20.1711 25.4431C20.383 25.2519 20.7092 25.2403 20.9368 25.4288L21.0213 25.3267C20.7426 25.0958 20.3426 25.1097 20.0823 25.3447L20.1711 25.4431ZM20.9371 25.429C21.1849 25.6317 21.2205 25.9994 21.0145 26.2436L21.1158 26.3291C21.3701 26.0277 21.3255 25.5754 21.021 25.3264L20.9371 25.429ZM21.0126 26.2459C20.4592 26.9652 19.6038 27.3889 18.6906 27.3989L18.692 27.5315C19.6455 27.521 20.5392 27.0786 21.1177 26.3268L21.0126 26.2459ZM18.6937 27.3989L18.5071 27.3921L18.5022 27.5246L18.6889 27.5314L18.6937 27.3989ZM18.5095 27.3922C17.6689 27.3305 16.8911 26.9169 16.3769 26.246L16.2717 26.3267C16.8093 27.0281 17.622 27.46 18.4998 27.5245L18.5095 27.3922ZM16.3775 26.2467L16.3203 26.17L16.214 26.2492L16.2711 26.3259L16.3775 26.2467ZM16.3239 26.1753C16.1777 25.9334 16.2254 25.6139 16.4522 25.4291L16.3685 25.3263C16.089 25.5541 16.031 25.9471 16.2104 26.2439L16.3239 26.1753ZM16.4528 25.4286C16.7005 25.2222 17.0721 25.2579 17.2782 25.5061L17.3802 25.4215C17.1277 25.1174 16.6725 25.0729 16.3679 25.3268L16.4528 25.4286ZM17.2762 25.5036C17.381 25.643 17.505 25.7634 17.6464 25.8668L17.7246 25.7598C17.5932 25.6637 17.4786 25.5523 17.3822 25.424L17.2762 25.5036ZM17.646 25.8665C18.0198 26.1438 18.4902 26.2616 18.9509 26.1925L18.9312 26.0614C18.5054 26.1252 18.0706 26.0163 17.725 25.76L17.646 25.8665ZM18.9508 26.1925C19.4146 26.1235 19.8292 25.8773 20.1074 25.5034L20.0011 25.4242C19.744 25.7697 19.3608 25.9974 18.9313 26.0614L18.9508 26.1925ZM20.0542 25.5301H20.0602V25.3975H20.0542V25.5301ZM20.1082 25.5095L20.1747 25.4396L20.0787 25.3482L20.0122 25.4181L20.1082 25.5095Z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            width: 88,
            height: 23,
            fontSize: 18,
            marginTop: 17,
            marginLeft: 2,
            marginBottom: -8,
            fontWeight: "bold",
          }}
        >
          Dictionary
        </Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearch}
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={23} color="#fff" />
          </TouchableOpacity>
        </View>
        {searchQuery.length > 0 && (
          <FlatList
            ref={flatListRef}
            data={filteredWords}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleWordPress(item)}
              >
                <Text style={styles.dropdownText}>{item.word}</Text>
              </TouchableOpacity>
            )}
            style={styles.dropdownList}
          />
        )}
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require("../../assets/images/banner1.png")}
          style={styles.bannerImage}
        />
      </View>

      {/* Updated Section */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={handleListenPress}
        >
          <Svg width="45" height="45" viewBox="0 0 34 34" fill="none">
            <Rect width="34" height="34" rx="8" fill="#FF6969" />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5 8.38544C14.0827 8.38544 11.7644 9.34572 10.055 11.055C8.34572 12.7644 7.38544 15.0827 7.38544 17.5V22.9688C7.38544 23.5904 7.63237 24.1865 8.07191 24.6261C8.51144 25.0656 9.10759 25.3125 9.72919 25.3125H10.7709C11.3925 25.3125 11.9886 25.0656 12.4281 24.6261C12.8677 24.1865 13.1146 23.5904 13.1146 22.9688V19.3229C13.1146 18.7013 12.8677 18.1052 12.4281 17.6657C11.9886 17.2261 11.3925 16.9792 10.7709 16.9792H9.72919C9.45696 16.9806 9.20002 17.024 8.95835 17.1094C9.05991 15.1778 9.89877 13.3587 11.302 12.0274C12.7052 10.696 14.5657 9.95383 16.5 9.95383C18.4343 9.95383 20.2949 10.696 21.6981 12.0274C23.1013 13.3587 23.9401 15.1778 24.0417 17.1094C23.7936 17.0241 23.5332 16.9801 23.2709 16.9792H22.2292C21.6076 16.9792 21.0114 17.2261 20.5719 17.6657C20.1324 18.1052 19.8854 18.7013 19.8854 19.3229V22.9688C19.8854 23.5904 20.1324 24.1865 20.5719 24.6261C21.0114 25.0656 21.6076 25.3125 22.2292 25.3125H23.2709C23.8925 25.3125 24.4886 25.0656 24.9281 24.6261C25.3677 24.1865 25.6146 23.5904 25.6146 22.9688V17.5C25.6146 16.3031 25.3788 15.1179 24.9208 14.012C24.4627 12.9062 23.7914 11.9014 22.945 11.055C22.0986 10.2087 21.0939 9.53729 19.988 9.07924C18.8822 8.62119 17.697 8.38544 16.5 8.38544ZM24.0521 19.3084V22.9688C24.0521 23.176 23.9698 23.3747 23.8233 23.5212C23.6768 23.6677 23.4781 23.75 23.2709 23.75H22.2292C22.022 23.75 21.8233 23.6677 21.6768 23.5212C21.5302 23.3747 21.4479 23.176 21.4479 22.9688V19.3229C21.4479 19.1157 21.5302 18.917 21.6768 18.7705C21.8233 18.624 22.022 18.5417 22.2292 18.5417H23.2709C23.4756 18.5417 23.6721 18.622 23.8182 18.7653C23.9643 18.9087 24.0483 19.1037 24.0521 19.3084ZM10.7709 18.5417C10.9781 18.5417 11.1768 18.624 11.3233 18.7705C11.4698 18.917 11.5521 19.1157 11.5521 19.3229V22.9688C11.5521 23.176 11.4698 23.3747 11.3233 23.5212C11.1768 23.6677 10.9781 23.75 10.7709 23.75H9.72919C9.52199 23.75 9.32327 23.6677 9.17676 23.5212C9.03025 23.3747 8.94794 23.176 8.94794 22.9688V19.3229C8.94794 19.1157 9.03025 18.917 9.17676 18.7705C9.32327 18.624 9.52199 18.5417 9.72919 18.5417H10.7709Z"
              fill="white"
            />
          </Svg>

          <Text style={styles.categoryText}>Listening</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem} onPress={handleNewPress}>
          <Svg width="45" height="45" viewBox="0 0 34 34" fill="none">
            <Rect width="34" height="34" rx="8" fill="#167F71" />
            <Path
              d="M13.5938 15.9375C13.5938 15.7303 13.6761 15.5316 13.8226 15.3851C13.9691 15.2386 14.1678 15.1562 14.375 15.1562H22.1875C22.3947 15.1562 22.5934 15.2386 22.7399 15.3851C22.8864 15.5316 22.9688 15.7303 22.9688 15.9375C22.9688 16.1447 22.8864 16.3434 22.7399 16.4899C22.5934 16.6364 22.3947 16.7188 22.1875 16.7188H14.375C14.1678 16.7188 13.9691 16.6364 13.8226 16.4899C13.6761 16.3434 13.5938 16.1447 13.5938 15.9375ZM14.375 19.8438H22.1875C22.3947 19.8438 22.5934 19.7614 22.7399 19.6149C22.8864 19.4684 22.9688 19.2697 22.9688 19.0625C22.9688 18.8553 22.8864 18.6566 22.7399 18.5101C22.5934 18.3636 22.3947 18.2812 22.1875 18.2812H14.375C14.1678 18.2812 13.9691 18.3636 13.8226 18.5101C13.6761 18.6566 13.5938 18.8553 13.5938 19.0625C13.5938 19.2697 13.6761 19.4684 13.8226 19.6149C13.9691 19.7614 14.1678 19.8438 14.375 19.8438ZM27.6562 11.25V22.9688C27.6562 23.5904 27.4093 24.1865 26.9698 24.626C26.5302 25.0656 25.9341 25.3125 25.3125 25.3125H8.125C7.50526 25.3125 6.91074 25.0671 6.4715 24.6298C6.03227 24.1926 5.78409 23.5992 5.78125 22.9795V13.5938C5.78125 13.3865 5.86356 13.1878 6.01007 13.0413C6.15659 12.8948 6.3553 12.8125 6.5625 12.8125C6.7697 12.8125 6.96841 12.8948 7.11493 13.0413C7.26144 13.1878 7.34375 13.3865 7.34375 13.5938V22.9688C7.34375 23.176 7.42606 23.3747 7.57257 23.5212C7.71909 23.6677 7.9178 23.75 8.125 23.75C8.3322 23.75 8.53091 23.6677 8.67743 23.5212C8.82394 23.3747 8.90625 23.176 8.90625 22.9688V11.25C8.90625 10.8356 9.07087 10.4382 9.3639 10.1451C9.65692 9.85212 10.0543 9.6875 10.4688 9.6875H26.0938C26.5082 9.6875 26.9056 9.85212 27.1986 10.1451C27.4916 10.4382 27.6562 10.8356 27.6562 11.25ZM26.0938 11.25H10.4688V22.9688C10.4692 23.2349 10.424 23.4992 10.335 23.75H25.3125C25.5197 23.75 25.7184 23.6677 25.8649 23.5212C26.0114 23.3747 26.0938 23.176 26.0938 22.9688V11.25Z"
              fill="white"
            />
          </Svg>

          <Text style={styles.categoryText}>News</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Svg width="45" height="45" viewBox="0 0 34 34" fill="none">
            <Rect width="34" height="34" rx="8" fill="#A542E8" />
            <Path
              d="M13.0417 21.1417L14.8761 20.6125L25.9208 9.43542C26.008 9.34614 26.0565 9.22618 26.0559 9.10145C26.0553 8.97671 26.0057 8.85721 25.9177 8.76875L25.2563 8.1C25.2135 8.05608 25.1625 8.02112 25.106 7.99715C25.0496 7.97317 24.989 7.96068 24.9277 7.96039C24.8665 7.9601 24.8057 7.97202 24.7491 7.99545C24.6925 8.01889 24.6411 8.05337 24.5979 8.09688L13.5823 19.2448L13.0417 21.1417ZM26.5656 6.775L27.2271 7.44479C28.1396 8.36875 28.1479 9.85938 27.2438 10.774L15.8625 22.2927L11.9417 23.4219C11.8231 23.4552 11.6992 23.4648 11.577 23.4503C11.4547 23.4357 11.3365 23.3972 11.2291 23.3369C11.1218 23.2766 11.0273 23.1958 10.9512 23.099C10.8751 23.0023 10.8187 22.8915 10.7854 22.7729C10.7343 22.601 10.7336 22.4181 10.7833 22.2458L11.924 18.2458L23.275 6.75729C23.4909 6.53996 23.7478 6.36778 24.0309 6.25079C24.314 6.1338 24.6175 6.07434 24.9238 6.0759C25.2301 6.07745 25.533 6.13997 25.8149 6.25982C26.0968 6.37967 26.352 6.55549 26.5656 6.775ZM14.5667 7.97604C15.0833 7.97604 15.5021 8.4 15.5021 8.92292C15.5029 9.04653 15.4794 9.16909 15.4328 9.2836C15.3862 9.3981 15.3175 9.50231 15.2306 9.59024C15.1438 9.67818 15.0404 9.74814 14.9265 9.79611C14.8126 9.84407 14.6903 9.86911 14.5667 9.86979H10.825C9.79168 9.86979 8.95418 10.7177 8.95418 11.7625V23.1229C8.95418 24.1688 9.79168 25.0167 10.825 25.0167H22.05C23.0833 25.0167 23.9219 24.1688 23.9219 23.1229V19.3365C23.9219 18.8135 24.3406 18.3896 24.8573 18.3896C25.374 18.3896 25.7927 18.8135 25.7927 19.3375V23.1229C25.7927 25.2146 24.1167 26.9104 22.05 26.9104H10.825C8.75834 26.9104 7.08334 25.2146 7.08334 23.1229V11.7625C7.08334 9.67188 8.75834 7.97604 10.825 7.97604H14.5667Z"
              fill="white"
            />
          </Svg>

          <Text style={styles.categoryText}>Blog</Text>
        </TouchableOpacity>
      </View>

      {/* Viral News */}
      <View style={styles.newSection}>
        {videos.map((item) => (
          <View key={item.id} style={styles.newItem}>
            <View style={styles.newInfo}>
              <Text style={styles.newTitle}>{item.title}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.newCategory}>{item.category}</Text>
                <Text style={styles.newTime}>{item.time}</Text>
              </View>
            </View>
            <Image source={{ uri: item.image }} style={styles.videoImage} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 50,
  },
  headerTop: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 39,
    height: 50.05,
    borderRadius: 5,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 14,
    color: "#777",
  },
  dropdownList: {
    marginTop: 10,
    maxHeight: windowHeight * 0.3, // Adjust the percentage as needed
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    width: 350,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 10,
  },
  searchButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    marginTop: 20,
    borderRadius: 22,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryContainer: {
    width: 380,
    flexDirection: "row",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
    marginTop: 5,
  },
  categoryItem: {
    marginHorizontal: 20,
  },
  categoryImage: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  newSection: {
    marginTop: 10,
  },
  newItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
  },
  videoImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  newInfo: {
    flex: 1,
    marginLeft: 5,
  },
  newTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  newCategory: {
    fontSize: 14,
    color: "#167F71",
    marginTop: 5,
  },
  newTime: {
    fontSize: 12,
    color: "#aaa",
    marginLeft: 10,
    marginTop: 8,
  },
});
