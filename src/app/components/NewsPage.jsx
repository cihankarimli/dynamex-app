"use client";

import { useState } from "react";
import NewsFilter from "../components/newsFilter";
import NewsCard from "../components/newsCard";

function NewsPage() {
  const [selectOption, setSelectoption] = useState("Xəbərlər");
  return (
    <div>
      <div className="headline">
        <h1>Xəbərlər və yeniliklər</h1>
        <p>
          Xidmətlərimizlə bağlı ən son yeniliklər və müxtəlif mövzularda
          mətumatlandırıcı bloqlar burada!
        </p>
        <div className="newsMain">
          <NewsFilter
            selectOption={selectOption}
            onSelectChange={setSelectoption}
          />
          <NewsCard Selectoption={selectOption} />
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
