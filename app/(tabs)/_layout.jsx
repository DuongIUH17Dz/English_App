import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Svg, { Path } from "react-native-svg";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={size || 22}
              height={size || 23}
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M7.80422 20.7997V17.5555C7.80422 16.7274 8.48047 16.0561 9.31466 16.0561H12.3641C12.7647 16.0561 13.1488 16.2141 13.4321 16.4953C13.7154 16.7765 13.8745 17.1579 13.8745 17.5555V20.7997C13.872 21.144 14.008 21.475 14.2523 21.7194C14.4967 21.9637 14.8291 22.1011 15.176 22.1011H17.2564C18.228 22.1036 19.1607 21.7222 19.8487 21.041C20.5366 20.3598 20.9233 19.4349 20.9233 18.4703V9.22829C20.9233 8.44912 20.5753 7.71003 19.9733 7.21014L12.896 1.59891C11.6649 0.615069 9.90104 0.646835 8.70669 1.67435L1.79092 7.21014C1.16042 7.6953 0.783576 8.43658 0.764954 9.22829V18.4609C0.764954 20.4713 2.40667 22.1011 4.43183 22.1011H6.46476C7.18509 22.1011 7.7705 21.5242 7.77572 20.8091L7.80422 20.7997Z"
                fill={color || "#3A94E7"}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="dictionary"
        options={{
          tabBarLabel: "Dictionary",
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={size || 22}
              height={size || 23}
              viewBox="0 0 22 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3861 18.5109C11.1437 18.5074 10.9065 18.4408 10.6978 18.3176C10.0792 17.9406 8.43012 17.0629 6.48721 17.0629C5.18762 17.0915 3.91316 17.4267 2.76765 18.0411C2.57292 18.1399 2.3577 18.1916 2.13934 18.1919H2.11615C1.89011 18.188 1.66846 18.1289 1.47044 18.0199C1.26556 17.9101 1.09405 17.7471 0.973959 17.5481C0.853867 17.3491 0.789633 17.1213 0.788009 16.8889V3.36974C0.785863 3.08021 0.85972 2.79518 1.0022 2.54312C1.14468 2.29107 1.3508 2.08081 1.59997 1.93334C2.49313 1.41136 4.31618 0.535603 6.48721 0.535603C7.79839 0.555961 9.09164 0.843429 10.288 1.38044C10.634 1.53316 10.9762 1.70522 11.3049 1.89081L11.3996 1.94494L11.4963 1.89081C11.8253 1.70177 12.1641 1.53012 12.5112 1.37656C13.7071 0.84033 14.9996 0.552897 16.31 0.531738C18.4849 0.531738 20.3041 1.4075 21.1953 1.92754C21.4444 2.0761 21.6509 2.28654 21.7946 2.53845C21.9375 2.78845 22.011 3.07213 22.0073 3.36007V16.9218C22.0048 17.0963 21.9677 17.2685 21.8981 17.4285C21.8286 17.5886 21.7279 17.7332 21.602 17.854C21.4762 17.9749 21.3275 18.0695 21.1648 18.1325C21.0021 18.1955 20.8285 18.2255 20.654 18.2209C20.4531 18.2207 20.2549 18.1751 20.0741 18.0875C18.9029 17.5029 17.6167 17.1853 16.3081 17.1576C14.3748 17.1576 12.7084 17.9812 12.082 18.335C11.8755 18.4513 11.6425 18.5126 11.4054 18.5128L11.3861 18.5109ZM16.31 2.088C15.223 2.10961 14.1516 2.35164 13.1608 2.79944C12.8669 2.92896 12.5808 3.07395 12.2927 3.23248L12.1941 3.28855V16.5274L12.4629 16.4153C13.6765 15.8774 14.9893 15.5995 16.3168 15.5995C17.6443 15.5995 18.9571 15.8774 20.1707 16.4153L20.4394 16.5255V3.28855L20.3408 3.23441C19.5869 2.80523 18.0673 2.088 16.31 2.088ZM6.48721 15.4989C7.81746 15.514 9.12961 15.8091 10.3382 16.365L10.6108 16.4868V3.28855L10.5122 3.23248C10.2317 3.07291 9.94332 2.92773 9.64806 2.7975C8.65526 2.3478 7.58083 2.10633 6.49108 2.088C4.77242 2.088 3.27803 2.77817 2.51247 3.20735H2.3694V3.40067V16.4849L2.64199 16.365C3.85101 15.8164 5.15973 15.5216 6.48721 15.4989Z"
                fill="#252526"
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="exercise"
        options={{
          tabBarLabel: "Exercise",
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={size || 22}
              height={size || 23}
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M9.16972 2.83895C9.0997 3.06244 9.06434 3.29725 9.06363 3.54338C9.06363 3.98259 9.42009 4.33905 9.8593 4.33905H14.6333C14.8443 4.33905 15.0467 4.25522 15.1959 4.106C15.3452 3.95679 15.429 3.75441 15.429 3.54338C15.4283 3.30464 15.3925 3.0673 15.3229 2.83895M9.16972 2.83895C9.32025 2.35159 9.62293 1.92527 10.0334 1.62247C10.4439 1.31967 10.9406 1.15632 11.4506 1.15637H13.042C13.5521 1.15632 14.0487 1.31967 14.4592 1.62247C14.8697 1.92527 15.1724 2.35159 15.3229 2.83895M9.16972 2.83895C8.77153 2.8637 8.37405 2.89199 7.97727 2.92382C6.7774 3.02354 5.88095 4.04518 5.88095 5.2493V7.52173M15.3229 2.83895C15.7218 2.8637 16.1193 2.89199 16.5153 2.92382C17.7152 3.02354 18.6117 4.04518 18.6117 5.2493V16.2741C18.6117 16.9072 18.3602 17.5143 17.9125 17.962C17.4649 18.4096 16.8577 18.6611 16.2247 18.6611H13.8376M5.88095 7.52173H2.30044C1.64162 7.52173 1.10693 8.05642 1.10693 8.71523V20.6503C1.10693 21.3091 1.64162 21.8438 2.30044 21.8438H12.6441C13.303 21.8438 13.8376 21.3091 13.8376 20.6503V18.6611M5.88095 7.52173H12.6441C13.303 7.52173 13.8376 8.05642 13.8376 8.71523V18.6611M5.08528 15.4784L6.67662 17.0698L9.8593 13.0914"
                stroke="black"
                stroke-width="1.41557"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          tabBarLabel: "Video",
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={size || 22}
              height={size || 23}
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M14.9273 7.23679L10.1533 4.05411C10.0334 3.97414 9.89407 3.92822 9.75016 3.92125C9.60624 3.91428 9.46313 3.94652 9.33611 4.01452C9.20908 4.08253 9.10291 4.18375 9.02892 4.30738C8.95492 4.43102 8.91589 4.57242 8.91598 4.71651V11.0819C8.91589 11.2259 8.95492 11.3674 9.02892 11.491C9.10291 11.6146 9.20908 11.7158 9.33611 11.7838C9.46313 11.8519 9.60624 11.8841 9.75016 11.8771C9.89407 11.8701 10.0334 11.8242 10.1533 11.7443L14.9273 8.56158C15.0364 8.48895 15.1259 8.39047 15.1878 8.27491C15.2497 8.15935 15.2821 8.03028 15.2821 7.89918C15.2821 7.76809 15.2497 7.63902 15.1878 7.52346C15.1259 7.4079 15.0364 7.30942 14.9273 7.23679ZM10.5073 9.59496V6.20839L13.0515 7.89918L10.5073 9.59496ZM20.0554 0.738159H2.55063C2.12858 0.738159 1.72382 0.905818 1.42538 1.20425C1.12695 1.50269 0.95929 1.90745 0.95929 2.3295V13.4689C0.95929 13.8909 1.12695 14.2957 1.42538 14.5941C1.72382 14.8926 2.12858 15.0602 2.55063 15.0602H20.0554C20.4774 15.0602 20.8822 14.8926 21.1806 14.5941C21.479 14.2957 21.6467 13.8909 21.6467 13.4689V2.3295C21.6467 1.90745 21.479 1.50269 21.1806 1.20425C20.8822 0.905818 20.4774 0.738159 20.0554 0.738159ZM20.0554 13.4689H2.55063V2.3295H20.0554V13.4689ZM21.6467 17.4472C21.6467 17.6582 21.5629 17.8606 21.4137 18.0098C21.2644 18.1591 21.0621 18.2429 20.851 18.2429H1.75496C1.54393 18.2429 1.34155 18.1591 1.19234 18.0098C1.04312 17.8606 0.95929 17.6582 0.95929 17.4472C0.95929 17.2362 1.04312 17.0338 1.19234 16.8846C1.34155 16.7354 1.54393 16.6515 1.75496 16.6515H20.851C21.0621 16.6515 21.2644 16.7354 21.4137 16.8846C21.5629 17.0338 21.6467 17.2362 21.6467 17.4472Z"
                fill="black"
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color, size }) => (
            <Svg
              width={size || 22}
              height={size || 23}
              viewBox="0 0 17 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.734 16.7926C16.734 20.1112 12.183 20.4948 8.76063 20.4948L8.51573 20.4946C6.33531 20.4893 0.785278 20.3516 0.785278 16.7724C0.785278 13.5215 5.1534 13.0871 8.54968 13.0707L9.00553 13.0704C11.1858 13.0757 16.734 13.2134 16.734 16.7926ZM8.76063 14.5805C4.47039 14.5805 2.29557 15.3175 2.29557 16.7724C2.29557 18.2404 4.47039 18.9845 8.76063 18.9845C13.0499 18.9845 15.2237 18.2475 15.2237 16.7926C15.2237 15.3246 13.0499 14.5805 8.76063 14.5805ZM8.76063 0.488037C11.7087 0.488037 14.1061 2.88638 14.1061 5.83447C14.1061 8.78257 11.7087 11.1799 8.76063 11.1799H8.72841C5.78636 11.1708 3.40312 8.77149 3.41316 5.83145C3.41316 2.88638 5.81153 0.488037 8.76063 0.488037ZM8.76063 1.92584C6.60494 1.92584 4.85097 3.67878 4.85097 5.83447C4.84394 7.98312 6.5848 9.73506 8.73143 9.74311L8.76063 10.462V9.74311C10.9153 9.74311 12.6683 7.98916 12.6683 5.83447C12.6683 3.67878 10.9153 1.92584 8.76063 1.92584Z"
                fill="#252526"
              />
            </Svg>
          ),
        }}
      />
    </Tabs>
  );
}
