import { Href, Redirect } from "expo-router";

export default function Index() {
  return <Redirect href={'/signin' as Href} />;
}