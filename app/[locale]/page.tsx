import ExampleClientComponent from "@/components/ExampleClientComponent";
import initTranslations from "../i18n";

export default async function Home({ params: { locale } }: any) {
    const { t, resources } = await initTranslations(locale, ["home"]);
    console.log(t("description"), resources);

    return (
        <main className="bg-white h-screen flex flex-col items-center justify-center pb-40">
            <h1>{t("title")}</h1>
            <ExampleClientComponent />
        </main>
    );
}
