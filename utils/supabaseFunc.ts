import { supabase } from "../utils/supabase";

export const getAllTexts = async () => {
    const Texts = await supabase.from("makitrun").select("*");
    return Texts.data;
};