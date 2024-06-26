"use client";

import { useTranslation } from "react-i18next";
import LanguageChanger from "./LanguageChanger";

export default function ExampleClientComponent() {
    const { t } = useTranslation();

    return (
        <div>
            <p className="text-xl">{t("description")}</p>
            <LanguageChanger />
        </div>
    );
}
