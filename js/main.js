//Rus
$(function() {
  $(".br").click(function() {

    //======== HOME PAGE ========
      //nav
      $(".nav-item").children().eq(0).text("О нас");
      $(".nav-item").children().eq(1).text("Лечение");
      $(".nav-item").children().eq(2).text("Размещение");
      $(".nav-item").children().eq(3).text("Контакты");
      $(".language-selected").text("RU");
      $(".language-selected").removeClass("change-en");
      $(".language-selected").removeClass("change-es");
      $(".language-selected").addClass("change-br");
      //header
      $("#title").text("Санатория Zamin приглашает вас");
      //price-list
      $(".price-text").text("Типы комнат");
      $(".price-list-card:nth-child(1) h3").text("Люкс 2-х местный номер");
      $(".price-list-card:nth-child(2) h3").text("Стандарт 2-х местный номер");
      $(".price-list-card:nth-child(3) h3").text("Номер для матери с ребенком");
      $(".price-list-card:nth-child(1) p").text("В люксах есть две комнаты, спальня и небольшая гостиная. Современный дизайн помещения с видом на гору или внутренний сад санатория создает уютную атмосферу для отдыха. В номере также есть ванная комната с душем, туалет, холодильник, электрический чайник, удобная двуспальная кровать и шкаф-купе. 3-х разовое питание, качественное лечение и широкий спектр медицинских услуг.");
      $(".price-list-card:nth-child(2) p").text("Стандартные номера санатория сочетают в себе максимальный комфорт и стильный дизайн. Есть светлое пространство, удобная двуспальная кровать, мягкий диван, ванная комната с душем, туалет, холодильник, электрический чайник и шкаф.3-х разовое питание, качественное лечение и широкий спектр медицинских услуг.");
      $(".price-list-card:nth-child(3) p").text("Это отдельная категория номеров, расположенных рядом с санаторием. Эти номера приспособлены для отдыха матери и ребенка. В номере удобная и мягкая мебель, ванная комната с душем, туалет, холодильник, электрический чайник и шкаф. 3-х разовое питание, качественное лечение и широкий спектр медицинских услуг.");
      $(".price-list-card:nth-child(1) button").text("Подробнее");
      $(".price-list-card:nth-child(2) button").text("Подробнее");
      $(".price-list-card:nth-child(3) button").text("Подробнее");
    //   Biz haqimizda
      $("#about-us h3").text("О нас");
      $(".biz-haqimizda h3").text("Мы специализируемся на лучших комплексах по всей республике");
      $(".biz-haqimizda p").text("Не случайно природный климат одного из райских уголков Узбекистана Заамин сравнивают со всемирно известной Швейцарией. Заамин по праву считается жемчужиной Узбекистана. Окруженный необычным природным ландшафтом, санаторий становится поистине уникальным. Это место идеально подходит для тех, кто больше любит горы.");
      $(".about-information .btn").text("Подробнее");
      
      //Bizning afzalliklarimiz
      $("#advantages .advantages-head ").text("Наши преимущества");
      $(".advantages-card:nth-child(1) h4").text("Профилактическая медицина");
      $(".advantages-card:nth-child(2) h4").text("Сохранение красоты");
      $(".advantages-card:nth-child(3) h4").text("Активное долголетие");
      $(".advantages-card:nth-child(4) h4").text("Управление здравоохранением");
      $(".advantages-card:nth-child(5) h4").text("Увеличение резервов организма");
      
    //   Davolash
      $("#treatment h3").text("Лечение");
      $(".davolash h3").text("Мы установили новые стандарты для санатория здоровья");
      $(".davolash p").text("Санаторий, включающий в себя медицинский центр, поликлинику персонализированной медицины, бальнеологический комплекс, свежий воздух, детский сад, уютный ресторан.");
      $(".about-information .btn").text("Подробнее");
      $(".owl-item:nth-child(1) h4").text("Профилактическая медицина");
      $(".owl-item:nth-child(2) h4").text("Сохранение красоты");
      $(".owl-item:nth-child(3) h4").text("Активное долголетие");
      $(".owl-item:nth-child(4) h4").text("Управление здравоохранением");
      $(".owl-item:nth-child(5) h4").text("Увеличение резервов организма");
      $(".owl-item:nth-child(6) h4").text("Снижение уровня стресса");
      
    //   Galereya
      $("#gallery h3").text("Галерея");
      $(".navv .nav-item:nth-child(1) a").text("Размещение");
      $(".navv .nav-item:nth-child(2) a").text("Ресторан");
      $(".navv .nav-item:nth-child(3) a").text("Медицина");
      $(".navv .nav-item:nth-child(4) a").text("Отдых");
      $(".nav-g .nav-item:nth-child(1) a").text("Люкс");
      $(".nav-g .nav-item:nth-child(2) a").text("Стандартный");
      $(".nav-g .nav-item:nth-child(3) a").text("Мать ребенка");
      
      // Footer
      $("#ul-1 .footer-item:nth-child(1) a").text("О нас");
      $("#ul-1 .footer-item:nth-child(2) a").text("Наши преимущества");
      $("#ul-1 .footer-item:nth-child(3) a").text("Лечение");
      $("#ul-1 .footer-item:nth-child(4) a").text("Контакты");

      $("#ul-2 .footer-item:nth-child(1) a").text("Галерея");
      $("#ul-2 .footer-item:nth-child(2) a").text("Спорт");
      $("#ul-2 .footer-item:nth-child(3) a").text("Отдых");
      $("#ul-2 .footer-item:nth-child(4) a").text("Ресторан");
      $("#ul-2 .footer-item:nth-child(5) a").text("Медицина");

      $("#ul-3 .footer-item:nth-child(1) a").text("Джизакская область Заминский район Заминский национальный природный парк");
      $("#ul-3 .footer-item:nth-child(2) a").text("+998723924010");
      $("#ul-3 .footer-item:nth-child(3) a").text("+998723924014");
      $("#ul-3 .footer-item:nth-child(4) a").text("+998995540509");
      $("#ul-3 .footer-item:nth-child(5) a").text("sihatgoh_zomin@mail.ru");

    // Kontakt Page

      $(".contact__wrapper .contact__title").text("Наши контакты");
      $(".form .form__name-label").text("Имя Фамилия");
      $(".form .form__tel-label").text("Ваш номер телефона");
      $(".form .form__textarea-label").text("Напишите нам сообщение");
      $(".form .form__button").text("Отправить");
      $(".contact-box__sub-box:nth-child(1) h4").text("Наш адрес");
      $(".contact-box__sub-box:nth-child(1) p").text("Джизакская область Заминский район Заминский национальный природный парк");
      $(".contact-box__sub-box:nth-child(2) h4").text("Телефон");
      $(".contact-box__sub-box:nth-child(3) h4").text("Напишите нам");

    // Razmisheniya
      $(".razmisheniya-hero h1").text("Просторные и современные номера");
      $(".price-list__box h2").text("Типы комнат");
      $(".card:nth-child(1) .price-list__sub-title").text("Люкс 2-х местный номер");
      $(".card:nth-child(2) .price-list__sub-title").text("Стандарт 2-х местный номер");
      $(".card:nth-child(3) .price-list__sub-title").text("Номер для матери с ребенком");
      $(".card:nth-child(1) .price-list__text").text("В люксах есть две комнаты, спальня и небольшая гостиная. Современный дизайн помещения с видом на гору или внутренний сад санатория создает уютную атмосферу для отдыха. В номере также есть ванная комната с душем, туалет, холодильник, электрический чайник, удобная двуспальная кровать и шкаф-купе. 3-х разовое питание, качественное лечение и широкий спектр медицинских услуг.");
      $(".card:nth-child(2) .price-list__text").text("Стандартные номера санатория сочетают в себе максимальный комфорт и стильный дизайн. Есть светлое пространство, удобная двуспальная кровать, мягкий диван, ванная комната с душем, туалет, холодильник, электрический чайник и шкаф.3-х разовое питание, качественное лечение и широкий спектр медицинских услуг.");
      $(".card:nth-child(3) .price-list__text").text("Это отдельная категория номеров, расположенных рядом с санаторием. Эти номера приспособлены для отдыха матери и ребенка. В номере удобная и мягкая мебель, ванная комната с душем, туалет, холодильник, электрический чайник и шкаф. 3-х разовое питание, качественное лечение и широкий спектр медицинских услуг.");
      $(".img-sort .img-sort__title").text("Галерея");
    
    // biz haqimizda
    $(".about-hero__wrapper h1").text("О санатории");
    $("#text1-box p").text("Санаторий “Зомин”-климатический курорт, расположен в одном из красивейших уголков Джизакской области, Зааминского района, на северном склоне Туркестанского хребта, на высоте 2000 метров над уровнем моря, на территории горно-лесного заповедника Заамин. Зааминский горный лесной государственный заповедник расположен на северном склоне Западной части Туркестанского хребта, занимая бассейны озер кулсай и Кырылсай. Площадь 15,5 тыс. га, из которых 11,2 тыс. га составляют еловые леса. В заповеднике проводятся работы по изучению биологии горных лесов, разведению можжевельника, сохранению видов животных и растений . В зависимости от сложности рельефа и различных климатических почвенных условий в заповеднике выделяют 3 растительных района (степной, лесной, субальпийский). В заповеднике растут можжевельники, которым 180, а то и 400 лет. Тянь-Шаньская четани, Туркестанская Береза, из кустарников растут барбарис, Наматак,трилистник, иргай, каблук. Животный мир заповедника разнообразен. В заповеднике обитают такие дикие животные, как Туркестанский рысь, белоголовый медведь, Архар, барсук, а также волк, Барсук, лиса, Сойка, кабан, занесенные в Красную книгу. На территории заповедника описано 720 видов растений, 130 видов птиц, 37 видов млекопитающих, 8 видов рептилий, один вид рыб.");

    $("#text2-box p").text("Неслучайно природный климат одной из райских стран Узбекистана Заамин по своей природе можно сравнить со всемирно известной Швейцарией. Вот почему мечта Шарафа Рашидова, долгие годы возглавлявшего нашу республику, выдающегося государственного и общественного деятеля, построить в объятиях уникальной природы, среди небоскребов, часовню “матери и дети” сбылась. В 1979 году началось строительство санатория Заамин. Часовня была построена архитекторами и строителями полукруглой формы в виде большого белого корабля, представляющего собой комплекс отдыха и оздоровления, воплощающий национальные современные архитектурные традиции. Информация о конкретных лечебных факторах санатория. Санаторий Заамин расположен в 50 км от районного центра, в северных предгорьях Туркестанского хребта, среди Арчазор на территории заповедника на высоте 2000 метров над уровнем моря. Поэтому атмосферное давление относительно низкое, воздух богат кислородом и ультрафиолетовым светом от солнца, он очень эффективен при лечении заболеваний верхних дыхательных путей и нервной системы. Основным лечебным фактором является горный климат. Кроме того, для лечения больных бронхиальной астмой применяют водолечение (искусственные жемчужные, йодобромистые, иглолистные ванны, душевые, пруд), физиотерапию, лечебную физкультуру, терренкур, массаж, сауну, а также галокамеру.");
    
    // licheniya
    $("#licheniya-zamin h2").text("Методы лечения в санатории Зaaмин");
    $("#box1 h3").text("Галотерапия");
    $("#box2 h3").text("Кедровая бочка");
    $("#box3 h3").text("Ингаляционная терапия");
    $("#box1 p").text("- это метод лечения, основанный на благотворном влиянии на организм человека микроклимата естественных соляных пещер, искусственно созданного и насыщенного ионами хлорида натрия. Такой микроклимат гипоаллергенен и позволяет эффективно очищать дыхательные пути без применения медикаментов. Искусственный микроклимат (галотерапия) оказывает следующее положительное терапевтическое действие: муколитическое (переносчик мокроты из бронхов в легких). Гипосенсибилизирующие (подавляющие аллергическую чувствительность в организме человека). Иммунорегулятор (усилитель, усилитель иммунитета у человека). Бактерицидные и бактериостатические (убивающие бактерии и останавливающие развитие бактерий). Мельчайшие фракции соли в виде заряженных ионов проникают глубоко в дыхательные пути, усиливая все защитные силы дыхательного аппарата и повышая иммунитет. Соль, попавшая в бронхи, усиливает отток жидкости из воспаленного слоя в полость бронхов, а сама по себе способствует оттоку затвердевших комков из инфицированного участка. Соль вытягивает жидкость и, таким образом, уменьшает воспаление. Соль усиливает движения эпителиальных ресничек, и в результате мокрота ускоряется, унося с собой всю патогенную флору (микробы, вирусы, токсины). Искусственный микроклимат (галотерапия) рекомендуется пациентам со следующими заболеваниями: бронхиальная астма 1-й степени легкой и средней тяжести (инфекционно-аллергического) типа; легочно-сердечная недостаточность I-й(первой) степени; бронхиальная астма с хроническим бронхитом; состояние, граничащее с пневмосклерозом легких; предрасположенность бронхиальной астмы к приступам в состоянии неполного в период ремиссии; при хронических обструктивных заболеваниях легких; при необструктивных заболеваниях легких (бронхитах); при рините (воспалении носовой полости); при рините, сопровождающемся бронхоспазмом; Рекомендуется при инфекциях органов дыхания (ОРВИ,ОРЗ и др.); при аллергических высыпаниях на коже; при эндемическом зобе (зобе).");
    
    $("#box2 p").text("Кедровая бочка-фитобочка-это древний традиционный метод исцеления и очищения, который естественным образом оказывает мягкое, свободное от стресса воздействие на человеческий организм. Этот метод лечения пользуется большим спросом благодаря следующим лечебным факторам: поскольку фитобочка, по сути, имплантируется во все тело человека, кроме головы, Лечение имеет сложный структурный эффект, который влияет на все тело и освобождает его от токсинов и блоков. При этом пациент обладает свойством отдыхать и расслабляться, гармонизировать нервную систему, избавляться от мышечных болей, нормализовать обмен веществ, противостоять простудам и вирусным инфекциям дыхательной системы, насыщать кожу полезными веществами, омолаживающими и очищающими ткани. Кедровая бочка-это процедура, необходимая для хорошего самочувствия: в ней пары лекарственных трав и эфирных масел расширяют сосуды и усиливают потоотделение, вымывают и очищают кожу от токсинов, целебные вещества проникают в открытые очищенные поры. Даже одна процедура улучшает состояние кожи, благодаря очищению и тонизированию кожа омолаживается, становится упругой и подтянутой. Еще одно преимущество этого лечения — простота приготовления и проведения. Процедура длится 15 минут. После лечения вы почувствуете покой и спокойствие, приятную жизнерадостность, необычайную легкость тела (состояние, будто сбросили несколько лет и килограммов).");
    
    $("#box3 p").text("Ингаляционная терапия (ингаляционный метод лечения) -введение в дыхательные пути путем вдыхания лекарственных и биологически активных веществ, насыщенных воздухом, в лечебных и профилактических целях. Эти лекарственные вещества улучшают выведение мокроты из дыхательных путей, уменьшая ее вязкость в дыхательных путях. Кроме того, с помощью этого метода он очень хорошо действует против микробов в легочной ткани и дыхательных путях, а также воспалений, которые они вызывают.В то же время ингаляционная терапия улучшает дыхание и, как следствие, снабжение организма кислородом за счет расширения дыхательных путей - бронхов. Влажно-тепловой эффект при вдыхании теплого влажного воздуха резко усиливает кровоснабжение слизистой носа, гортани, гортани, трахеи и бронхов, снижает вязкость слизи, разжижает ее и ускоряет отток, усиливает активность реснитчатого эпителия, способствует восстановлению нормального состояния слизистой дыхательных путей, препятствует ее пересыханию. Лекарственные травы (в виде настоев, настоев, экстрактов, отваров, эликсиров, сока и т. д.) используются для всех видов ингаляций Ингаляционная терапия очень хорошо действует при острых и хронических проявлениях заболеваний верхних дыхательных путей, бронхов и легких, при острых и хронических формах ЛОР-сферы, при обструктивном синдроме, ларингоспазме, бронхиальной астме и в послеоперационном периоде в профилактике осложнений.");
    
    $(".licheniya-spiska__wrapper h2").text("Мы предоставляем медицинские услуги в следующих областях:");

    $("#list1 .licheniya-spiska__item:nth-child(1)").text("Амплипульстерапия (лечение переменным током)");
    $("#list1 .licheniya-spiska__item:nth-child(2)").text("Инголяция");
    $("#list1 .licheniya-spiska__item:nth-child(3)").text("Лечение диадинамическим (переменным) током");
    $("#list1 .licheniya-spiska__item:nth-child(4)").text("Электросон");
    $("#list1 .licheniya-spiska__item:nth-child(5)").text("Световая ванна");
    $("#list1 .licheniya-spiska__item:nth-child(6)").text("Ультравысокочастотная терапия (УВЧ)");
    $("#list1 .licheniya-spiska__item:nth-child(7)").text("Соллюкс (лечение инфракрасным светом)");
    $("#list1 .licheniya-spiska__item:nth-child(8)").text("Тубус-кварц");
    $("#list1 .licheniya-spiska__item:nth-child(9)").text("Электро фарез");
    $("#list1 .licheniya-spiska__item:nth-child(10)").text("Магнитотерапия");
    $("#list1 .licheniya-spiska__item:nth-child(11)").text("Ультразвуковая терапия (УЗТ)");
    $("#list1 .licheniya-spiska__item:nth-child(12)").text("Галотерапия (лечение солью)");
    $("#list2 .licheniya-spiska__item:nth-child(1)").text("ГАИ (гидроаэроионизация-обработка аэрозольными ионами)");
    $("#list2 .licheniya-spiska__item:nth-child(2)").text("Общая жидкая глинистая");
    $("#list2 .licheniya-spiska__item:nth-child(3)").text("Жемчужные ванны (хвойно-жемчужные ванны)");
    $("#list2 .licheniya-spiska__item:nth-child(4)").text("Электро сандалии");
    $("#list2 .licheniya-spiska__item:nth-child(5)").text("Фито чай");
    $("#list2 .licheniya-spiska__item:nth-child(6)").text("Кислородный коктейль");
    $("#list2 .licheniya-spiska__item:nth-child(7)").text("Лазерное лечение");
    $("#list2 .licheniya-spiska__item:nth-child(8)").text("Массаж");
    $("#list2 .licheniya-spiska__item:nth-child(9)").text("Парафинотерапия");
    $("#list2 .licheniya-spiska__item:nth-child(10)").text("Цзин Да (многофункциональный лечебный аппарат)");
    $("#list2 .licheniya-spiska__item:nth-child(11)").text("Кедровая бочка");
    $("#list2 .licheniya-spiska__item:nth-child(12)").text("Озонотерапия");

    
  });
});

