// Extra languages (zh, ja, ko, es). vi/en live in data.mjs and build.mjs.
export const LANGS = [
  ["vi", "Tiếng Việt"], ["en", "English"], ["zh", "简体中文"],
  ["ja", "日本語"], ["ko", "한국어"], ["es", "Español"],
];

export const ui = {
  heroTitle: { vi: "Ứng dụng nhỏ xinh cho mỗi ngày", en: "Little apps for every day", zh: "每天都想打开的小应用", ja: "毎日がちょっと楽しくなる小さなアプリ", ko: "매일 함께하는 작고 귀여운 앱", es: "Pequeñas apps para cada día" },
  heroLead: {
    vi: "Học tiếng Trung vui hơn, giải đố thư giãn hơn. Tất cả miễn phí trên App Store và Google Play.",
    en: "Learn Chinese with a smile and unwind with cosy puzzles. All free on the App Store and Google Play.",
    zh: "轻松愉快地学中文，玩治愈系益智游戏。全部可在 App Store 和 Google Play 免费下载。",
    ja: "楽しく中国語を学んで、ほっこりパズルでひと休み。App Store と Google Play で無料。",
    ko: "즐겁게 중국어를 배우고 아늑한 퍼즐로 쉬어 가세요. App Store와 Google Play에서 무료.",
    es: "Aprende chino con una sonrisa y relájate con puzles acogedores. Todo gratis en App Store y Google Play.",
  },
  learn: { vi: "Học tiếng Trung", en: "Learn Chinese", zh: "学中文", ja: "中国語を学ぶ", ko: "중국어 배우기", es: "Aprende chino" },
  games: { vi: "Game giải trí", en: "Games", zh: "休闲游戏", ja: "ゲーム", ko: "게임", es: "Juegos" },
  details: { vi: "Xem chi tiết", en: "See details", zh: "查看详情", ja: "詳しく見る", ko: "자세히 보기", es: "Ver detalles" },
  allApps: { vi: "Tất cả ứng dụng", en: "All apps", zh: "全部应用", ja: "すべてのアプリ", ko: "모든 앱", es: "Todas las apps" },
  free: { vi: "Miễn phí", en: "Free", zh: "免费", ja: "無料", ko: "무료", es: "Gratis" },
  inside: { vi: "Có gì đặc biệt", en: "What's inside", zh: "主要功能", ja: "主な機能", ko: "주요 기능", es: "Qué incluye" },
  freeDl: { vi: "Miễn phí tải về.", en: "Free to download.", zh: "免费下载。", ja: "無料でダウンロード。", ko: "무료로 다운로드하세요.", es: "Descarga gratuita." },
  getApp: { vi: "Tải {x} ngay", en: "Get {x} today", zh: "立即下载 {x}", ja: "{x} を今すぐ", ko: "지금 {x} 받기", es: "Consigue {x} hoy" },
  more: { vi: "Ứng dụng khác", en: "More apps", zh: "更多应用", ja: "ほかのアプリ", ko: "다른 앱", es: "Más apps" },
  apps: { vi: "Ứng dụng", en: "Apps", zh: "应用", ja: "アプリ", ko: "앱", es: "Apps" },
  contact: { vi: "Liên hệ", en: "Contact", zh: "联系我们", ja: "お問い合わせ", ko: "문의", es: "Contacto" },
  about: {
    vi: "Công ty phần mềm độc lập tại Coquitlam, British Columbia, Canada. Chúng tôi làm những ứng dụng nhỏ xinh giúp việc học và giải trí mỗi ngày vui hơn.",
    en: "An independent software company in Coquitlam, British Columbia, Canada. We make small, friendly apps that make learning and play a little happier.",
    zh: "位于加拿大不列颠哥伦比亚省高贵林的独立软件公司。我们制作小巧友好的应用，让学习和娱乐更快乐一点。",
    ja: "カナダ・ブリティッシュコロンビア州コキットラムの独立系ソフトウェア会社です。学びと遊びをちょっと楽しくする、やさしいアプリを作っています。",
    ko: "캐나다 브리티시컬럼비아주 코퀴틀람의 독립 소프트웨어 회사입니다. 배움과 놀이를 조금 더 즐겁게 만드는 작고 다정한 앱을 만듭니다.",
    es: "Una empresa de software independiente en Coquitlam, Columbia Británica, Canadá. Creamos apps pequeñas y amables que hacen el aprendizaje y el juego un poco más felices.",
  },
  dlOn: { vi: "Tải trên", en: "Download on the", zh: "下载于", ja: "ダウンロード", ko: "다운로드", es: "Descárgalo en" },
  getOn: { vi: "Tải trên", en: "Get it on", zh: "下载于", ja: "今すぐ入手", ko: "다운로드", es: "Disponible en" },
  onTV: { vi: "Trên Apple TV", en: "On Apple TV", zh: "Apple TV 版", ja: "Apple TV 版", ko: "Apple TV용", es: "En Apple TV" },
};

