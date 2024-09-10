import { useTranslation } from "react-i18next";


export default function CostCalcBtn({ model }) {

    const { t } = useTranslation();

  return (
    <>
      <button className="bg-[#8a8475] rounded px-6 py-2 w-full mt-10">
        {t("cost calculation")}
      </button>
    </>
  );
}