//English
$(function() {
  $(".en").click(function() {

    //======== HOME PAGE ========
      //header
      $(".nav-item").children().eq(0).text("About us");
      $(".nav-item").children().eq(1).text("Treatment");
      $(".nav-item").children().eq(2).text("Accommodation");
      $(".nav-item").children().eq(3).text("Contacts");
      $(".language-selected").text("EN");
      $(".language-selected").removeClass("change-es");
      $(".language-selected").removeClass("change-br");
      $(".language-selected").addClass("change-en");
      //section
    //   $("#title").text("Sanatorium Zamin invites you");
    //   //About
    //   $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
    //   $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
    //   $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
    //   $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
    //   $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
    //   $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");

    //price-list
      $(".price-text").text("Types of rooms");
      $(".price-list-card:nth-child(1) h3").text("Suite 2-bed room");
      $(".price-list-card:nth-child(2) h3").text("Standard 2-bed room");
      $(".price-list-card:nth-child(3) h3").text("Room for a mother with a child");
      $(".price-list-card:nth-child(1) p").text("The suites have two rooms, a bedroom and a small living room. The modern design of the room with a view of the mountain or the inner garden of the sanatorium creates a cozy atmosphere for relaxation. The room also has a bathroom with shower, toilet, refrigerator, electric kettle, comfortable double bed and wardrobe. 3 meals a day, high-quality treatment and a wide range of medical services.");
      $(".price-list-card:nth-child(2) p").text("The standard rooms of the sanatorium combine maximum comfort and stylish design. There is a bright space, a comfortable double bed, a soft sofa, a bathroom with a shower, a toilet, a refrigerator, an electric kettle and a wardrobe.3 meals a day, high-quality treatment and a wide range of medical services.");
      $(".price-list-card:nth-child(3) p").text("This is a separate category of rooms located next to the sanatorium. These rooms are adapted for the rest of the mother and child. The room has comfortable and upholstered furniture, a bathroom with a shower, a toilet, a refrigerator, an electric kettle and a wardrobe. 3 meals a day, high-quality treatment and a wide range of medical services.");
      $(".price-list-card:nth-child(1) button").text("More");
      $(".price-list-card:nth-child(2) button").text("More");
      $(".price-list-card:nth-child(3) button").text("More");
  //   Biz haqimizda
      $("#about-us h3").text("About us");
      $(".biz-haqimizda h3").text("We specialize in the best complexes throughout the republic");
      $(".biz-haqimizda p").text("It is no coincidence that the natural climate of one of the paradisiacal corners of Uzbekistan Zaamin is compared with the world-famous Switzerland. Zaamin is rightfully considered the pearl of Uzbekistan. Surrounded by an unusual natural landscape, the sanatorium becomes truly unique. This place is ideal for those who love mountains more.");
      $(".about-information .btn").text("More");
    
    //Bizning afzalliklarimiz
      $("#advantages .advantages-head ").text("Our advantages");
      $(".advantages-card:nth-child(1) h4").text("Preventive medicine");
      $(".advantages-card:nth-child(2) h4").text("Preserving beauty");
      $(".advantages-card:nth-child(3) h4").text("Active longevity");
      $(".advantages-card:nth-child(4) h4").text("Health management");
      $(".advantages-card:nth-child(5) h4").text("Increasing the reserves of the body");
    
  //   Davolash
      $("#treatment h3").text("Treatment");
      $(".davolash h3").text("We set new standards for the health sanatorium");
      $(".davolash p").text("A sanatorium, which includes a Medical Center, a personalized medical  clinic, a balneological complex, fresh air, a kindergarten, a cozy restaurant.");
      $(".about-information .btn").text("More");
      $(".owl-item:nth-child(1) h4").text("Preventive medicine");
      $(".owl-item:nth-child(2) h4").text("Preserving beauty");
      $(".owl-item:nth-child(3) h4").text("Active longevity");
      $(".owl-item:nth-child(4) h4").text("Health management");
      $(".owl-item:nth-child(5) h4").text("Increasing the reserves of the body");
      $(".owl-item:nth-child(6) h4").text("Reducing stress levels");
    
  //   Galereya
      $("#gallery h3").text("Gallery");
      $(".navv .nav-item:nth-child(1) a").text("Placement");
      $(".navv .nav-item:nth-child(2) a").text("Restaurant");
      $(".navv .nav-item:nth-child(3) a").text("Medicine");
      $(".navv .nav-item:nth-child(4) a").text("Rest");
      $(".nav-g .nav-item:nth-child(1) a").text("Luxury");
      $(".nav-g .nav-item:nth-child(2) a").text("Standard");
      $(".nav-g .nav-item:nth-child(3) a").text("Mother child");
    

    // Kontakt Page

      $(".contact__wrapper .contact__title").text("Our contacts");
      $(".form .form__name-label").text("First Name Last Name");
      $(".form .form__tel-label").text("Your phone number");
      $(".form .form__textarea-label").text("Write us a message");
      $(".form .form__button").text("Send");
      $(".contact-box__sub-box:nth-child(1) h4").text("Our address");
      $(".contact-box__sub-box:nth-child(1) p").text("Jizzakh region Zaaminsky district Zaminsky National Natural Park");
      $(".contact-box__sub-box:nth-child(2) h4").text("Telephone");
      $(".contact-box__sub-box:nth-child(3) h4").text("Write to us");


      // Razmisheniya
      $(".razmisheniya-hero h1").text("Spacious and modern rooms");
      $(".price-list__box h2").text("Types of rooms");
      $("#row #card:nth-child(1) .price-list__sub-box h4").text("Suite 2-bed room");
      $("#row #card:nth-child(2) .price-list__sub-box h4").text("Standard 2-bed room");
      $("#row #card:nth-child(3) .price-list__sub-box h4").text("Room for a mother with a child");
      $("#row #card:nth-child(1) .price-list__sub-box p").text("The suites have two rooms, a bedroom and a small living room. The modern design of the room with a view of the mountain or the inner garden of the sanatorium creates a cozy atmosphere for relaxation. The room also has a bathroom with shower, toilet, refrigerator, electric kettle, comfortable double bed and wardrobe. 3 meals a day, high-quality treatment and a wide range of medical services.");
      $("#row #card:nth-child(2) .price-list__sub-box p").text("The standard rooms of the sanatorium combine maximum comfort and stylish design. There is a bright space, a comfortable double bed, a soft sofa, a bathroom with a shower, a toilet, a refrigerator, an electric kettle and a wardrobe.3 meals a day, high-quality treatment and a wide range of medical services.");
      $("#row #card:nth-child(3) .price-list__sub-box p").text("This is a separate category of rooms located next to the sanatorium. These rooms are adapted for the rest of the mother and child. The room has comfortable and upholstered furniture, a bathroom with a shower, a toilet, a refrigerator, an electric kettle and a wardrobe. 3 meals a day, high-quality treatment and a wide range of medical services.");
      $(".img-sort .img-sort__title").text("Gallery");

      // biz haqimizda
      $(".about-hero__wrapper h1").text("About the sanatorium");
      $("#text1-box p").text("Sanatorium Zaamin is a climatic resort, located in one of the most beautiful corners of the Jizzakh region, Zaamin district, on the northern slope of the Turkestan ridge, at an altitude of 2000 meters above sea level, on the territory of the mountain forest reserver Zaamin. The Zaamin Mountain Forest State Reserve is located on the northern slope of the Western part of the Turkestan Ridge, occupying the basins of the Kulsai and Kyrylsai lakes. The area is 15.5 thousand hectares, of which 11.2 thousand hectares are spruce forests. In the reserve, work is being carried out to study the biology of mountain forests, the cultivation of juniper, the conservation of animal and plant species . Depending on the complexity of the relief and various climatic soil conditions, there are 3 vegetation areas in the reserve (steppe, forest, subalpine).Junipers grow in the reserve, which are 180 or even 400 years old. Tien Shan chetani, Turkestan Birch, barberry, namatak, shamrock, irgai, heel grow from shrubs. The wildlife of the reserve is diverse. The reserve is home to such wild animals as the Turkestan lynx, white-headed bear, Argali, badger, as well as wolf, Badger, fox, Jay, wild boar, listed in the Red Boo. 720 species of plants, 130 species of birds, 37 species of mammals, 8 species of reptiles, one species of fish are described on the territory of the reserve.");
    
      $("#text2-box p").text("It is no coincidence that the natural climate of one of the paradisiacal countries of Uzbekistan Zaamin by its nature can be compared with the world-famous Switzerland. That is why the dream of Sharaf Rashidov, who headed our republic for many years, an outstanding statesman and public figure, to build a chapel “mothers and children” in the embrace of a unique nature, among skyscrapers, has come true. In 1979, the construction of the sanatorium Zaamin began. The chapel was built by architects and builders of a semicircular shape in the form of a big white ship, which is a recreation and wellness complex embodying national modern architectural traditions.Information about specific therapeutic factors of the sanatorium. The sanatorium Zaamin is located 50 km from the district center, in the northern foothills of the Turkestan ridge, among the Archazor on the territory of the reserve at an altitude of 2000 meters above sea level. Therefore, atmospheric pressure is relatively low, the air is rich in oxygen and ultraviolet light from the sun, it is very effective in the treatment of diseases of the upper respiratory tract and nervous system. The main therapeutic factor is the mountain climate. In addition, for the treatment of patients with bronchial asthma, hydrotherapy (artificial pearl, iodine-bromine, needle-leaf baths, showers, pond), physiotherapy, physical therapy, terrencure, massage, sauna, as well as a halocamera are used.");

      // licheniya
      $("#licheniya-zamin h2").text("Methods of treatment in the sanatorium Zaamin");
      $("#box1 h3").text("Halotherapy");
      $("#box2 h3").text("Cedar Barrel");
      $("#box3 h3").text("Inhalation therapy");
      $("#box1 p").text("- this is a method of treatment based on the beneficial effect on the human body of the microclimate of natural salt caves, artificially created and saturated with sodium chloride ions. This microclimate is hypoallergenic and allows you to effectively clean the respiratory tract without the use of medications. Artificial microclimate (halotherapy) has the following positive therapeutic effect: mucolytic (carrier of sputum from the bronchi in the lungs). Hyposensitizing (suppressing allergic sensitivity in the human body). Immunoregulator (booster, immune booster in humans). Bactericidal and bacteriostatic (killing bacteria and stopping the development of bacteria). The smallest fractions of salt in the form of charged ions penetrate deep into the respiratory tract, strengthening all the defenses of the respiratory apparatus and increasing immunity. Salt trapped in the bronchi increases the outflow of fluid from the inflamed layer into the bronchial cavity, and by itself contributes to the outflow of hardened lumps from the infected area. Salt draws out the fluid and thus reduces inflammation. Salt enhances the movements of epithelial cilia, and as a result, sputum accelerates, taking with it all pathogenic flora (microbes, viruses, toxins). Artificial microclimate (halotherapy) is recommended for patients with the following diseases: bronchial asthma of the 1st degree of mild and moderate severity (infectious and allergic) type; pulmonary heart failure of the first (first) degree; bronchial asthma with chronic bronchitis; a condition bordering on pneumosclerosis of the lungs; predisposition of bronchial asthma to seizures in a state of incomplete during remission; with chronic obstructive pulmonary diseases; with non-obstructive lung diseases (bronchitis); with rhinitis (inflammation of the nasal cavity); with rhinitis, accompanied by bronchospasm; Recommended for respiratory infections (ARVI, acute respiratory infections, etc.); with allergic skin rashes; with endemic goiter (goiter).");
    
      $("#box2 p").text("Cedar barrel-phyto-barrel is an ancient traditional method of healing and purification, which naturally has a mild, stress-free effect on the human body. This method of treatment is in great demand due to the following therapeutic factors: since the phyto-bulb is, in fact, implanted into the entire human body, except for the head, the treatment has a complex structural effect that affects the whole body and frees it from toxins and blocks. At the same time, the patient has the ability to rest and relax, harmonize the nervous system, get rid of muscle pain, normalize metabolism, resist colds and viral infections of the respiratory system, saturate the skin with useful substances, rejuvenating and cleansing tissues. Cedar barrel is a procedure necessary for well-being: in it, pairs of medicinal herbs and essential oils dilate blood vessels and increase sweating, wash out and cleanse the skin of toxins, healing substances penetrate into the open, cleansed pores. Even one procedure improves the condition of the skin, thanks to cleansing and toning, the skin is rejuvenated, becomes elastic and taut. Another advantage of this treatment is the ease of preparation and implementation. The procedure lasts 15 minutes. After treatment, you will feel peace and tranquility, pleasant cheerfulness, extraordinary lightness of the body (a state as if you have lost several years and kilograms).");
    
      $("#box3 p").text("Inhalation therapy (inhalation method of treatment) is the introduction into the respiratory tract by inhaling medicinal and biologically active substances saturated with air for therapeutic and preventive purposes. These medicinal substances improve the excretion of sputum from the respiratory tract, reducing its viscosity in the respiratory tract. In addition, with this method, it works very well against microbes in the lung tissue and respiratory tract, as well as the inflammation that they cause.At the same time, inhalation therapy improves breathing and, as a result, the supply of oxygen to the body due to the expansion of the respiratory tract - bronchi. The wet-thermal effect when inhaling warm moist air dramatically increases the blood supply to the nasal mucosa, larynx, larynx, trachea and bronchi, reduces the viscosity of mucus, dilutes it and accelerates outflow, increases the activity of the ciliated epithelium, helps restore the normal state of the mucous membrane of the respiratory tract, prevents it from drying out. Medicinal herbs (in the form of infusions, infusions, extracts, decoctions, elixirs, juice, etc.) are used for all types of inhalations Inhalation therapy works very well with acute and chronic manifestations of diseases of the upper respiratory tract, bronchi and lungs, with acute and chronic forms of the ENT sphere, with obstructive syndrome, laryngospasm, bronchial asthma and in the postoperative period in the prevention of complications.");
    
      $(".licheniya-spiska__wrapper h2").text("We provide medical services in the following areas:");

      $("#list1 .licheniya-spiska__item:nth-child(1)").text("Amplipulstherapy (alternating current treatment)");
      $("#list1 .licheniya-spiska__item:nth-child(2)").text("Inhalation");
      $("#list1 .licheniya-spiska__item:nth-child(3)").text("Treatment with diadynamic (alternating) current");
      $("#list1 .licheniya-spiska__item:nth-child(4)").text("Electro sleep");
      $("#list1 .licheniya-spiska__item:nth-child(5)").text("Light bath");
      $("#list1 .licheniya-spiska__item:nth-child(6)").text("Ultra-high frequency therapy");
      $("#list1 .licheniya-spiska__item:nth-child(7)").text("Sollux (infrared light treatment)");
      $("#list1 .licheniya-spiska__item:nth-child(8)").text("Tube-quartz");
      $("#list1 .licheniya-spiska__item:nth-child(9)").text("Elektroforez");
      $("#list1 .licheniya-spiska__item:nth-child(10)").text("Magnetic therapy");
      $("#list1 .licheniya-spiska__item:nth-child(11)").text("Ultrasound therapy");
      $("#list1 .licheniya-spiska__item:nth-child(12)").text("Halotherapy (salt treatment)");
      $("#list2 .licheniya-spiska__item:nth-child(1)").text("HAI (hydroaeroionization-treatment with aerosol ions)");
      $("#list2 .licheniya-spiska__item:nth-child(2)").text("Common liquid clay");
      $("#list2 .licheniya-spiska__item:nth-child(3)").text("Pearl baths (coniferous pearl baths)");
      $("#list2 .licheniya-spiska__item:nth-child(4)").text("Electro sandals");
      $("#list2 .licheniya-spiska__item:nth-child(5)").text("Herbal tea");
      $("#list2 .licheniya-spiska__item:nth-child(6)").text("Oxygen cocktail");
      $("#list2 .licheniya-spiska__item:nth-child(7)").text("Laser treatment");
      $("#list2 .licheniya-spiska__item:nth-child(8)").text("Massage");
      $("#list2 .licheniya-spiska__item:nth-child(9)").text("Paraffinotherapy");
      $("#list2 .licheniya-spiska__item:nth-child(10)").text("Ching Da (multifunctional medical device)");
      $("#list2 .licheniya-spiska__item:nth-child(11)").text("Cedar barrel");
      $("#list2 .licheniya-spiska__item:nth-child(12)").text("Ozone therapy");
      // footer 
      $("#ul-1 .footer-item:nth-child(1) a").text("About Us");
      $("#ul-1 .footer-item:nth-child(2) a").text("Our advantages");
      $("#ul-1 .footer-item:nth-child(3) a").text("Treatment");
      $("#ul-1 .footer-item:nth-child(4) a").text("Contacts");

      $("#ul-2 .footer-item:nth-child(1) a").text("Gallery");
      $("#ul-2 .footer-item:nth-child(2) a").text("Sport");
      $("#ul-2 .footer-item:nth-child(3) a").text("Rest");
      $("#ul-2 .footer-item:nth-child(4) a").text("Restaurant");
      $("#ul-2 .footer-item:nth-child(5) a").text("Medicine");

      $("#ul-3 .footer-item:nth-child(1) a").text("Jizzakh regioan Zaamin district Zaaminn National National Park");
      $("#ul-3 .footer-item:nth-child(2) a").text("+998723924010");
      $("#ul-3 .footer-item:nth-child(3) a").text("+998723924014");
      $("#ul-3 .footer-item:nth-child(4) a").text("+998995540509");
      $("#ul-3 .footer-item:nth-child(5) a").text("sihatgoh_zomin@mail.ru");

  });
});

