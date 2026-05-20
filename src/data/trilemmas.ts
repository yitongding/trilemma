export interface Vertex {
  id: string;
  name: string;
  englishName: string;
  description: string;
  details: string;
  colorHue: number; // HSL color hue
}

export interface TradeOff {
  selectedVertices: [string, string];
  sacrificedVertex: string;
  name: string;
  description: string;
  realWorldImpact: string;
  example: string;
}

export interface Trilemma {
  id: string;
  name: string;
  englishName: string;
  category: 'economics' | 'politics' | 'technology' | 'life';
  tagline: string;
  introduction: string;
  vertices: [Vertex, Vertex, Vertex];
  tradeOffs: [TradeOff, TradeOff, TradeOff];
}

export const trilemmas: Trilemma[] = [
  {
    id: 'mundell-fleming',
    name: '蒙代尔-弗莱明不可能三角',
    englishName: 'Mundell-Fleming Policy Trilemma',
    category: 'economics',
    tagline: '国际金融学最经典的宏观调控困境',
    introduction: '由诺贝尔经济学奖获得者罗伯特·蒙代尔等提出。指出在开放的宏观经济中，一个国家无法同时实现资本自由流动、货币政策独立性和固定汇率。必须且只能选择其中两个，而放弃第三个。',
    vertices: [
      {
        id: 'capital',
        name: '资本自由流动',
        englishName: 'Free Capital Flow',
        description: '允许境外资本无障碍进出本国国境进行投资或撤资。',
        details: '极大促进国际投资与贸易效率，但让本国金融体系直接暴露在全球金融市场的波动之下。',
        colorHue: 150 // Aurora Green
      },
      {
        id: 'monetary',
        name: '独立货币政策',
        englishName: 'Independent Monetary Policy',
        description: '本国央行能够自主调节国内利率与流动性，以调控物价和就业。',
        details: '是国家宏观调控的主权基石。如果失去独立性，本国经济周期将不得不受制于他国（如美联储）。',
        colorHue: 190 // Cyber Blue
      },
      {
        id: 'exchange',
        name: '固定汇率',
        englishName: 'Fixed Exchange Rate',
        description: '将本国货币与外币（如美元）的汇率锁定在极窄的波动范围内。',
        details: '能极大地为进出口贸易商和跨国企业消除汇率波动风险，稳定外贸预期，但也极易引发投机性攻击。',
        colorHue: 280 // Neon Purple
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['capital', 'monetary'],
        sacrificedVertex: 'exchange',
        name: '资本自由流动 + 独立货币政策（浮动汇率制）',
        description: '本国保持货币政策的自主权，允许资金自由进出，但必须接受汇率完全由市场供求决定。',
        realWorldImpact: '当国内为了刺激经济降低利率时，资本会流向利率更高的国家，导致本币贬值。本国无法干预汇率。',
        example: '美国、欧元区、日本、英国等绝大多数发达经济体现行体系。'
      },
      {
        selectedVertices: ['monetary', 'exchange'],
        sacrificedVertex: 'capital',
        name: '独立货币政策 + 固定汇率（资本管制制）',
        description: '锁定汇率以稳定贸易，同时自主控制本国利率，但必须建立极高的资本防火墙，限制资金自由进出。',
        realWorldImpact: '由于存在资本管制，境内外的资金利差无法通过自由套利拉平，从而维持了汇率与利率的共存，但牺牲了效率。',
        example: '中国目前推行的宏观管理框架（实行有管理的浮动汇率、自主货币政策及资本管制）。'
      },
      {
        selectedVertices: ['exchange', 'capital'],
        sacrificedVertex: 'monetary',
        name: '固定汇率 + 资本自由流动（货币局制/欧元区）',
        description: '允许资本自由进出，并死死咬定汇率，但代价是彻底丧失国内利率的自主决定权，完全随外部国家起舞。',
        realWorldImpact: '如果外部国家加息，本国即使经济低迷也必须跟着加息，否则资本外逃会导致固定汇率崩溃。',
        example: '中国香港的联系汇率制度（紧盯美元，利率跟随美联储）；欧元区成员国（放弃国家本币，统一使用由欧洲央行控制的欧元）。'
      }
    ]
  },
  {
    id: 'rodrik-globalization',
    name: '罗德里克全球化不可能三角',
    englishName: 'Dani Rodrik\'s Globalization Trilemma',
    category: 'politics',
    tagline: '哈佛大学经济学家对世界政经版图的深刻洞察',
    introduction: '哈佛大学教授丹尼·罗德里克（Dani Rodrik）提出，全球经济的政治重组存在一个三要素困境：我们无法同时维持深度全球化、国家主权（民族国家）和民主政治。',
    vertices: [
      {
        id: 'globalization',
        name: '深度全球化',
        englishName: 'Hyper-Globalization',
        description: '消除一切国界障碍，实现商品、资本和劳动力在世界范围的无阻碍流通。',
        details: '追求极致的跨国生产效率和全球市场融合，但要求各国的法律、税收和监管框架高度趋同。',
        colorHue: 160 // Aurora Green
      },
      {
        id: 'sovereignty',
        name: '国家主权',
        englishName: 'National Sovereignty',
        description: '维持独立的民族国家形态，国家拥有绝对的内部管辖权与独立法律。',
        details: '保护了民族国家的文化独特性和自主决策权，但在全球化市场面前可能沦为各自为政的贸易壁垒。',
        colorHue: 330 // Neon Pink
      },
      {
        id: 'democracy',
        name: '民主政治',
        englishName: 'Democratic Politics',
        description: '国家政策和法律必须直接向国内选民负责，代表普通大众的利益与呼声。',
        details: '确保政治决策的合法性与社会福利保障，但选民往往更关注本国工人和本土产业，排斥外部冲击。',
        colorHue: 200 // Cyber Blue
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['globalization', 'sovereignty'],
        sacrificedVertex: 'democracy',
        name: '深度全球化 + 国家主权（金色枷锁 - Golden Straitjacket）',
        description: '国家全力融入全球市场，保持独立政权，但政策制定必须完全迎合跨国资本和市场的喜好。',
        realWorldImpact: '为了吸引外资，政府被迫削减本国劳动者福利、降低环保标准，剥夺了本国人民通过民主选举改变这些民生政策的权利。选民的投票不再能左右经济走向。',
        example: '19世纪末的金本位制时期，以及拉美国家在“华盛顿共识”指导下被迫进行的私有化改革。'
      },
      {
        selectedVertices: ['sovereignty', 'democracy'],
        sacrificedVertex: 'globalization',
        name: '国家主权 + 民主政治（布雷顿森林妥协 / 贸易保护主义）',
        description: '在国家内部实行充分的民主决策，保护本国公民的利益与产业，但限制跨国资本与商品的无限制涌入。',
        realWorldImpact: '国家允许一定程度的国际贸易，但保留关税和资本管制，当外部竞争威胁到本国工人生计时，以民主诉求为导向的政府会迅速实施保护壁垒。',
        example: '二战后至1970年代的“布雷顿森林体系”，以及当前欧美出现的民粹主义和逆全球化浪潮。'
      },
      {
        selectedVertices: ['democracy', 'globalization'],
        sacrificedVertex: 'sovereignty',
        name: '民主政治 + 深度全球化（全球联邦制）',
        description: '既要全球化带来的超高生产力，又要实现民主决策，唯一的出路就是消除单一民族国家，建立全球性或区域性的民主议会。',
        realWorldImpact: '将民主投票权提升到超越国家的层面，由多国联合议会制定统一的劳工法、环境法和税法，跨国企业再也无法通过在国与国之间钻法律空子来逃避监管。',
        example: '欧洲联盟（欧盟）的构想——成员国向布鲁塞尔让渡了大量主权，统一货币与市场，并通过欧洲议会实行跨国民主，但该模式正面临巨大的本土主权反弹压力。'
      }
    ]
  },
  {
    id: 'cap-theorem',
    name: '分布式系统 CAP 定理',
    englishName: 'CAP Theorem',
    category: 'technology',
    tagline: '现代计算机分布式系统与数据库的物理铁律',
    introduction: '由加州大学伯克利分校的 Eric Brewer 提出。指在分布式计算机系统（如分布式数据库）中，当网络不可避免地出现故障或分区时，系统无法同时满足一致性、可用性和分区容错性。',
    vertices: [
      {
        id: 'consistency',
        name: '一致性',
        englishName: 'Consistency',
        description: '所有节点在同一时刻看到完全相同的数据，读操作每次都能读到最新写入的数据。',
        details: '极度适合转账、密码修改等不容许任何数据偏差的金融场景。实现它需要节点间进行复杂的同步锁定。',
        colorHue: 45 // Amber Glow
      },
      {
        id: 'availability',
        name: '可用性',
        englishName: 'Availability',
        description: '非故障的节点必须对每一次请求给出快速响应，即使响应的数据可能不是最新的。',
        details: '对用户体验至关重要（如社交媒体浏览、电商推流）。系统绝对不能返回“系统繁忙”或长时间卡死。',
        colorHue: 140 // Emerald
      },
      {
        id: 'partition',
        name: '分区容错性',
        englishName: 'Partition Tolerance',
        description: '当部分节点之间的网络通信出现故障（分区）时，系统仍能继续运行。',
        details: '在云时代，网络波动是无法避免的绝对物理事实。因此在现实中，P 是几乎所有分布式系统默认必须保留的。',
        colorHue: 300 // Fuchsia Light
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['consistency', 'availability'],
        sacrificedVertex: 'partition',
        name: '一致性 (C) + 可用性 (A) —— CP系统（理想状态）',
        description: '在网络完全没有故障的理想情况下，系统既是一致的又是可用的。但一旦网络出现断开，系统就会彻底瘫痪。',
        realWorldImpact: '在现实分布式架构中，网络故障（P）必定会发生。因此纯粹的 CA 系统实际上是不存在的，或者说它退化成了单机系统（非分布式）。',
        example: '传统的单机关系型数据库（如 Oracle、MySQL 在未开启分布式集群时）。'
      },
      {
        selectedVertices: ['consistency', 'partition'],
        sacrificedVertex: 'availability',
        name: '一致性 (C) + 分区容错性 (P) —— CP系统（强一致优先）',
        description: '当网络出现故障时，为了确保所有节点上的数据绝对一致，系统选择拒绝部分写请求或干预读操作，直到网络完全修复。',
        realWorldImpact: '网络分区发生期间，部分用户发起请求会直接收到“服务不可用”的错误，但只要系统给出了响应，数据就绝对正确、无偏差。',
        example: 'Google Spanner, Apache HBase, Redis (强一致模式), ZooKeeper。'
      },
      {
        selectedVertices: ['availability', 'partition'],
        sacrificedVertex: 'consistency',
        name: '可用性 (A) + 分区容错性 (P) —— AP系统（最终一致优先）',
        description: '当网络通信发生故障时，每个节点照常接收读写请求并立刻响应，哪怕这会导致不同节点上的数据暂时不一致。',
        realWorldImpact: '网络发生问题时用户仍能正常刷网页或点赞，但不同用户看到的赞数可能不同。数据会在网络修复后慢慢同步达到“最终一致性”。',
        example: 'Apache Cassandra, Amazon DynamoDB, DNS 域名解析系统。'
      }
    ]
  },
  {
    id: 'blockchain-trilemma',
    name: '区块链不可能三角',
    englishName: 'Blockchain Trilemma',
    category: 'technology',
    tagline: '以太坊创始人 Vitalik Buterin 提出的公链发展瓶颈',
    introduction: '指出去中心化网络在设计共识机制与账本架构时，无法同时完美兼顾去中心化、安全性和可扩展性（TPS性能）。这成为了近十年来Web3技术演进的核心命题。',
    vertices: [
      {
        id: 'decentralization',
        name: '去中心化',
        englishName: 'Decentralization',
        description: '网络由成千上万个独立运行的节点共同维护，没有任何单一实体能够控制账本。',
        details: '带来抗审查、无许可（Permissionless）和防篡改的终极信任。但节点越多，广播和同步交易的速度就越慢。',
        colorHue: 260 // Royal Violet
      },
      {
        id: 'security',
        name: '安全性',
        englishName: 'Security',
        description: '网络能够抵抗恶意的 51% 攻击或共识篡改，保护用户资产不受侵犯。',
        details: '是整个金融账本的生命线。降低安全性等同于允许黑客窃取资金，这在公共账本中是完全毁灭性的。',
        colorHue: 350 // Crimson Fire
      },
      {
        id: 'scalability',
        name: '可扩展性',
        englishName: 'Scalability',
        description: '网络处理交易的速度（每秒交易笔数 TPS）以及应对大规模并发用户请求的能力。',
        details: '决定了区块链能否真正商用（如 Visa 级别的高频交易）。若扩展性差，用户将面临极高的手续费和漫长的排队。',
        colorHue: 130 // Lime Green
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['decentralization', 'security'],
        sacrificedVertex: 'scalability',
        name: '去中心化 + 安全性（传统公链 - 以太坊1.0 / 比特币）',
        description: '将全部资源倾注在账本防篡改和绝对的去中心化上，但由于每个节点都要对每笔交易进行计算和存储，性能极其低下。',
        realWorldImpact: '在交易高峰期，网络发生拥堵，一笔简单的转账可能需要几个小时才能确认，且手续费（Gas Fee）暴涨至几十甚至几百美元。',
        example: 'Bitcoin, Ethereum 早期主网（在引入 Layer 2 扩容方案之前）。'
      },
      {
        selectedVertices: ['security', 'scalability'],
        sacrificedVertex: 'decentralization',
        name: '安全性 + 可扩展性（联盟链 / 高度中心化的“公链”）',
        description: '为了实现每秒几万笔交易的超高性能，选择大幅减少参与账本共识的节点数量，仅允许少数几家被信任的节点（超级节点）来确认交易。',
        realWorldImpact: '交易速度极快，费用忽略不计，但如果这几个超级节点联合起来或者被政府勒令关停，整个账本就可以被随意篡改或审查，失去了区块链的本质意义。',
        example: '各类企业级联盟链、高度依赖少数验证节点的公链（如 EOS 的 DPoS 机制）。'
      },
      {
        selectedVertices: ['scalability', 'decentralization'],
        sacrificedVertex: 'security',
        name: '可扩展性 + 去中心化（不安全的实验网络）',
        description: '在节点极度分散且处理速度飞快的网络中，由于缺乏足够复杂的密码学安全屏障或足够的算力/质押壁垒保护，系统极其脆弱。',
        realWorldImpact: '黑客可以用极低的经济成本买通网络中51%的轻量级验证节点，从而实施双花攻击、回滚交易，瞬间让整个账本信用破产。',
        example: '一些共识机制设计有缺陷、仓促上线的山寨币（Altcoins）实验网络。'
      }
    ]
  },
  {
    id: 'project-management',
    name: '项目管理铁三角',
    englishName: 'Project Management Iron Triangle',
    category: 'life',
    tagline: '每一个职场人、程序员和产品经理都必须面对的现实骨感',
    introduction: '在工程与项目管理中，项目的推进受到三股核心力量的相互制约：高质量（好）、低成本（省）、高速度（快）。你永远无法以低廉的价格、闪电般的速度交付一个完美无瑕的工程。',
    vertices: [
      {
        id: 'quality',
        name: '高质量 (好)',
        englishName: 'High Quality',
        description: '产品功能完善、设计惊艳、几乎没有 Bug，用户体验达到极致。',
        details: '卓越品质的代名词。需要反复测试、严苛打磨，容不得半点偷工减料。',
        colorHue: 20 // Gold/Amber
      },
      {
        id: 'speed',
        name: '高速度 (快)',
        englishName: 'High Speed',
        description: '项目能以极短的开发周期快速交付，抢占市场先机。',
        details: '时间就是金钱。快速抢占风口，缩短研发周期。',
        colorHue: 340 // Electric Rose
      },
      {
        id: 'cost',
        name: '低成本 (省)',
        englishName: 'Low Cost',
        description: '仅用极少的人力、物力与资金投入即可完成项目开发。',
        details: '创业团队或精益管理的红线。要求精简开支，把每一分钱花在刀刃上。',
        colorHue: 170 // Cyan Mint
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['quality', 'speed'],
        sacrificedVertex: 'cost',
        name: '高质量 + 高速度（砸钱砸资源 - 昂贵交付）',
        description: '既要产品精美无暇，又要明天立刻上线。唯一的办法是重金聘请最顶尖的专家团队，全员高强度加班，甚至直接买断成熟方案。',
        realWorldImpact: '项目成果极其耀眼，速度惊人，但资金消耗将是天文数字。如果资金断裂，项目会直接暴雷。',
        example: '大型科技巨头为迎合风口而进行的紧急“闪电战”项目（例如早期 ChatGPT 爆发时谷歌的紧急迎战）。'
      },
      {
        selectedVertices: ['quality', 'cost'],
        sacrificedVertex: 'speed',
        name: '高质量 + 低成本（慢工出细活 - 漫长磨练）',
        description: '预算极低，但又绝不向质量妥协。那就必须做好打持久战的准备，依靠极少的核心人员，在漫长岁月中一点一点抠细节。',
        realWorldImpact: '成品往往是一部匠心独运的杰作，但研发周期极长，上线时可能会发现市场早已被速度快的对手瓜分殆尽。',
        example: '独立游戏《空洞骑士》的开发历程（极少的核心开发人员，极低的研发成本，开发数年，终成一代神作）。'
      },
      {
        selectedVertices: ['speed', 'cost'],
        sacrificedVertex: 'quality',
        name: '高速度 + 低成本（快速做垃圾 - 粗制滥造）',
        description: '预算紧巴巴，要求下周必须上线。在既没钱又没时间的情况下，只能大量砍掉功能，不做任何测试，用现成的开源模版拼凑出一个极其脆弱的半成品。',
        realWorldImpact: '项目以闪电战形式抢占了滩头，但产品漏洞百出、漏洞横行、UI简陋，极易在用户量激增时瞬间崩溃，沦为业界的笑柄。',
        example: '市面上大量粗制滥造的换皮手游、劣质快消网页，或者某些为应付汇报仓促搭建的汇报演示系统。'
      }
    ]
  },
  {
    id: 'student-life',
    name: '大学生不可能三角',
    englishName: 'Student Life Trilemma',
    category: 'life',
    tagline: '象牙塔中流传最广的终极灵魂拷问',
    introduction: '生动且幽默地反映了当代高校学子的真实生存现状。在繁重的学业要求、身体健康保障以及不可或缺的社交情感需求之间，大学生似乎永远在拆东墙补西墙。',
    vertices: [
      {
        id: 'grades',
        name: '优秀学业成绩',
        englishName: 'Good Grades',
        description: '门门期末绩点（GPA）满分，拿遍国家奖学金，手握大厂实习与科研论文。',
        details: '保研和求职的敲门砖。需要将海量的时间投入在图书馆自习、刷题与写报告中。',
        colorHue: 210 // Electric Blue
      },
      {
        id: 'sleep',
        name: '充足的睡眠',
        englishName: 'Enough Sleep',
        description: '每天雷打不动睡够 8 小时，皮肤饱满，精神抖擞，远离脱发与黑眼圈。',
        details: '身心健康的终极保障。保持规律作息和充足睡眠，拒绝无效的熬夜修仙。',
        colorHue: 120 // Pastel Green
      },
      {
        id: 'social',
        name: '丰富的社交生活',
        englishName: 'Active Social Life',
        description: '谈一场甜蜜的恋爱，通宵聚餐唱歌，加入各类社团，到处旅行摄影。',
        details: '心理慰藉和青春回忆的源泉。维系深厚人际关系需要消耗大量精力与时间。',
        colorHue: 310 // Hot Pink
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['grades', 'sleep'],
        sacrificedVertex: 'social',
        name: '优秀成绩 + 充足睡眠（学霸级苦行僧）',
        description: '每天保持极其规律的高效学习，到点就睡。学业精湛，精神饱满，但彻底屏蔽了一切不必要的社交和娱乐。',
        realWorldImpact: '期末成绩名列前茅，头发茂密且身体倍儿棒，但在同学眼中是一个神龙见首不见尾的孤僻“学神”，大学四年连班里人可能都没认全。',
        example: '专注于自修室-食堂-宿舍三点一线、心无旁骛准备保研或考研的高效率学霸。'
      },
      {
        selectedVertices: ['grades', 'social'],
        sacrificedVertex: 'sleep',
        name: '优秀成绩 + 丰富社交（咖啡因续命狂人）',
        description: '既要成为绩点第一的社交达人，又要参加每一个派对和社团。唯一的解决办法就是压缩睡眠，每天只睡三四个小时。',
        realWorldImpact: '在讲台上他是耀眼的学术新星，在酒局上他是控场的社交核心，然而台下他正靠着每天四杯美式咖啡强撑，黑眼圈极深，免疫力暴跌。',
        example: '典型的名校商科“精致利己主义”卷王、或者身兼学生会主席的超级实习达人。'
      },
      {
        selectedVertices: ['sleep', 'social'],
        sacrificedVertex: 'grades',
        name: '充足睡眠 + 丰富社交（快乐的低分天使）',
        description: '每天呼呼大睡到中午，下午和朋友吃喝玩乐，晚上通宵打游戏或者夜宵狂欢。过得极其充实而快乐，代价是彻底放弃了学业绩点。',
        realWorldImpact: '拥有了最完美、最浪漫的无悔青春记忆，但到了期末面对堆积如山的专业课，只能默默祈求老师给一个“60分万岁”的及格低分。',
        example: '贯彻“大学不挂科，青春不完整”、及时行乐的佛系乐天派学生。'
      }
    ]
  }
];
