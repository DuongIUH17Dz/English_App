import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  ChevronRight,
  User,
  CreditCard,
  Bell,
  Lock,
  Globe,
  Moon,
  FileText,
  HelpCircle,
  UserPlus,
  LogOut,
  LucideIcon,
} from 'lucide-react-native';

interface SettingsItemProps {
  icon: LucideIcon;
  title: string;
  value?: string;
  onPress: () => void;
}

const SettingsItem: React.FC<SettingsItemProps> = ({ icon: Icon, title, value, onPress }) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress} accessibilityRole="button">
    <View style={styles.settingsItemLeft}>
      <Icon size={24} color="#666" />
      <Text style={styles.settingsItemText}>{title}</Text>
    </View>
    <View style={styles.settingsItemRight}>
      {value && <Text style={styles.settingsItemValue}>{value}</Text>}
      <ChevronRight size={24} color="#666" />
    </View>
  </TouchableOpacity>
);

export default function ProfileSettings() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <View style={styles.avatarIconContainer}>
              <Image
                source={require("../../assets/images/SQUARE.png")}
                style={{ width: 16, height: 16 }}
              />
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>James S. Hernandez</Text>
            <Text style={styles.email}>hernandez.redist@gmail.in</Text>
          </View>
        </View>

        <View style={styles.settingsSection}>
          <SettingsItem icon={User} title="Edit Profile" onPress={() => console.log('Edit Profile')} />
          <SettingsItem icon={CreditCard} title="Payment Option" onPress={() => console.log('Payment Option')} />
          <SettingsItem icon={Bell} title="Notifications" onPress={() => console.log('Notifications')} />
          <SettingsItem icon={Lock} title="Security" onPress={() => console.log('Security')} />
          <SettingsItem icon={Globe} title="Language" value="English (US)" onPress={() => console.log('Language')} />
          <SettingsItem icon={Moon} title="Dark Mode" onPress={() => console.log('Dark Mode')} />
          <SettingsItem icon={FileText} title="Terms & Conditions" onPress={() => console.log('Terms & Conditions')} />
          <SettingsItem icon={HelpCircle} title="Help Center" onPress={() => console.log('Help Center')} />
          <SettingsItem icon={UserPlus} title="Invite Friends" onPress={() => console.log('Invite Friends')} />
          <SettingsItem icon={LogOut} title="Logout" onPress={() => console.log('Logout')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#10b981',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  settingsSection: {
    paddingTop: 8,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsItemText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 16,
  },
  settingsItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsItemValue: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  avatarIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});