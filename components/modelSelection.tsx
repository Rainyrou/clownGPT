"use client";

import useSWR from "swr";
import React from "react";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo-0613",
  });

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isLoading={isLoading}
        onChange={(e) => setModel(e.value)}
        isSearchable
        menuPosition="fixed"
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
      />
    </div>
  );
}

export default ModelSelection;
