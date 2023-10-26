import { ColorIcon } from "./icon/color";
import { FingerIcon } from "./icon/finger";
import { GargenIcon } from "./icon/garden";
import { ClipIcon } from "./icon/clip";
import { HomeIcon } from "./icon/home";
import { MoneyIcon } from "./icon/money";
import { SettingsIcon } from "./icon/settings";
import { ToolsIcon } from "./icon/tools";
import { WarningIcon } from "./icon/warning";

const services = [
  {
    title: "التأجير",
    icon: <HomeIcon />,
    detailes:
      "فيما يتعلق بخدمة التأجير، تقدم الشركة خدمات متكاملة لمساعدة المستأجرين في إيجاد العقار المناسب وتوفير عقود تأجير موحدة تحمي حقوق الطرفين. تعمل الشركة على مساعدة المستأجرين في جميع جوانب التأجير بما في ذلك البحث عن العقارات المتاحة، والتفاوض مع المالكين، وترتيب العقود والإجراءات القانونية اللازمة.",
  },
  {
    title: "توثيق العقود الموحدة ",
    icon: <FingerIcon />,
    detailes:
      "الشركة توفر خدمات توثيق العقود لضمان صحة وقانونية العقود بما يتعلق بالتأجير وبيع وشراء العقارات. تعمل الشركة على تأكيد صحة المعلومات وشروط العقد وتوفير توثيق قانوني موثوق.",
  },
  {
    title: "التحصيل وضمان الحقوق القانونية",
    icon: <MoneyIcon />,
    detailes:
      "تقدم الشركة خدمات لضمان تحصيل الايجارات أو الرسوم المستحقة وفقًا للعقود الموقعة. تعمل الشركة أيضًا على حماية حقوق الملاك والمستأجرين والتأكد من تنفيذ العقود بشكل صحيح وفقًا للتشريعات القانونية المعمول بها.    ",
  },
  {
    title: "صيانة الأعمال الكهربائية",
    icon: <ToolsIcon />,
    detailes:
      "تشمل فحص وإصلاح الأسلاك الكهربائية، واستبدال مقابس الكهرباء والمفاتيح، وإصلاح الأعطال الكهربائية الأخرى.",
  },
  {
    title: "صيانة الأعمال السباكة",
    icon: <SettingsIcon />,
    detailes:
      "تشمل إصلاح التسربات، وتركيب وصيانة المواسير والصنابير والمراحيض، وتنظيف الصرف وتصريف المياه.",
  },
  {
    title: "صيانة الدهانات والتشطيبات",
    icon: <ColorIcon />,
    detailes:
      "تشمل صبغ الجدران والأسقف، وتجديد الدهانات القديمة، وترميم وتجديد الأرضيات والبلاط. ",
  },
  {
    title: "صيانة النجارة",
    icon: <ClipIcon />,
    detailes:
      "تشمل إصلاح وتركيب الأبواب والنوافذ، وتجديد وتثبيت الخزائن والرفوف.",
  },
  {
    title: "صيانة الأمن والسلامة",
    icon: <WarningIcon />,
    detailes:
      " تتضمن فحص وإصلاح أجهزة الحماية من الحريق، وتجديد أنظمة الإنذار والأبواب الآمنة.",
  },
  {
    title: "صيانة الحدائق والمسابح",
    icon: <GargenIcon />,
    detailes:
      "تشمل تقديم خدمات الزراعة والتشذيب للحدائق، وتنظيف وصيانة حمامات السباحة.",
  },
];
export const Services = () => {
  return (
    <div
      id="services"
      class="mx-auto pt-24 max-w-7xl px-6 sm:mt-40 lg:px-8 relative"
    >
      <div
        class="absolute  inset-x-0 -top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-96"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#97cbd4a4] to-[#5d94e68e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          الخدمات
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          شركة أوشن فيو العقارية هي شركة متخصصة في مجال العقارات وتقدم مجموعة
          متنوعة من الخدمات. تشمل خدماتها التأجير وتوثيق العقود الموحدة والتحصيل
          وضمان الحقوق القانونية.
        </p>
        {/* <HomeIcon /> */}
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-xl leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {services.map((service) => {
          return (
            <div
              className="flex   justify-start items-start gap-5"
              key={service.title}
            >
              <div className="text-gray-500">{service.icon}</div>
              <div>
                <input
                  type="checkbox"
                  className="peer hidden"
                  id={service.title}
                />
                <dt class="font-semibold text-gray-900">{service.title}</dt>
                <dd class="mt-1 text-gray-600 line-clamp-3 peer-checked:line-clamp-none">
                  {service.detailes}
                </dd>
                <label
                  htmlFor={service.title}
                  className="cursor-pointer text-sky-600"
                >
                  اعرض المزيد{" "}
                </label>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
};