// per-app text in extra languages
export const appText = {
  zhong: {
    name: { zh: "Zhong：中文拼音输入法", ja: "Zhong：中国語ピンインキーボード", ko: "Zhong: 중국어 병음 키보드", es: "Zhong: teclado chino pinyin" },
    short: { zh: "Zhong 输入法", ja: "Zhong キーボード", ko: "Zhong 키보드", es: "Teclado Zhong" },
    kind: { zh: "输入法 · 教育", ja: "キーボード · 教育", ko: "키보드 · 교육", es: "Teclado · Educación" },
    tagline: {
      zh: "为中文学习者设计的输入法。在任何应用里边打字边学习，无需切换词典。",
      ja: "中国語学習者のためのキーボード。どのアプリでも、打ちながら学べて辞書いらず。",
      ko: "중국어 학습자를 위한 키보드. 어떤 앱에서든 타이핑하며 배우고, 사전은 필요 없어요.",
      es: "Un teclado chino para estudiantes. Escribe y aprende en cualquier app, sin diccionario.",
    },
    features: [
      { zh: ["整句拼音输入", "用拼音输入整句，得到简体中文，并预测下一个词。"], ja: ["文単位のピンイン入力", "文ごとピンインで入力して簡体字に。次の単語も予測します。"], ko: ["문장 단위 병음 입력", "문장 전체를 병음으로 입력하면 간체자로, 다음 단어도 예측해요."], es: ["Pinyin por frases", "Escribe frases enteras en pinyin y obtén chino simplificado, con predicción."] },
      { zh: ["选词即见释义", "选择每个词时立即显示英文或越南文释义。"], ja: ["選ぶとすぐ意味", "単語を選んだ瞬間に英語やベトナム語の意味を表示。"], ko: ["고르면 바로 뜻", "단어를 고르는 순간 영어나 베트남어 뜻이 보여요."], es: ["Significados al elegir", "Ve el significado en inglés o vietnamita al escoger cada palabra."] },
      { zh: ["手写输入", "不会读的字，写出来 Zhong 帮你找。"], ja: ["手書き入力", "読めない漢字も書けば Zhong が見つけます。"], ko: ["필기 입력", "읽을 줄 모르는 글자도 쓰면 Zhong이 찾아줘요."], es: ["Escritura a mano", "Dibuja un carácter que no sabes pronunciar y Zhong lo encuentra."] },
      { zh: ["语法检查", "发现常见错误，并关联语法点和 HSK 等级。"], ja: ["文法チェック", "よくある間違いを見つけ、文法項目と HSK レベルを表示。"], ko: ["문법 검사", "흔한 실수를 잡아내고 문법 포인트와 HSK 급수를 알려줘요."], es: ["Revisión gramatical", "Detecta errores comunes y los enlaza con su punto gramatical y nivel HSK."] },
      { zh: ["Zhong Pro", "边打字边翻译整句，设备端 AI 语法建议。"], ja: ["Zhong Pro", "入力中に文ごと翻訳、端末上の AI 文法提案。"], ko: ["Zhong Pro", "타이핑하며 문장 번역, 기기 내 AI 문법 제안."], es: ["Zhong Pro", "Traducción de frases mientras escribes y sugerencias de IA en el dispositivo."] },
      { zh: ["注重隐私", "一切都在你的设备上运行，输入内容不会被发送。"], ja: ["プライバシー重視", "すべて端末内で動作。入力内容は外部に送信されません。"], ko: ["개인정보 보호", "모든 처리는 기기에서. 입력한 내용은 절대 전송되지 않아요."], es: ["Privado por diseño", "Todo funciona en tu dispositivo. Lo que escribes nunca sale de él."] },
    ],
  },
  "momo-hsk": {
    name: { zh: "Momo：HSK 中文闪卡", ja: "Momo：HSK 中国語単語カード", ko: "Momo: HSK 중국어 플래시카드", es: "Momo: tarjetas de chino HSK" },
    short: { zh: "Momo HSK", ja: "Momo HSK", ko: "Momo HSK", es: "Momo HSK" },
    kind: { zh: "闪卡 · 教育", ja: "単語カード · 教育", ko: "플래시카드 · 교육", es: "Tarjetas · Educación" },
    tagline: {
      zh: "用闪卡、音频和智能复习掌握 HSK 词汇和语法，小猫 Mochi 每天为你加油。",
      ja: "単語カード、音声、スマート復習で HSK の語彙と文法をマスター。猫の Mochi が毎日応援します。",
      ko: "플래시카드, 음성, 스마트 복습으로 HSK 어휘와 문법을 정복하세요. 고양이 Mochi가 매일 응원해요.",
      es: "Domina el vocabulario y la gramática del HSK con tarjetas, audio y repasos inteligentes. Mochi, el gato, te anima cada día.",
    },
    features: [
      { zh: ["覆盖全部 HSK 等级", "HSK 3.0 一至七级（约 11,000 词），以及 HSK 2.0 一至六级。"], ja: ["HSK 全レベル", "HSK 3.0 の 1〜7 級（約 11,000 語）と HSK 2.0 の 1〜6 級。"], ko: ["모든 HSK 급수", "HSK 3.0 1~7급(약 11,000단어)과 HSK 2.0 1~6급."], es: ["Todos los niveles HSK", "HSK 3.0 niveles 1–7 (unas 11.000 palabras) y HSK 2.0 niveles 1–6."] },
      { zh: ["每个词都讲透", "自然发音、拼音、部首和形近字提示。"], ja: ["1 語ずつ丁寧に", "自然な音声、ピンイン、部首、似た字の見分け方。"], ko: ["단어마다 자세히", "자연스러운 발음, 병음, 부수, 비슷한 글자 구별 팁."], es: ["Cada palabra explicada", "Audio natural, pinyin, radicales y consejos para caracteres parecidos."] },
      { zh: ["间隔重复", "每张卡片在你快要忘记时出现。"], ja: ["間隔反復", "忘れそうなタイミングでカードが戻ってきます。"], ko: ["간격 반복", "잊어버리기 직전에 카드가 다시 나와요."], es: ["Repetición espaciada", "Cada tarjeta vuelve justo antes de que la olvides."] },
      { zh: ["HSK 模拟考试", "计时的听力、阅读、书写测试，以及备考指数。"], ja: ["HSK 模擬試験", "時間制限つきのリスニング・読解・作文と合格準備度。"], ko: ["HSK 모의고사", "시간 제한 듣기·독해·쓰기 시험과 준비도 점수."], es: ["Exámenes HSK simulados", "Pruebas cronometradas de comprensión auditiva, lectura y escritura."] },
      { zh: ["练习书写", "观看笔顺、描红，再凭记忆书写。"], ja: ["書き取り練習", "筆順を見て、なぞって、何も見ずに書く。"], ko: ["쓰기 연습", "획순을 보고, 따라 쓰고, 외워서 써요."], es: ["Escritura", "Mira el orden de trazos, cálcalo y escribe de memoria."] },
      { zh: ["每日习惯", "每日目标、连续打卡和每日一词小组件。"], ja: ["毎日の習慣", "毎日の目標、連続記録、今日の単語ウィジェット。"], ko: ["매일 습관", "일일 목표, 연속 학습, 오늘의 단어 위젯."], es: ["Hábito diario", "Metas diarias, rachas y un widget con la palabra del día."] },
    ],
  },
  "meow-sort": {
    name: { zh: "Meow Sort：猫咪回家", ja: "Meow Sort：ねこ仕分けパズル", ko: "Meow Sort: 고양이 정리 퍼즐", es: "Meow Sort: puzle de gatitos" },
    short: { zh: "Meow Sort", ja: "Meow Sort", ko: "Meow Sort", es: "Meow Sort" },
    kind: { zh: "益智游戏", ja: "パズルゲーム", ko: "퍼즐 게임", es: "Juego de puzles" },
    tagline: {
      zh: "打开上锁的门，叫醒贪睡的猫咪，把每只小猫送回自己的小屋。",
      ja: "鍵を開けて、眠るねこを起こして、みんなをおうちに帰そう。",
      ko: "잠긴 문을 열고, 잠든 고양이를 깨워, 모든 고양이를 집으로 데려다 주세요.",
      es: "Abre puertas, despierta gatitos dormilones y lleva a cada uno a su casita.",
    },
    features: [
      { zh: ["简单好玩", "点一下小屋，猫咪就走出来。每间屋放满四只同品种猫咪。"], ja: ["かんたん操作", "家をタップするとねこが出てきます。同じ種類を 4 匹そろえよう。"], ko: ["쉬운 조작", "집을 누르면 고양이가 나와요. 같은 품종 4마리로 채우세요."], es: ["Fácil de jugar", "Toca una casita y salen los gatos. Llena cada casa con cuatro de la misma raza."] },
      { zh: ["锁和贪睡猫", "找到戴钥匙的猫咪，用小鱼叫醒整个村子。"], ja: ["鍵とおねぼうねこ", "鍵を持つねこを探し、お魚で村中を起こそう。"], ko: ["자물쇠와 잠꾸러기", "열쇠를 단 고양이를 찾고, 생선으로 마을을 깨워요."], es: ["Candados y siestas", "Busca al gato con la llave y despierta al pueblo con un pescado."] },
      { zh: ["150 个关卡", "10 个童话世界，每关都确保有解。"], ja: ["150 ステージ", "絵本のような 10 の世界。すべて解けることを確認済み。"], ko: ["150개 스테이지", "동화 같은 10개 세계, 모든 판은 풀 수 있어요."], es: ["150 niveles", "10 mundos de cuento, todos comprobados como resolubles."] },
      { zh: ["6 种手绘猫咪", "橘猫、三花、暹罗、奶牛猫、英短蓝猫和波斯猫。"], ja: ["手描きの 6 種類", "茶トラ、三毛、シャム、ハチワレ、ブリティッシュブルー、ペルシャ。"], ko: ["손그림 6품종", "치즈, 삼색이, 샴, 턱시도, 브리티시 블루, 페르시안."], es: ["6 razas pintadas a mano", "Atigrado, calicó, siamés, esmoquin, azul británico y persa."] },
      { zh: ["不限时", "不限步数，可离线游玩，按自己的节奏来。"], ja: ["時間制限なし", "手数制限なし、オフラインでマイペースに。"], ko: ["시간 제한 없음", "이동 횟수 제한 없이 오프라인으로 여유롭게."], es: ["Sin temporizador", "Sin límite de movimientos, sin conexión, a tu ritmo."] },
      { zh: ["提示与撤销", "逐步提示，每次最多撤销 3 步。"], ja: ["ヒントとやり直し", "ステップごとのヒントと最大 3 手のやり直し。"], ko: ["힌트와 되돌리기", "단계별 힌트, 최대 3번 되돌리기."], es: ["Pistas y deshacer", "Pistas paso a paso y hasta 3 deshacer por intento."] },
    ],
  },
  "momo-block": {
    name: { zh: "Momo：方块拼图", ja: "Momo：ブロックパズル", ko: "Momo: 블록 퍼즐", es: "Momo: puzle de bloques" },
    short: { zh: "Momo 方块", ja: "Momo ブロック", ko: "Momo 블록", es: "Momo Block" },
    kind: { zh: "益智游戏", ja: "パズルゲーム", ko: "퍼즐 게임", es: "Juego de puzles" },
    tagline: {
      zh: "和 Momo 一起玩缤纷的下落方块。堆叠箱子、消除整行、刷新最高分。",
      ja: "Momo と遊ぶカラフルな落ち物パズル。箱を積んで列を消し、ハイスコアを目指そう。",
      ko: "Momo와 함께하는 알록달록 블록 퍼즐. 상자를 쌓고 줄을 지우며 최고 점수에 도전하세요.",
      es: "Un colorido puzle de bloques con Momo. Apila cajas, completa líneas y bate tu récord.",
    },
    features: [
      { zh: ["一学就会", "滑动移动，点击旋转，填满一行即可消除。"], ja: ["すぐ覚えられる", "スワイプで移動、タップで回転、列をそろえて消す。"], ko: ["쉽게 배우기", "밀어서 이동, 눌러서 회전, 줄을 채우면 사라져요."], es: ["Fácil de aprender", "Desliza para mover, toca para girar, llena una línea para borrarla."] },
      { zh: ["新玩法", "先用网格吸附熟悉玩法，再挑战自由放置。"], ja: ["新しい積み方", "グリッド補助で慣れたら、自由配置に挑戦。"], ko: ["새로운 쌓기", "격자 도움으로 시작해 자유 배치에 도전하세요."], es: ["Un giro al apilado", "Empieza con la cuadrícula y domina la colocación libre."] },
      { zh: ["礼物道具", "回溯叶、Momo 飞机、炸弹、磁铁和手电筒。"], ja: ["プレゼントのアイテム", "巻き戻しの葉、Momo 飛行機、ボム、マグネット、ライト。"], ko: ["선물 아이템", "되감기 잎, Momo 비행기, 폭탄, 자석, 손전등."], es: ["Potenciadores sorpresa", "Hoja de rebobinado, avión Momo, bomba, imán y linterna."] },
      { zh: ["排行榜", "在 Game Center 一较高下，赢取等级奖杯。"], ja: ["ランキング", "Game Center で競ってトロフィーを獲得。"], ko: ["순위표", "Game Center에서 겨루고 트로피를 모으세요."], es: ["Clasificaciones", "Compite en Game Center y gana trofeos de nivel."] },
    ],
  },
};
