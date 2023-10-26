export const About = () => {
  return (
    <div
      id="about"
      class="relative mx-auto pt-24 max-w-7xl px-6 sm:mt-40 lg:px-8"
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
          عن الشركة
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          شركة أوشن فيو العقارية هي شركة رائدة في مجال العقارات، وتعتبر وجهة
          موثوقة للعملاء الذين يبحثون عن خدمات عقارية محترفة عالية الجودة.
        </p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-md leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <dt class="font-semibold text-gray-900">التأسيس</dt>
          <dd class="mt-1 text-gray-600">
            تأسست أوشن فيو العقارية برؤية تهدف إلى توفير حلول عقارية مبتكرة
            ومخصصة تلبي احتياجات العملاء. تقدم الشركة خدمات واسعة النطاق تشمل
            بيع وشراء العقارات، إدارة الممتلكات، الاستثمارات العقارية،
            والاستشارات العقارية.
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900">الخبرة</dt>
          <dd class="mt-1 text-gray-600">
            يتميز فريق العمل في أوشن فيو العقارية بخبرته ومعرفته الواسعة في سوق
            العقارات، مما يساعد على تقديم الخدمات بكفاءة واحترافية عالية. تعتمد
            الشركة على تكنولوجيا حديثة وأدوات متقدمة لتعزيز عملياتها وجعل تجربة
            العملاء سهلة وسلسة.
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900">العلاقات</dt>
          <dd class="mt-1 text-gray-600">
            بفضل شبكة علاقاتها القوية والمتعددة، توفر أوشن فيو العقارية وصولاً
            سهلاً إلى العروض والفرص العقارية المميزة، ما يساعد العملاء على اتخاذ
            قرارات مستنيرة وناجحة بشأن العقارات.
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900">القيم</dt>
          <dd class="mt-1 text-gray-600">
            تعتبر الشفافية والنزاهة من القيم الأساسية لأوشن فيو العقارية، حيث
            تعمل على بناء علاقات طويلة الأمد مع العملاء بناءً على الثقة
            والاحترافية. تسعى الشركة دائماً لتحقيق رضا العملاء الكامل من خلال
            تقديم خدمات عقارية استثنائية وحلول مبتكرة.
          </dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900">الاستشارة</dt>
          <dd class="mt-1 text-gray-600">
            استشر خبراء أوشن فيو العقارية لمساعدتك في تحقيق أهدافك العقارية،
            سواء كنت ترغب في بيع أو شراء عقار، إدارة ممتلكاتك، أو استثمار أموالك
            في العقارات.
          </dd>
        </div>
      </dl>
    </div>
  );
};