//UZB
$(function() {
  $(".es").click(function() {

    //======== HOME PAGE ========

      //encabezamiento
      $(".nav-item").children().eq(0).text("Biz haqimizda");
      $(".nav-item").children().eq(1).text("Davolash");
      $(".nav-item").children().eq(2).text("Turar joy");
      $(".nav-item").children().eq(3).text("Kontaktlar");
      $(".language-selected").text("UZ");
      $(".language-selected").removeClass("change-br");
      $(".language-selected").removeClass("change-en");
      $(".language-selected").addClass("change-es");
      //sección
    //   $("#title").text("Zamin sanatoriysi\n" +
    //       "sizni taklif qiladi");
    //   //sobre
    //   $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluciones");
    //   $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visión General");
    //   $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagos");
    //   $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Soporte");
    //   $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ayuda");
    //   $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Términos y Políticas");

    //price-list
    $(".price-text").text("Xona turlari");
    $(".price-list-card:nth-child(1) h3").text("Luks 2 kishilik xona");
    $(".price-list-card:nth-child(2) h3").text("Standart 2 kishilik xona");
    $(".price-list-card:nth-child(3) h3").text("Ona bola uchun xona");
    $(".price-list-card:nth-child(1) p").text("Luks xonalarida ikkita xona, yotoqxona va kichik yashash xonasi mavjud. Toqqa yoki sanatoriyning ichki bog'iga qaragan xonaning zamonaviy dizayni dam olish uchun qulay muhit yaratadi. Shuningdek, xonada dushli hammom, hojatxona, xolodilnik, elektr choynak, qulay ikki kishilik karavot va shkaf mavjud. Hamda kuniga 3 marta ovqatlanish, yuqori sifatli davolash va keng assortimentdagi tibbiy xizmatlar bo'ladi.");
    $(".price-list-card:nth-child(2) p").text("Sanatoriyning standart xonalari maksimal qulaylik va zamonaviy dizaynni birlashtiradi. Yorqin joy, qulay ikki kishilik yotoq, yumshoq divan,  dushli hammom, hojatxona, xolodilnik, elektr choynak va shkaf mavjud.Hamda kuniga 3 marta ovqatlanish, yuqori sifatli davolash va keng assortimentdagi tibbiy xizmatlar bo'ladi.");
    $(".price-list-card:nth-child(3) p").text("Bu sanatoriya yaqinida joylashgan xonalarning alohida toifasi bo'lib. Bu xonalar ona va bola dam olishi uchun moslashgan. Xonada qulay va yumshoq mebel,  dushli hammom, hojatxona, xolodilnik, elektr choynak va shkaf mavjud. Hamda kuniga 3 marta ovqatlanish, yuqori sifatli davolash va keng assortimentdagi tibbiy xizmatlar bo'ladi.");
    $(".price-list-card:nth-child(1) button").text("Ko'proq");
    $(".price-list-card:nth-child(2) button").text("Ko'proq");
    $(".price-list-card:nth-child(3) button").text("Ko'proq");
  //   Biz haqimizda
    $("#about-us h3").text("Biz haqimizda");
    $(".biz-haqimizda h3").text("Biz Respublika bo'ylab eng yaxshi majmuaga ixtisoslashganmiz");
    $(".biz-haqimizda p").text("O'zbekistonning jannatmakon o'lkalaridan biri Zominni tabiiy iqlimini o'z tabiati bilan jahonga mashxur Shvetsariya qiyos etilishi bejiz emas. Zomin haqli ravishda O'zbekistonning marvaridi hisoblanadi. G'ayrioddiy tabiiy landshaft bilan o'ralgan sanatoriya haqiqatan ham noyob bo'lib qoladi. Bu joy ko'proq tog'larni yaxshi ko'radiganlar uchun juda mos keladi.");
    $(".about-information .btn").text("Ko'proq ma'lumot");
    
    //Bizning afzalliklarimiz
    $("#advantages .advantages-head ").text("Bizning afzalliklarimiz");
    $(".advantages-card:nth-child(1) h4").text("Profilaktik tibbiyot");
    $(".advantages-card:nth-child(2) h4").text("Go'zallikni saqlash");
    $(".advantages-card:nth-child(3) h4").text("Faol uzoq umr");
    $(".advantages-card:nth-child(4) h4").text("Sog'liqni saqlashni boshqarish");
    $(".advantages-card:nth-child(5) h4").text("Tana zaxiralarining ko'payishi");
    
  //   Davolash
    $("#treatment h3").text("Davolash");
    $(".davolash h3").text("Biz sog'liqni saqlash sanatoriyasi uchun yangi standartlarni o'rnatdik");
    $(".davolash p").text("Tibbiyot markazi, shaxsiylashtirilgan tibbiyot klinikasi, balneologik majmua, toza havo, bolalar bog'i, shinam restoranni o'z ichiga olgan  sanatoriy.");
    $(".about-information .btn").text("Ko'proq");
    $(".owl-item:nth-child(1) h4").text("Profilaktik tibbiyot");
    $(".owl-item:nth-child(2) h4").text("Go'zallikni saqlash");
    $(".owl-item:nth-child(3) h4").text("Faol uzoq umr");
    $(".owl-item:nth-child(4) h4").text("Sog'liqni saqlashni boshqarish");
    $(".owl-item:nth-child(5) h4").text("Tana zaxiralarining ko'payishi");
    $(".owl-item:nth-child(6) h4").text("Stress darajasini pasaytirish");
    
  //   Galereya
    $("#gallery h3").text("Galereya");
    $(".navv .nav-item:nth-child(1) a").text("Turar joy");
    $(".navv .nav-item:nth-child(2) a").text("Restoran");
    $(".navv .nav-item:nth-child(3) a").text("Tibbiyot");
    $(".navv .nav-item:nth-child(4) a").text("Dam olish");
    $(".nav-g .nav-item:nth-child(1) a").text("Hashamatli");
    $(".nav-g .nav-item:nth-child(2) a").text("Standart");
    $(".nav-g .nav-item:nth-child(3) a").text("Ona bola");

   // Kontakt Page

   $(".contact__wrapper .contact__title").text("Bizning kontaktlarimiz");
   $(".form .form__name-label").text("Ism Familiya");
   $(".form .form__tel-label").text("Sizning telefon raqamingiz");
   $(".form .form__textarea-label").text("Bizga xabar yozing");
   $(".form .form__button").text("Jo'natish");
   $(".contact-box__sub-box:nth-child(1) h4").text("Bizning manzil");
   $(".contact-box__sub-box:nth-child(1) p").text("Jizzax viloyati Zomin tumani Zomin milliy tabiat bog'i");
   $(".contact-box__sub-box:nth-child(2) h4").text("Telefon");
   $(".contact-box__sub-box:nth-child(3) h4").text("Bizga yozing");  

    // Razmisheniya
    $(".razmisheniya-hero h1").text("Keng va zamonaviy xonalar");
    $(".price-list__box h2").text("Xona turlari");
    $("#row #card:nth-child(1) .price-list__sub-box h4").text("Luks 2 kishilik xona");
    $("#row #card:nth-child(2) .price-list__sub-box h4").text("Standart 2 kishilik xona");
    $("#row #card:nth-child(3) .price-list__sub-box h4").text("Ona bola uchun xona");
    $("#row #card:nth-child(1) .price-list__sub-box p").text("Luks xonalarida ikkita xona, yotoqxona va kichik yashash xonasi mavjud. Toqqa yoki sanatoriyning ichki bog'iga qaragan xonaning zamonaviy dizayni dam olish uchun qulay muhit yaratadi. Shuningdek, xonada dushli hammom, hojatxona, xolodilnik, elektr choynak, qulay ikki kishilik karavot va shkaf mavjud. Hamda kuniga 3 marta ovqatlanish, yuqori sifatli davolash va keng assortimentdagi tibbiy xizmatlar bo'ladi.");
    $("#row #card:nth-child(2) .price-list__sub-box p").text("Sanatoriyning standart xonalari maksimal qulaylik va zamonaviy dizaynni birlashtiradi. Yorqin joy, qulay ikki kishilik yotoq, yumshoq divan,  dushli hammom, hojatxona, xolodilnik, elektr choynak va shkaf mavjud.Hamda kuniga 3 marta ovqatlanish, yuqori sifatli davolash va keng assortimentdagi tibbiy xizmatlar bo'ladi.");
    $("#row #card:nth-child(3) .price-list__sub-box p").text("Bu sanatoriya yaqinida joylashgan xonalarning alohida toifasi bo'lib. Bu xonalar ona va bola dam olishi uchun moslashgan. Xonada qulay va yumshoq mebel,  dushli hammom, hojatxona, xolodilnik, elektr choynak va shkaf mavjud. Hamda kuniga 3 marta ovqatlanish, yuqori sifatli davolash va keng assortimentdagi tibbiy xizmatlar bo'ladi.");
    $(".img-sort .img-sort__title").text("Galereya");

    // biz haqimizda page

    $(".about-hero__wrapper h1").text("Keng va zamonaviy xonalar");
    
    $("#text1-box p").text(" “Zomin” sanatoriyasi - iqlimiy kurort, Jizzax viloyati, Zomin tumanining eng go'zal burchaklaridan birida, Turkiston tog' tizmasining shimoliy yon bag'rida, dengiz satxidan 2000 metr balandlikda, Zomin tog'-o'rmon qo'riqxonasi xududida joylashga. Zomin tog' o'rmon davlat qo'riqhonasi Turkiston tizma tog'lari g'arbiy qismining shimoliy yon bag'rida, Ko'lsoy va G'o'ralashsoy havzalarini  ishg'ol yetgan. Maydoni 15,5 ming ga, shundan 11,2 ming ga archa o'rmonzorlaridan tashkil topgan. Qo'riqxonada tog' o'rmonlarini biologiyasini o'rganish,  archazorlarni ko'paytirish,  hayvon va o'simlik turlarini saklab qolish ishlari olib boriladi . Rel'efining murakkabligi va turli iqlim tuproq  sharoitlariga ko'ra, qo'riqhonada 3 ta o'simlik mintaqasi  (dasht, o'rmon, subalar) mavjud. Qo'riqxonada 180,  xatto 400 yoshga kirgan archalar bor. Tyan'shan  chetani, Turkiston qayini;  butalardan zirk, na'matak,uchqat, irg'ay, tobulg'i  o'sadi. Qo'riqxona hayvonat dunyosi xilma-xil. Qo'riqxonada “Qizil kitob”ga kiritilgan Turkiston silovsini, oq tirnoqli ayiq, arhar, bars, shuningdek bo'ri, bo'rsiq, tulki, jayra, to'ngiz kabi yovvoyi xayvonlar yashaydi. Qo'riqxona hududida  o'simliklarning  720 turi,  qushlarning 130 turi, sut emizuvchilarning 37 turi, sudralib yuruvchilardan 8 tur, baliqning  bir turi tavsiflangan. ");
  
    $("#text2-box p").text("O'zbekistonning jannatmakon o'lkalaridan biri Zominni tabiiy iqlimini   o'z tabiati bilan jaxonga mashxur Shvetsariyaga qiyos etilishi bejiz emas. Shu bois uzoq yillar Respublikamizga rahbarlik qilgan, atoqli davlat va jamoat arbobi Sharof Rashidovning betakror tabiat quchog'ida, osmono'par tog'lar orasida “Onalar va bolalar” sihatgohi barpo etish orzusi amalga oshdi.   1979 yil “Zomin” sanatoriyasi qurilishi boshlandi. Sihatgoh milliy zamonaviy me'morchilik an'analarini o'zida mujassamlashtirgan holda me'morlar va bunyodkorlar tomonidan dam olish va davolanish majmuasini “Katta oq kema” ko'rinishida yarim aylana shaklida bunyod etildi. Sanatoriyning o'ziga xos davolash omillari xaqida ma'lumotlar. “Zomin” sanatoriysi tuman markazidan 50 km uzoqlikda Turkiston tog' tizmasining shimoliy etaklarida, dengiz satxidan 2000 metr  balandlikda qo'riqxona xududida archazorlar orasida joylashgan. Shu bois atmasfera bosimi nisbatan past, havoning kislarod va quyoshdan kelayotgan ul'trabinafsha nurga boyligi, yuqori nafas yo'llari va asab tizmi kasalliklarini davolashda juda samaralidir.  Asosiy davolash omili tog' iqlimidir. Bundan tashqari, suv bilan davolash (sun'iy marvaridli, yod-bromli, igna bargli vannalar, dushlar, suv havzasi), fizioterapevtik, davolash badantarbiyasi, terrenkur, uqalash, sauna, hamda bronxial astmali bemorlarni davolash uchun galokameradan foydalaniladi.");

// licheniya
      $("#licheniya-zamin h2").text("Zomin sanatoriysida davolash usullari");
      $("#box1 h3").text("Galoterapiya");
      $("#box2 h3").text("Kedr bochkasi");
      $("#box3 h3").text("Ingolyatsiya terapiyasi");
      $("#box1 p").text("- bu tabiiy tuz g'orlarining sun'iy ravishda yaratilib natriy xlor ionlari bilan to'yingan mikroiqlimning inson organizmiga foydali ta'sir ko'rsatishiga asoslangan davolash usuli. Bunday mikroiqlim gipoallergik bo'lib, dori vositalaridan foydalanmasdan nafas yo'llarini samarali tozalash imkonini beradi. Sun'iy mikroiqlim (Galoterapiya) quyidagi ijobiy terapevtik ta'sirga ega: Mukolitik (O'pkadagi bronx yo'llaridan balg'am ko'chiruvchi). Giposensibilizirik (odam organizmidagi allergik sezuvchanlikni susaytiruvchi). Immunoregulyator (insondagi immunitetni oshiruvchi, kuchaytiruvchi). Bakteriosid xamda bakteriostatik (bakteriyalarni o'ldiruvchi xamda bakteriyalar rivojini to'xtatuvchi). Tuzning eng mayda fraktsiyalari, zaryadlangan ionlar holida nafas yo'llariga chuqur kirib, nafas olish o'rganini barcha himoya kuchlarini kuchaytirib, immunitetni oshiradi. Bronxga kirgan tuz, bronxlar bo'shlig'iga yallig'langan qavatdan suyuqliklarni chiqishini kuchaytiradi va o'zi bilan tashqariga kasallangan joydan qotib qolgan bo'lakchalarni chiqib ketishiga yordam beradi. Tuz suyuqlikni tortib oladi va shu bilan yallig'lanishni kamaytiradi. Tuz epiteliya kipriklarining harakatlarini kuchaytiradi va natijada balg'am o'zi bilan birga barcha patogen flora (mikroblar, viruslar, toksinlar)ni olib chiqishib ketishi tezlashadi. Sun'iy mikroiqlim (Galoterapiya) quyidagi kasalliklar bilan og'riganlarga tavsiya etiladi: Bronxial astma 1-darajali yengil va o'rta ogir kechuvchi (infeksion-allergik) turida; O'pka-yurak yetishmovchiligining I-(birinchi) darajasida; Bronxial astmaning surunkali bronxit bilan kechishida; O'pkaning pnevmosklerozi bilan chegaralangan holatda; Bronxial astmaning xuruj oldi xolatida hamda to'liqsiz remissiya davrida; O'pkaning surunkali obstruktiv kasalliklarida; O'pkaning obstuktivsiz kasalliklari (bronxit)da; Rinit (burun bo'shlig'i yallig'lanishi)da; Rinit bronxospazm bilan kechishida; Nafas olish a'zolarining infeksiyasida (ORVI,ORZ va xokazolar); Teridagi allergik toshmalarda; Endemik buqoq (zob)da tavsiya etiladi.");
    
      $("#box2 p").text("Kedr bochkasi- fitobochka qadimgi an'anaviy shifo va tozalash usuli bo'lib bu muolaja o'ziga xos tabiiy ravishda inson organizmiga yumshoq, stresssiz tasir qiladi. Ushbu muolajaga talab katta bo'lib quyidagi davolash omillariga ega: Fitobochka, aslida, odam boshidan tashqari butun tanasi joylashtirilgani uchun muolaja butun tanaga ta'sir qiladigan va uni toksinlar va bloklardan ozod qiladigan murakkab, tizimli ta'sirga ega. Shu bilan birga, bemor dam olish va relaks, asab tizimining uyg'unligi, mushak og'rig'idan xalos bo'lish, metabolizmni normallashtirish, shamollash va nafas olish tizimining virusli infektsiyalariga qarshi turish, terini yoshartiradigan va to'qimalarni tozalaydigan foydali moddalar bilan to'yintirish xususiyatiga ega. Kedr bochkasi-o'zingizni yaxshi his qilish uchun zarur bo'lgan muolaja bo'lib: bunda dorivor o'tlar va efir moylarining bug'lari qon tomirlarini kengaytiradi va terlashni kuchaytiradi, terini toksinlardan yuvib tozalaydi, shifobaxsh moddalar ochiq tozalangan teshiklarga kiradi. Hatto bitta muolaja ham terining holatini yaxshilaydi, tozalash va tonus tufayli teri yosharadi, elastik va tovlanadigan xolga keladi. Bu davolashning yana bir afzalligi — tayyorlash va o'tkazish qulayligi. Muolaja 15 daqiqa davom etadi. Muolajadan keyin siz tinchlik va xotirjamlik, yoqimli quvnoqlik, tananing g'ayrioddiy yengilligini (go'yo bir necha yil va kilogrammni tashlaganga o'xshash holatni) his qilasiz.");
    
      $("#box3 p").text("Ingolyatsiya terapiyasi (nafas olish bilan davolash usuli) -dorivor va profilaktika maqsadida havoda to'yintirilgan dorivor va biologik faol moddalarni nafas olish orqali nafas yo'llariga kiritishdir. Bu dorivor moddalar nafas olish yo'llaridagi balg'amning yopishqoqligini pasaytirishi bilan uni nafas yo'llaridan chiqarilishini yaxshilaydi. Undan tashqari bu usul bilan o'pka to'qimalari va nafas yo'llaridagi mikroblarga hamda ular chaqirgan yallig'lanishlarga qarshi juda yaxshi tasir ko'rsatadi.Shu bilan birga ingolyatsion terapiya nafas yo'llari - bronx yo'llarini kengaytirib nafas olishni va oqibatda organizmni kislorod bilan taminlanishini yaxshilaydi. Issiq nam havo bilan nafas olishda nam va issiqlik effekti burun, halqum, kekirdak, traxeya va bronxlarning shilliq qavatini qon bilan taminlanishini keskin kuchaytirib, shilimshiqning yopishqoqligini pasaytiradi, uni yupqalashtiradi va chiqib ketishini tezlashtiradi, kiprikli epiteliyning faoliyatini kuchaytiradi, nafas yo'llarining shilliq qavatining normal holatini tiklashga yordam berib, uning quruqlashib ketishini oldini oladi. Dorivor o'tlar (damlamalar, infuziyalar, ekstraktlar, damlamalar, eliksirlar, sharbat va boshqalar shaklida) barcha turdagi ingalatsiyalar uchun ishlatiladi Ingolyatsion terapiya yuqori nafas yo'llari, bronxlar va o'pkaning o'tkir va surunkali ko'rinishlarida, LOR sohasining o'tkir va surunkali formalarida, obstruktiv sindrom, laringospazm, bronxial astma kasallikllarida va operatsiyadan keyingi davr asoratlarning oldini olishda juda yaxshi samara beradi.");
    
      $(".licheniya-spiska__wrapper h2").text("Biz quyidagi sohalarda tibbiy sharoitlarni ta'minlaymiz:");
      $("#list1 .licheniya-spiska__item:nth-child(1)").text("Amplipulsterapiya (o'zgaruvchan elektr toki bilan davolash)");
      $("#list1 .licheniya-spiska__item:nth-child(2)").text("Ingolyasiya");
      $("#list1 .licheniya-spiska__item:nth-child(3)").text("Diadinamik (o'zgarmas) tokli muolaja");
      $("#list1 .licheniya-spiska__item:nth-child(4)").text("Elektro-uyqu");
      $("#list1 .licheniya-spiska__item:nth-child(5)").text("Yorug'lik vannasi");
      $("#list1 .licheniya-spiska__item:nth-child(6)").text("Ultra yuqori chastotali terapiya");
      $("#list1 .licheniya-spiska__item:nth-child(7)").text("Sollyuks (infraqizil nurlar bilan davolash)");
      $("#list1 .licheniya-spiska__item:nth-child(8)").text("Tubus-kvars");
      $("#list1 .licheniya-spiska__item:nth-child(9)").text("Elektro farez");
      $("#list1 .licheniya-spiska__item:nth-child(10)").text("Magnitoterapiya");
      $("#list1 .licheniya-spiska__item:nth-child(11)").text("Ultratovush terapiyasi");
      $("#list1 .licheniya-spiska__item:nth-child(12)").text("Galoterapiya (tuz bilan davolash)");
      $("#list2 .licheniya-spiska__item:nth-child(1)").text("GAI (Gidroaeroionizasiya-aerozol ionlari bilan davolash)");
      $("#list2 .licheniya-spiska__item:nth-child(2)").text("Balchiq umumiy");
      $("#list2 .licheniya-spiska__item:nth-child(3)").text("Marvarid vannalar (Ignabargli-marvarid vannalari)");
      $("#list2 .licheniya-spiska__item:nth-child(4)").text("Elektro sandal");
      $("#list2 .licheniya-spiska__item:nth-child(5)").text("Fitochoy");
      $("#list2 .licheniya-spiska__item:nth-child(6)").text("Kislorodli kokteyl");
      $("#list2 .licheniya-spiska__item:nth-child(7)").text("Lazer");
      $("#list2 .licheniya-spiska__item:nth-child(8)").text("Massaj (Uqalash)");
      $("#list2 .licheniya-spiska__item:nth-child(9)").text("Parafin");
      $("#list2 .licheniya-spiska__item:nth-child(10)").text("Szin Da (Ko'p funksiyali davolash apparati)");
      $("#list2 .licheniya-spiska__item:nth-child(11)").text("Kedr bochkasi");
      $("#list2 .licheniya-spiska__item:nth-child(12)").text("Ozonoterapiya");

      // footer 
      $("#ul-1 .footer-item:nth-child(1) a").text("Biz haqimizda");
      $("#ul-1 .footer-item:nth-child(2) a").text("Bizning afzalliklarimiz");
      $("#ul-1 .footer-item:nth-child(3) a").text("Davolash");
      $("#ul-1 .footer-item:nth-child(4) a").text("Kontakt");

      $("#ul-2 .footer-item:nth-child(1) a").text("Galereya");
      $("#ul-2 .footer-item:nth-child(2) a").text("Sport");
      $("#ul-2 .footer-item:nth-child(3) a").text("Dam olish");
      $("#ul-2 .footer-item:nth-child(4) a").text("Restoran");
      $("#ul-2 .footer-item:nth-child(5) a").text("Tibbiyot");

      $("#ul-3 .footer-item:nth-child(1) a").text("Jizzax viloyati Zomin tumani Zomin milliy tabiat bog'i");
      $("#ul-3 .footer-item:nth-child(2) a").text("+998723924010");
      $("#ul-3 .footer-item:nth-child(3) a").text("+998723924014");
      $("#ul-3 .footer-item:nth-child(4) a").text("+998995540509");
      $("#ul-3 .footer-item:nth-child(5) a").text("sihatgoh_zomin@mail.ru");
      
  });
});

