import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@radix-ui/react-select";

const regions = {
  aza: "آذربايجان",
  teh: "تهران",
  ker: "کرمان",
  yaz: "یزد",
  zag: "زاگرس",
  shomalsar1: "شمال شرق 1",
  shomalsar2: "شمال شرق 2",
  shomalqar: "شمال غرب",
  sar: "شرق",
  qom: "قم",
  qar: "غرب",
  lor: "لرستان",
  kor: "خراسان",
  jnb: "جنوب",
  jnbsar: "جنوب شرق",
  hor: "هرمزگان",
  far: "فارس",
  esf: "اصفهان",
  ara: "اراک",
  shomal1: "شمال 1",
  shomal2: "شمال 2",
};

export default function TargetRegions(props: SelectProps) {
  return (
    <Select {...props}>
      <SelectTrigger className="w-full" style={{ direction: "rtl" }}>
        <SelectValue placeholder="ناحیه هدف را انتخاب کنید." />
      </SelectTrigger>
      <SelectContent style={{ direction: "rtl" }}>
        {Object.entries(regions).map(([key, label]) => (
          <SelectItem key={key} value={key}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
