import {supabase} from "./supabaseClient";

export const getAllData = async () => {
  const { data, error } = await supabase.from("users").select("*");
  console.log(data);

  if (error) {
    console.error("データ取得エラー:", error.message);
    return [];
  }

  return data;
};