$(document).ready(function()
{


  if($('.bbb_slider').length)
  {
      var trendsSlider = $('.bbb_slider');
      trendsSlider.owlCarousel(
          {
              loop:false,
              margin:30,
              nav:false,
              dots:false,
              autoplayHoverPause:true,
              autoplay:false,
              responsive:
                  {
                      0:{items:1},
                      575:{items:1},
                      991:{items:3},
                      1800:{items:4}
                  }
          });

      trendsSlider.on('click', '.bbb_fav', function (ev)
      {
          $(ev.target).toggleClass('active');
      });

      if($('.bbb_prev').length)
      {
          var prev = $('.bbb_prev');
          prev.on('click', function()
          {
              trendsSlider.trigger('prev.owl.carousel');
          });
      }

      if($('.bbb_next').length)
      {
          var next = $('.bbb_next');
          next.on('click', function()
          {
              trendsSlider.trigger('next.owl.carousel');
          });
      }
  }


});

$(document).ready(function()
{


  if($('.bbb_viewed_slider').length)
  {
      var viewedSlider = $('.bbb_viewed_slider');

      viewedSlider.owlCarousel(
          {
              loop:true,
              margin:30,
              autoplay:true,
              autoplayTimeout:6000,
              nav:false,
              dots:false,
              responsive:
                  {
                      0:{items:1},
                      575:{items:2},
                      768:{items:3},
                      991:{items:3},
                      1199:{items:3},
                      1800:{items:4}
                  }
          });

      if($('.bbb_viewed_prev').length)
      {
          var prev = $('.bbb_viewed_prev');
          prev.on('click', function()
          {
              viewedSlider.trigger('prev.owl.carousel');
          });
      }

      if($('.bbb_viewed_next').length)
      {
          var next = $('.bbb_viewed_next');
          next.on('click', function()
          {
              viewedSlider.trigger('next.owl.carousel');
          });
      }
  }


});

