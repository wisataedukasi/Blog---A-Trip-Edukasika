"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-context" // Import useLanguage

export default function KebijakanPrivasiClientPage() {
  const { t } = useLanguage() // Use the translation hook

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{t("footer_privacy_policy")}</h1>
        <p className="text-gray-700 mb-4">{t("privacy_policy_intro_p1")}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{t("privacy_policy_info_collected_heading")}</h2>
        <p className="text-gray-700 mb-4">{t("privacy_policy_info_collected_p1")}</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>{t("privacy_policy_info_collected_item1")}</li>
          <li>{t("privacy_policy_info_collected_item2")}</li>
          <li>{t("privacy_policy_info_collected_item3")}</li>
          <li>{t("privacy_policy_info_collected_item4")}</li>
          <li>{t("privacy_policy_info_collected_item5")}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{t("privacy_policy_how_we_use_heading")}</h2>
        <p className="text-gray-700 mb-4">{t("privacy_policy_how_we_use_p1")}</p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>{t("privacy_policy_how_we_use_item1")}</li>
          <li>{t("privacy_policy_how_we_use_item2")}</li>
          <li>{t("privacy_policy_how_we_use_item3")}</li>
          <li>{t("privacy_policy_how_we_use_item4")}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
          {t("privacy_policy_data_protection_heading")}
        </h2>
        <p className="text-gray-700 mb-4">{t("privacy_policy_data_protection_p1")}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">
          {t("privacy_policy_third_party_sharing_heading")}
        </h2>
        <p className="text-gray-700 mb-4">{t("privacy_policy_third_party_sharing_p1")}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{t("privacy_policy_changes_heading")}</h2>
        <p className="text-gray-700 mb-4">{t("privacy_policy_changes_p1")}</p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{t("privacy_policy_contact_heading")}</h2>
        <p className="text-gray-700 mb-4">{t("privacy_policy_contact_p1")}</p>

        <div className="text-center mt-8">
          <Link href="/" className="text-[#FEA62D] hover:underline font-semibold">
            {t("back_to_home")}
          </Link>
        </div>
      </div>
    </div>
  )
}
