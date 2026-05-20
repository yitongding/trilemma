import type { LocalizedText } from '../context/LanguageContext';

export interface Vertex {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  details: LocalizedText;
  colorHue: number; // HSL color hue
}

export interface TradeOff {
  selectedVertices: [string, string];
  sacrificedVertex: string;
  name: LocalizedText;
  description: LocalizedText;
  realWorldImpact: LocalizedText;
  example: LocalizedText;
}

export interface Trilemma {
  id: string;
  name: LocalizedText;
  category: 'economics' | 'politics' | 'technology' | 'business' | 'life';
  tagline: LocalizedText;
  introduction: LocalizedText;
  vertices: [Vertex, Vertex, Vertex];
  tradeOffs: [TradeOff, TradeOff, TradeOff];
}

export const trilemmas: Trilemma[] = [
  {
    id: 'mundell-fleming',
    name: {
      zh: '蒙代尔-弗莱明不可能三角',
      en: 'Mundell-Fleming Policy Trilemma'
    },
    category: 'economics',
    tagline: {
      zh: '国际金融学最经典的宏观调控困境',
      en: 'The classic macro-control dilemma of international finance'
    },
    introduction: {
      zh: '由诺贝尔经济学奖获得者罗伯特·蒙代尔等提出。指出在开放的宏观经济中，一个国家无法同时实现资本自由流动、货币政策独立性和固定汇率。必须且只能选择其中两个，而放弃第三个。',
      en: 'Proposed by Nobel laureate Robert Mundell and Marcus Fleming. It states that an open economy cannot simultaneously achieve free capital flow, independent monetary policy, and a fixed exchange rate. It must choose two and sacrifice the third.'
    },
    vertices: [
      {
        id: 'capital',
        name: {
          zh: '资本自由流动',
          en: 'Free Capital Flow'
        },
        description: {
          zh: '允许境外资本无障碍进出本国国境进行投资或撤资，旨在实现全球范围内的资本最优配置与高效流动。',
          en: 'Allows cross-border capital to enter and exit the country without barriers, aiming for optimal global resource allocation.'
        },
        details: {
          zh: '它是融入全球经济一体化的重要标志，能极大促进跨国直接投资、股市和债市的国际化，并为国内企业引入充沛的外资支撑。然而，由于缺乏资本管制，本国金融体系将直接暴露在国际热钱炒作和全球金融周期的剧烈波动之下，极易受到外部金融危机传染。',
          en: 'A hallmark of global economic integration, it boosts foreign direct investment, stock and bond market internationalization, and foreign capital access. However, lacking controls exposes the domestic financial system to highly volatile international hot money and global crisis contagion.'
        },
        colorHue: 150 // Aurora Green
      },
      {
        id: 'monetary',
        name: {
          zh: '独立货币政策',
          en: 'Independent Monetary Policy'
        },
        description: {
          zh: '本国中央银行能够基于国内宏观经济状况，自主调节基准利率、存款准备金率及市场流动性，以维持物价稳定并促进充分就业。',
          en: 'Enables the domestic central bank to autonomously adjust interest rates, reserve ratios, and market liquidity based on local economic conditions.'
        },
        details: {
          zh: '这是主权国家实施逆周期调控的核心经济武器。如果失去独立性，本国央行将沦为别国政策（如美联储加息周期）的传声筒，当国内面临通缩需要降息时，却被迫跟着别国加息以防止资本外流，从而导致本国实体经济严重受损。',
          en: 'The core countercyclical tool for a sovereign state. Surrendering independence reduces the local central bank to an echo of foreign policies (e.g., Fed rate hikes). When the local economy needs low rates to combat deflation, it is forced to hike rates to prevent capital flight, harming domestic growth.'
        },
        colorHue: 190 // Cyber Blue
      },
      {
        id: 'exchange',
        name: {
          zh: '固定汇率',
          en: 'Fixed Exchange Rate'
        },
        description: {
          zh: '将本国货币与某种主要外币（如美元）或一篮子货币的汇率锚定，维持在极窄的区间范围内。',
          en: 'Pegs the domestic currency to a major foreign currency (like USD) or a basket of currencies within a very narrow trading band.'
        },
        details: {
          zh: '能够彻底消除汇率波动带来的市场不确定性，为跨国贸易商、进出口企业 and 外来投资者建立极强的稳定预期，大幅降低国际交易的摩擦成本。但缺点是，为了在外汇市场维持该汇率，国家必须消耗海量外汇储备，极易沦为国际金融投机鳄鱼进行狙击套利的靶子。',
          en: 'Completely eliminates exchange rate volatility, providing strong stability for international trade and foreign investors. However, maintaining it demands massive foreign reserves, making the country a prime target for international speculative short-sellers.'
        },
        colorHue: 280 // Neon Purple
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['capital', 'monetary'],
        sacrificedVertex: 'exchange',
        name: {
          zh: '资本自由流动 + 独立货币政策（浮动汇率制）',
          en: 'Free Capital Flow + Independent Monetary Policy (Floating Exchange Rate)'
        },
        description: {
          zh: '本国保持货币政策的自主权，允许资金自由进出，但必须接受汇率完全由市场供求决定。',
          en: 'Retains monetary policy autonomy and allows capital mobility, but must accept that exchange rates are determined entirely by market forces.'
        },
        realWorldImpact: {
          zh: '当国内为了刺激经济降低利率时，资本会流向利率更高的国家，导致本币贬值。本国无法干预汇率。',
          en: 'Lowering rates to stimulate the economy causes capital outflow to high-yield nations, triggering currency depreciation. The state cannot intervene.'
        },
        example: {
          zh: '美国、欧元区、日本、英国等绝大多数发达经济体现行体系。',
          en: 'Adopted by most major developed economies, such as the US, Eurozone, Japan, and the UK.'
        }
      },
      {
        selectedVertices: ['monetary', 'exchange'],
        sacrificedVertex: 'capital',
        name: {
          zh: '独立货币政策 + 固定汇率（资本管制制）',
          en: 'Independent Monetary Policy + Fixed Exchange Rate (Capital Controls)'
        },
        description: {
          zh: '锁定汇率以稳定贸易，同时自主控制本国利率，但必须建立极高的资本防火墙，限制资金自由进出。',
          en: 'Secures a fixed rate to boost trade and retains monetary autonomy, but must build capital walls to restrict free capital flow.'
        },
        realWorldImpact: {
          zh: '由于存在资本管制，境内外的资金利差无法通过自由套利拉平，从而维持了汇率与利率的共存，但牺牲了效率。',
          en: 'Capital controls prevent free interest-rate arbitrage across borders, enabling the co-existence of local rates and a fixed peg at the cost of global integration.'
        },
        example: {
          zh: '中国目前推行的宏观管理框架（实行有管理的浮动汇率、自主货币政策及资本管制）。',
          en: 'China\'s macroeconomic framework (managed floating rate, independent monetary policy, and capital account controls).'
        }
      },
      {
        selectedVertices: ['exchange', 'capital'],
        sacrificedVertex: 'capital', // Wait, sacrificed monetary
        name: {
          zh: '固定汇率 + 资本自由流动（货币局制/欧元区）',
          en: 'Fixed Exchange Rate + Free Capital Flow (Currency Board / Eurozone)'
        },
        description: {
          zh: '允许资本自由进出，并死死咬定汇率，但代价是彻底丧失国内利率的自主决定权，完全随外部国家起舞。',
          en: 'Enables free capital flows and locks the exchange rate, but completely relinquishes autonomy over domestic interest rates.'
        },
        realWorldImpact: {
          zh: '如果外部国家加息，本国即使经济低迷也必须跟着加息，否则资本外逃会导致固定汇率崩溃。',
          en: 'If the foreign peg state raises rates, the home country must follow suit even in recession to prevent the peg from collapsing due to capital flight.'
        },
        example: {
          zh: '中国香港的联系汇率制度（紧盯美元，利率跟随美联储）；欧元区成员国（放弃国家本币，统一使用由欧洲央行控制的欧元）。',
          en: 'Hong Kong\'s Linked Exchange Rate System (pegged to USD); Eurozone members (surrendering local currencies for a shared Euro managed by the ECB).'
        }
      }
    ]
  },
  {
    id: 'rodrik-globalization',
    name: {
      zh: '罗德里克全球化不可能三角',
      en: 'Dani Rodrik\'s Globalization Trilemma'
    },
    category: 'politics',
    tagline: {
      zh: '哈佛大学经济学家对世界政经版图的深刻洞察',
      en: 'Deep political-economic insights by Harvard University professor Dani Rodrik'
    },
    introduction: {
      zh: '哈佛大学教授丹尼·罗德里克（Dani Rodrik）提出，全球经济的政治重组存在一个三要素困境：我们无法同时维持深度全球化、国家主权（民族国家）和民主政治。',
      en: 'Proposed by Harvard economist Dani Rodrik. It states that the global economy faces a trilemma: it is impossible to simultaneously maintain hyper-globalization, national sovereignty, and democratic politics.'
    },
    vertices: [
      {
        id: 'globalization',
        name: {
          zh: '深度全球化',
          en: 'Hyper-Globalization'
        },
        description: {
          zh: '追求国界障碍的完全消除，实现商品、资本、技术和劳动力在全球范围内的无缝畅通流通与完全市场一体化。',
          en: 'Pursues complete elimination of borders to achieve seamless trade, capital, technology, and labor flows.'
        },
        details: {
          zh: '这代表了全球效率的最大化，通过跨国分工和供应链整合创造巨大的财富增量。但在政治层面上，为了让跨国资本自由流转，它要求各主权国家的商业法律、税收标准、劳动保障和环保规管向全球统一标准高度收敛，极大地压缩了单个国家因地制宜制定国内社会政策的政策空间。',
          en: 'Represents maximum global efficiency, creating massive wealth through international division of labor and supply chains. Politically, to satisfy capital mobility, it demands domestic corporate laws, tax codes, and labor rights to align globally, heavily compressing local policy spaces.'
        },
        colorHue: 160 // Aurora Green
      },
      {
        id: 'sovereignty',
        name: {
          zh: '国家主权',
          en: 'National Sovereignty'
        },
        description: {
          zh: '维持独立的民族国家政治实体地位，保障本国法律、主权边界以及国家内部管辖权不受任何外部跨国力量或国际协定的强力干预。',
          en: 'Maintains independent nation-state political entities, ensuring domestic laws and jurisdictions are free from foreign intervention.'
        },
        details: {
          zh: '这是民族国家尊严、文化独特性以及自主发展道路的制度根基，能够让本国人民独立自主地处理领土、社会和安全事务。然而，过度追求绝对的国家主权往往会演化为本位主义的贸易壁垒和逆全球化行为，阻碍跨国要素的高效流转，导致本国游离于全球协作和产业链分工之外。',
          en: 'The institutional foundation of national dignity, cultural uniqueness, and sovereign development paths. However, pursuing absolute sovereignty breeds protectionist trade barriers and isolationist behavior, cutting the nation off from global collaboration.'
        },
        colorHue: 330 // Neon Pink
      },
      {
        id: 'democracy',
        name: {
          zh: '民主政治',
          en: 'Democratic Politics'
        },
        description: {
          zh: '国家的公共政策、经济法规及财富分配机制必须直接向国内选民负责，通过公平的民主选举与多方协商代表普通大众的利益诉求。',
          en: 'Public policies and wealth distribution must directly answer to domestic voters through fair elections and public consensus.'
        },
        details: {
          zh: '民主确保了国家政策的合法性、社会福利的兜底保障，以及对弱势群体利益的保护。但在深度的全球化冲击下，国内被边缘化的劳动阶层会通过民主选票表达强烈的不满，要求实施排外的关税和劳工壁垒，这与全球市场一体化的诉求产生天然的、不可调和的制度对抗。',
          en: 'Ensures policy legitimacy, social safety nets, and protection of the public\'s interests. But under hyper-globalization, marginalized domestic workers express grievances through votes, demanding tariffs and labor barriers that clash with global integration.'
        },
        colorHue: 200 // Cyber Blue
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['globalization', 'sovereignty'],
        sacrificedVertex: 'democracy',
        name: {
          zh: '深度全球化 + 国家主权（金色枷锁 - Golden Straitjacket）',
          en: 'Hyper-Globalization + National Sovereignty (Golden Straitjacket)'
        },
        description: {
          zh: '国家全力融入全球 market，保持独立政权，但政策制定必须完全迎合跨国资本 and 市场的喜好。',
          en: 'Fully integrates into the global market and retains sovereign power, but policy-making must cater strictly to international capital.'
        },
        realWorldImpact: {
          zh: '为了吸引外资，政府被迫削减本国劳动者福利、降低环保标准，剥夺了本国人民通过民主选举改变这些民生政策的权利。选民的投票不再能左右经济走向。',
          en: 'To attract capital, governments cut labor benefits and environmental rules, bypassing democratic choices. Voters cannot alter the economic path.'
        },
        example: {
          zh: '19世纪末的金本位制时期，以及拉美国家在“华盛顿共识”指导下被迫进行的私有化改革。',
          en: 'The gold standard era of the late 19th century, and Latin American privatization reforms under the "Washington Consensus".'
        }
      },
      {
        selectedVertices: ['sovereignty', 'democracy'],
        sacrificedVertex: 'globalization',
        name: {
          zh: '国家主权 + 民主政治（布雷顿森林妥协 / 贸易保护主义）',
          en: 'National Sovereignty + Democratic Politics (Bretton Woods Compromise / Protectionism)'
        },
        description: {
          zh: '在国家内部实行充分的民主决策，保护本国公民的利益与产业，但限制跨国资本与商品的无限制涌入。',
          en: 'Implements full democratic decisions domestically to protect citizens and local industries, while limiting unrestricted global capital.'
        },
        realWorldImpact: {
          zh: '国家允许一定程度的国际贸易，但保留关税和资本管制，当外部竞争威胁到本国工人生计时，以民主诉求为导向的政府会迅速实施保护壁垒。',
          en: 'The state allows trade but retains capital controls and tariffs, quickly erecting walls when global competition threatens local livelihoods.'
        },
        example: {
          zh: '二战后至1970年代的“布雷顿森林体系”，以及当前欧美出现的民粹主义和逆全球化浪潮。',
          en: 'The post-WWII "Bretton Woods System" (until 1970s), and the rise of populism and deglobalization waves in the West today.'
        }
      },
      {
        selectedVertices: ['democracy', 'globalization'],
        sacrificedVertex: 'sovereignty',
        name: {
          zh: '民主政治 + 深度全球化（全球联邦制）',
          en: 'Democratic Politics + Hyper-Globalization (Global Federalism)'
        },
        description: {
          zh: '既要全球化带来的超高生产力，又要实现民主决策，唯一的出路就是消除单一民族国家，建立全球性或区域性的民主议会。',
          en: 'Combines global economic efficiency with democratic accountability by transcending the nation-state to form global democratic institutions.'
        },
        realWorldImpact: {
          zh: '将民主投票权提升到超越国家的层面，由多国联合议会制定统一的劳工法、环境法和税法，跨国企业再也无法通过在国与国之间钻法律空子来逃避监管。',
          en: 'Elevates voting power above national borders, where a multinational parliament sets unified tax, labor, and environment laws, preventing corporate regulatory arbitrage.'
        },
        example: {
          zh: '欧洲联盟（欧盟）的构想——成员国向布鲁塞尔让渡了大量主权，统一货币与市场，并通过欧洲议会实行跨国民主，但该模式正面临巨大的本土主权反弹压力。',
          en: 'The European Union (EU) ideal—members surrender substantial sovereignty to Brussels for a shared market, though facing severe nationalist backlash.'
        }
      }
    ]
  },
  {
    id: 'cap-theorem',
    name: {
      zh: '分布式系统 CAP 定理',
      en: 'Distributed CAP Theorem'
    },
    category: 'technology',
    tagline: {
      zh: '现代计算机分布式系统与数据库的物理铁律',
      en: 'The physical law of modern distributed computing systems & databases'
    },
    introduction: {
      zh: '由加州大学伯克利分校的 Eric Brewer 提出。指在分布式计算机系统（如分布式数据库）中，当网络不可避免地出现故障或分区时，系统无法同时满足一致性、可用性和分区容错性。',
      en: 'Proposed by Eric Brewer. It states that in a distributed database system, when network partitions are physically inevitable, the system can only guarantee two out of three: Consistency, Availability, and Partition Tolerance.'
    },
    vertices: [
      {
        id: 'consistency',
        name: {
          zh: '一致性',
          en: 'Consistency'
        },
        description: {
          zh: '保证分布式系统中的所有数据节点在同一时刻向客户端呈现完全相同的数据状态，即每一次成功的写操作后，所有后续读操作都能获取到最新的值。',
          en: 'Guarantees all data nodes in a distributed system display the exact same state at the same time; reads always fetch the latest write.'
        },
        details: {
          zh: '它是金融级应用、交易转账和密码修改等高敏感业务的底线要求。为了维持强一致性，系统必须引入复杂的两阶段提交（2PC）或 Paxos/Raft 共识算法，在某个节点写入时锁定其他节点的读写请求，这会导致网络延迟大幅增加，且在网络分区时不得不拒绝部分服务。',
          en: 'The baseline requirement for sensitive transactions like finance and passwords. Maintaining strong consistency requires locking read/write requests during consensus (e.g., Paxos, Raft), increasing latency and risking unavailability during partitioning.'
        },
        colorHue: 45 // Amber Glow
      },
      {
        id: 'availability',
        name: {
          zh: '可用性',
          en: 'Availability'
        },
        description: {
          zh: '确保分布式系统中非故障的节点必须对客户端的每一次请求给出快速响应（成功或失败），绝不允许出现系统超时或无限期挂起的卡死状态。',
          en: 'Ensures non-failing nodes respond immediately to every request (with success or failure) without timeout or infinite blocking.'
        },
        details: {
          zh: '它是互联网高并发场景（如社交媒体信息流、电商大促、视频推流）的核心体验指标。即使部分节点数据不是最新的，系统也宁可返回旧的、过时的数据（最终一致），也绝不能让用户看到“系统繁忙，请稍后再试”或长时间转圈卡顿，从而确保业务流的连续性。',
          en: 'The critical user experience index for high-concurrency internet systems. Even if data is slightly stale, returning older cached values is preferred over displaying "service busy" errors, maintaining business continuity.'
        },
        colorHue: 140 // Emerald
      },
      {
        id: 'partition',
        name: {
          zh: '分区容错性',
          en: 'Partition Tolerance'
        },
        description: {
          zh: '当分布式系统内部的节点之间由于物理网线断开、交换机故障或延迟超限导致网络通信出现故障（即发生网络分区）时，整个系统仍能继续对外提供服务。',
          en: 'The system continues to operate even when communication between nodes fails or drops due to physical network breaks.'
        },
        details: {
          zh: '在跨越数个机房、横跨全球的云原生时代，由于光纤闪断、网络阻塞以及宿主机宕机是无法避免的物理法则，因此“分区（P）”是必然会发生的事实。在设计分布式架构时，分区容错性是系统默认必须保留的物理基石，我们只能在 C 和 A 之间进行艰难的二选一。',
          en: 'In the global cloud-native era, network fiber cuts and hardware crashes are physical inevitabilities. Thus, partition tolerance is a non-negotiable base; systems must make a hard choice between consistency and availability.'
        },
        colorHue: 300 // Fuchsia Light
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['consistency', 'availability'],
        sacrificedVertex: 'partition',
        name: {
          zh: '一致性 (C) + 可用性 (A) —— CP系统（理想状态）',
          en: 'Consistency (C) + Availability (A) -- CP System (Ideal state)'
        },
        description: {
          zh: '在网络完全没有故障的理想情况下，系统既是一致的又是可用的。但一旦网络出现断开，系统就会彻底瘫痪。',
          en: 'In an ideal error-free network, the system is both consistent and available. But if a partition occurs, the system collapses.'
        },
        realWorldImpact: {
          zh: '在现实分布式架构中，网络故障（P）必定会发生。因此纯粹的 CA 系统实际上是不存在的，或者说它退化成了单机系统（非分布式）。',
          en: 'Since physical network failures are inevitable in distributed environments, a pure CA system cannot exist in practice, effectively reverting to a single-node database.'
        },
        example: {
          zh: '传统的单机关系型数据库（如 Oracle、MySQL 在未开启分布式集群时）。',
          en: 'Traditional single-instance relational databases (like Oracle or MySQL without replication).'
        }
      },
      {
        selectedVertices: ['consistency', 'partition'],
        sacrificedVertex: 'availability',
        name: {
          zh: '一致性 (C) + 分区容错性 (P) —— CP系统（强一致优先）',
          en: 'Consistency (C) + Partition Tolerance (P) -- CP System (Consistency-prioritized)'
        },
        description: {
          zh: '当网络出现故障时，为了确保所有节点上的数据绝对一致，系统选择拒绝部分写请求或干预读操作，直到网络完全修复。',
          en: 'When network errors occur, the system rejects writes or delays reads to guarantee data correctness, sacrificing availability.'
        },
        realWorldImpact: {
          zh: '网络分区发生期间，部分用户发起请求会直接收到“服务不可用”的错误，但只要系统给出了响应，数据就绝对正确、无偏差。',
          en: 'Users receive "service unavailable" errors during network partition, but any successful response is guaranteed to be 100% correct.'
        },
        example: {
          zh: 'Google Spanner, Apache HBase, Redis (强一致模式), ZooKeeper。',
          en: 'Google Spanner, Apache HBase, Redis (Strong Consistency mode), ZooKeeper.'
        }
      },
      {
        selectedVertices: ['availability', 'partition'],
        sacrificedVertex: 'consistency',
        name: {
          zh: '可用性 (A) + 分区容错性 (P) —— AP系统（最终一致优先）',
          en: 'Availability (A) + Partition Tolerance (P) -- AP System (Availability-prioritized)'
        },
        description: {
          zh: '当网络通信发生故障时，每个节点照常接收读写请求并立刻响应，哪怕这会导致不同节点上的数据暂时不一致。',
          en: 'During network partitioning, nodes process read/write requests instantly, even if it leads to temporary data discrepancy across nodes.'
        },
        realWorldImpact: {
          zh: '网络发生问题时用户仍能正常刷网页或点赞，但不同用户看到的赞数可能不同。数据会在网络修复后慢慢同步达到“最终一致性”。',
          en: 'Users can browse or like content uninterrupted, though likes counts might differ temporarily. Data eventually synchronizes to reach "eventual consistency" once network heals.'
        },
        example: {
          zh: 'Apache Cassandra, Amazon DynamoDB, DNS 域名解析系统。',
          en: 'Apache Cassandra, Amazon DynamoDB, DNS (Domain Name System).'
        }
      }
    ]
  },
  {
    id: 'blockchain-trilemma',
    name: {
      zh: '区块链不可能三角',
      en: 'Blockchain Trilemma'
    },
    category: 'technology',
    tagline: {
      zh: '以太坊创始人 Vitalik Buterin 提出的公链发展瓶颈',
      en: 'Public chain developmental bottlenecks raised by Ethereum founder Vitalik Buterin'
    },
    introduction: {
      zh: '指出去中心化网络在设计共识机制与账本架构时，无法同时完美兼顾去中心化、安全性和可扩展性（TPS性能）。这成为了近十年来Web3技术演进的核心命题。',
      en: 'Dictates that decentralized networks cannot simultaneously achieve decentralization, security, and scalability. This has been the core puzzle of Web3 evolution.'
    },
    vertices: [
      {
        id: 'decentralization',
        name: {
          zh: '去中心化',
          en: 'Decentralization'
        },
        description: {
          zh: '网络的账本记账权、共识决策权由分布在全球各地的成千上万个独立运行的节点共同维护，没有任何单一的中心化机构或企业联盟能够垄断或控制系统。',
          en: 'Ledger records and consensus decision rights are maintained by thousands of independent nodes worldwide, free from central monopoly.'
        },
        details: {
          zh: '这是区块链的立网之本，带来了抗审查、无许可（Permissionless）、防单点故障以及对公有账本的终极无需信任性。但为了让无数分布式节点对交易状态达成一致，每次数据更新都必须在全球网络中广播并经过漫长的共识周期，从而极大牺牲了网络的整体吞吐量和处理速度。',
          en: 'The core ethos of Web3, offering censorship resistance, permissionless access, and eliminating single points of failure. However, requiring global consensus on every transaction severely slows down overall throughput.'
        },
        colorHue: 260 // Royal Violet
      },
      {
        id: 'security',
        name: {
          zh: '安全性',
          en: 'Security'
        },
        description: {
          zh: '确保网络具备极高的防御能力，能够强力抵抗恶意黑客的 51% 算力/质押攻击、双花欺诈以及共识协议篡改，保护链上所有智能合约及用户资产绝对安全。',
          en: 'The network is robust against 51% mining/staking attacks, double-spending, and transaction tampering, keeping chain assets absolutely safe.'
        },
        details: {
          zh: '安全性是整个去中心化金融账本和加密世界的生命线。如果降低安全门槛（如缩短区块时间、简化签名验证流程），黑客就能以极低的经济成本买通节点篡改交易、凭空印钞或回滚转账，这将导致区块链在瞬间丧失所有的信用基石，彻底崩溃。',
          en: 'The lifeline of decentralized finance. Reducing security barriers (e.g. shortening block times too aggressively or skipping validation checks) lowers the cost for hackers to rewrite history, destroying the entire trust model.'
        },
        colorHue: 350 // Crimson Fire
      },
      {
        id: 'scalability',
        name: {
          zh: '可扩展性',
          en: 'Scalability'
        },
        description: {
          zh: '网络在大规模用户并发和高频交互下处理交易的速度（通常以 TPS，即每秒交易笔数来衡量），以及快速响应并确认状态的能力。',
          en: 'The transaction processing speed (TPS) and status confirmation time under massive concurrent user activity.'
        },
        details: {
          zh: '它是公链能够走向亿万用户级别的大众商用（如媲美 Visa 级别的数万吞吐量）的决定性门槛。若可扩展性极差，用户在高峰期转账时将面临高达数十美元的 Gas 手续费，交易将被长时间卡在内存池中无法确认，严重制约了分布式应用的普及与落地。',
          en: 'The threshold for blockchain to achieve mainstream adoption (matching Visa\'s tens of thousands of TPS). Low scalability leads to soaring gas fees and transaction backlogs during peak usage, choking decentralized apps.'
        },
        colorHue: 130 // Lime Green
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['decentralization', 'security'],
        sacrificedVertex: 'scalability',
        name: {
          zh: '去中心化 + 安全性（传统公链 - 以太坊1.0 / 比特币）',
          en: 'Decentralization + Security (Traditional Public Chains)'
        },
        description: {
          zh: '将全部资源倾注在账本防篡改和绝对的去中心化上，但由于每个节点都要对每笔交易进行计算和存储，性能极其低下。',
          en: 'Allocates all resources to trustless ledger security and extreme decentralization, at the cost of slow computational speed.'
        },
        realWorldImpact: {
          zh: '在交易高峰期，网络发生拥堵，一笔简单的转账可能需要几个小时才能确认，且手续费（Gas Fee）暴涨至几十甚至几百美元。',
          en: 'During network congestion, simple transfers can take hours to confirm, and transaction fees (Gas) spike to tens or hundreds of dollars.'
        },
        example: {
          zh: 'Bitcoin, Ethereum 早期主网（在引入 Layer 2 扩容方案之前）。',
          en: 'Bitcoin, Ethereum early Mainnet (prior to Layer 2 rollup scaling solutions).'
        }
      },
      {
        selectedVertices: ['security', 'scalability'],
        sacrificedVertex: 'decentralization',
        name: {
          zh: '安全性 + 可扩展性（联盟链 / 高度中心化的“公链”）',
          en: 'Security + Scalability (Consortium Chains / Centralized Chains)'
        },
        description: {
          zh: '为了实现每秒几万笔交易的超高性能，选择大幅减少参与账本共识的节点数量，仅允许少数几家被信任的节点（超级节点）来确认交易。',
          en: 'Limits the consensus node count to a few trusted, high-performance servers, yielding high speeds while maintaining security.'
        },
        realWorldImpact: {
          zh: '交易速度极快，费用忽略不计，但如果这几个超级节点联合起来或者被政府勒令关停，整个账本就可以被随意篡改或审查，失去了区块链的本质意义。',
          en: 'Transactions are lightning-fast with negligible fees. However, if the validators collude or are forced offline, the ledger loses its core decentralization.'
        },
        example: {
          zh: '各类企业级联盟链、高度依赖少数验证节点的公链（如 EOS 的 DPoS 机制）。',
          en: 'Enterprise consortium chains, DPoS blockchains with few validators (such as early EOS).'
        }
      },
      {
        selectedVertices: ['scalability', 'decentralization'],
        sacrificedVertex: 'security',
        name: {
          zh: '可扩展性 + 去中心化（不安全的实验网络）',
          en: 'Scalability + Decentralization (Unsecure Experimental Networks)'
        },
        description: {
          zh: '在节点极度分散且处理速度飞快的网络中，由于缺乏足够复杂的密码学安全屏障或足够的算力/质押壁垒保护，系统极其脆弱。',
          en: 'In a fast, highly dispersed network, the lack of cryptographical security barriers or staking requirements leaves the system highly vulnerable.'
        },
        realWorldImpact: {
          zh: '黑客可以用极低的经济成本买通网络中51%的轻量级验证节点，从而实施双花攻击、回滚交易，瞬间让整个账本信用破产。',
          en: 'Hackers can easily hijack 51% of lightweight validators at low economic cost, performing double-spending and ruining ledger credit.'
        },
        example: {
          zh: '一些共识机制设计有缺陷、仓促上线的山寨币（Altcoins）实验网络。',
          en: 'Early altcoins with flawed consensus designs or rushed testnets.'
        }
      }
    ]
  },
  {
    id: 'project-management',
    name: {
      zh: '项目管理铁三角',
      en: 'Project Management Iron Triangle'
    },
    category: 'business',
    tagline: {
      zh: '每一个职场人、程序员和产品经理都必须面对的现实骨感',
      en: 'Hard boundaries faced by every professional, programmer, and manager'
    },
    introduction: {
      zh: '在工程与项目管理中，项目的推进受到三股核心力量的相互制约：高质量（好）、低成本（省）、高速度（快）。你永远无法以低廉的价格、闪电般的速度交付一个完美无瑕的工程。',
      en: 'In project management, work is bound by three forces: High Quality (Good), Low Cost (Cheap), and High Speed (Fast). You can never get a perfect product built instantly for pennies.'
    },
    vertices: [
      {
        id: 'quality',
        name: {
          zh: '高质量 (好)',
          en: 'High Quality (Good)'
        },
        description: {
          zh: '交付的项目产出具备极度完善的功能、出类拔萃的设计、近乎零缺陷的系统性能，且用户体验流畅优美，完全超越客户预期。',
          en: 'Delivering an exceptional product with robust architecture, rich features, excellent user interface, and zero defects.'
        },
        details: {
          zh: '这是卓越工程品质和极致匠心的代名词。实现高质量意味着必须进行详尽的前期调研、优雅的代码架构设计、反复多轮的自动化与人工压力测试，容不得半点粗制滥造和偷工减料，需要消耗大量的开发工时和高昂的资深人员成本。',
          en: 'The gold standard of engineering excellence. Achieving high quality requires deep upfront research, strict code reviews, and comprehensive manual and automated testing, demanding significant budget and time.'
        },
        colorHue: 20 // Gold/Amber
      },
      {
        id: 'speed',
        name: {
          zh: '高速度 (快)',
          en: 'High Speed (Fast)'
        },
        description: {
          zh: '项目能以极短的开发周期、超越常规的交付速度迅速上线并推向市场，抢占先机或在紧急截止日期前顺利收尾。',
          en: 'Delivering the project within a highly compressed schedule to quickly capture the market or hit urgent deadlines.'
        },
        details: {
          zh: '时间往往是企业生命线，快人一步上线意味着能占领空白市场风口，快速获取用户反馈并建立护城河。然而，“快”通常需要全员进行高强度的“996闪电战”或缩减不必要的研发环节，容易引发技术债堆积、测试不充分以及架构设计的漏洞。',
          en: 'Time-to-market is a critical business lifesaver, helping capture early adopters and secure market share. But speed often triggers high technical debt, skipped testing, and fragile code architecture.'
        },
        colorHue: 340 // Electric Rose
      },
      {
        id: 'cost',
        name: {
          zh: '低成本 (省)',
          en: 'Low Cost (Cheap)'
        },
        description: {
          zh: '能够以极度精简的人力配置、微薄的资金投入以及最低限度的外包和硬件资源消耗，顺利达成项目的基本开发要求。',
          en: 'Executing the project with minimal human resource allocation, strict budgets, and basic tooling.'
        },
        details: {
          zh: '它是创业团队、精益管理或预算极度受限场景下的硬性红线。控制低成本要求每一笔开支都花在刀刃上，避免一切形式 of 资源浪费。但这通常限制了团队无法雇佣顶尖专家、无法使用昂贵的高性能云服务和工具，极大地束缚了技术方案的广度和质量。',
          en: 'The primary constraint for startups or bootstrap projects. While saving capital, it restricts the team from hiring top-tier experts, using premium cloud services, or using robust pre-made architectures.'
        },
        colorHue: 170 // Cyan Mint
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['quality', 'speed'],
        sacrificedVertex: 'cost',
        name: {
          zh: '高质量 + 高速度（砸钱砸资源 - 昂贵交付）',
          en: 'High Quality + High Speed (Premium & Fast -- Expensive)'
        },
        description: {
          zh: '既要产品精美无暇，又要明天立刻上线。唯一的办法是重金聘请最顶尖的专家团队，全员高强度加班，甚至直接买断成熟方案。',
          en: 'Demanding a perfect product immediately requires hiring top-tier talent, working intensive overtime, and buying off-the-shelf solutions.'
        },
        realWorldImpact: {
          zh: '项目成果极其耀眼，速度惊人，但资金消耗将是天文数字。如果资金断裂，项目会直接暴雷。',
          en: 'The product is brilliant and launches on time, but capital expenditure is astronomical. If cash flows dry up, the project collapses.'
        },
        example: {
          zh: '大型科技巨头为迎合风口而进行的紧急“闪电战”项目（例如早期 ChatGPT 爆发时谷歌的紧急迎战）。',
          en: 'Emergency tech wars by industry giants to counter competitor breakthroughs (e.g., Google\'s rush to counter ChatGPT).'
        }
      },
      {
        selectedVertices: ['quality', 'cost'],
        sacrificedVertex: 'speed',
        name: {
          zh: '高质量 + 低成本（慢工出细活 - 漫长磨练）',
          en: 'High Quality + Low Cost (Premium & Cheap -- Slow)'
        },
        description: {
          zh: '预算极低，但又绝不向质量妥协。那就必须做好打持久战的准备，依靠极少的核心人员，在漫长岁月中一点一点抠细节。',
          en: 'Rejecting low quality while running on a tight budget means preparing for a marathon, refining details slowly over years.'
        },
        realWorldImpact: {
          zh: '成品往往是一部匠心独运的杰作，但研发周期极长，上线时可能会发现市场早已被速度快的对手瓜分殆尽。',
          en: 'The result is often a meticulously crafted masterpiece, but development takes years. By launch, competitors may have already captured the market.'
        },
        example: {
          zh: '独立游戏《空洞骑士》的开发历程（极少的核心开发人员，极低的研发成本，开发数年，终成一代神作）。',
          en: 'The development of the indie game "Hollow Knight" (few developers, low budget, long years of dedication, yielding a masterpiece).'
        }
      },
      {
        selectedVertices: ['speed', 'cost'],
        sacrificedVertex: 'quality',
        name: {
          zh: '高速度 + 低成本（快速做垃圾 - 粗制滥造）',
          en: 'High Speed + Low Cost (Fast & Cheap -- Fragile)'
        },
        description: {
          zh: '预算紧巴巴，要求下周必须上线。在既没钱又没时间的情况下，只能大量砍掉功能，不做任何测试，用现成的开源模版拼凑出一个极其脆弱的半成品。',
          en: 'A shoestring budget with a deadline next week forces cutting features, bypassing tests, and patching a fragile prototype.'
        },
        realWorldImpact: {
          zh: '项目以闪电战形式抢占了滩头，但产品漏洞百出、漏洞横行、UI简陋，极易在用户量激增时瞬间崩溃，沦为业界的笑柄。',
          en: 'Launches fast but is plagued by critical bugs, unstable systems, and crude designs, risking user churn and public embarrassment.'
        },
        example: {
          zh: '市面上大量粗制滥造的换皮手游、劣质快消网页，或者某些为应付汇报仓促搭建的汇报演示系统。',
          en: 'Countless low-grade cloned mobile games, hasty minimum-viable-product pitches, or basic proof-of-concepts.'
        }
      }
    ]
  },
  {
    id: 'student-life',
    name: {
      zh: '大学生不可能三角',
      en: 'Student Life Trilemma'
    },
    category: 'life',
    tagline: {
      zh: '象牙塔中流传最广的终极灵魂拷问',
      en: 'The ultimate existential soul-searching in the ivory tower'
    },
    introduction: {
      zh: '生动且幽默地反映了当代高校学子的真实生存现状。在繁重的学业要求、身体健康保障以及不可或缺的社交情感需求之间，大学生似乎永远在拆东墙补西墙。',
      en: 'Humorously captures college students\' reality. Juggling heavy academic workloads, physical health, and social/emotional connections forces constant compromises.'
    },
    vertices: [
      {
        id: 'grades',
        name: {
          zh: '优秀学业成绩',
          en: 'Excellent Grades'
        },
        description: {
          zh: '保持名列前茅的绩点（GPA 3.8+），拿到国家级奖学金，手握顶尖学术论文发表，并在各类大厂实习和学科竞赛中斩获大奖。',
          en: 'Maintaining a stellar GPA (3.8+), winning scholarships, publishing research papers, and securing top-tier internships.'
        },
        details: {
          zh: '它是未来保研名校、申请常春藤盟校或叩开顶级名企大门的敲门砖。为了获得卓越成绩，大学生必须将海量的时间与脑力精力倾注在图书馆、自习室、繁重的文献阅读和实验报告中，必须忍受长期高强度的脑力劳动和竞争压力。',
          en: 'The ticket to elite graduate schools or high-paying careers. To excel, students must spend endless hours in libraries, reading papers and coding assignments, enduring heavy academic pressure.'
        },
        colorHue: 210 // Electric Blue
      },
      {
        id: 'sleep',
        name: {
          zh: '充足的睡眠',
          en: 'Enough Sleep'
        },
        description: {
          zh: '每天规律地睡满 8 小时以上的深度睡眠，维持良好的内分泌平衡，身体充满元气，远离脱发、肥胖和黑眼圈等亚健康状态。',
          en: 'Sleeping 8+ hours daily, keeping a stable circadian rhythm, and maintaining vibrant physical and mental health.'
        },
        details: {
          zh: '这是身心健康和长远可持续发展的生物学红线。保持规律的生物钟和充足睡眠能显著提高日常学习的专注力、情绪稳定性以及免疫系统健康。但在课业、期末复习和社交娱乐的多重围剿下，保证睡眠往往成为最先被无情牺牲的那个可怜筹码。',
          en: 'The biological baseline for focus and well-being. Proper sleep prevents burnout and boosts immunity. However, in the face of intense homework, exam cramming, and late-night socializing, sleep is usually the first card sacrificed.'
        },
        colorHue: 120 // Pastel Green
      },
      {
        id: 'social',
        name: {
          zh: '丰富的社交生活',
          en: 'Active Social Life'
        },
        description: {
          zh: '深度融入多姿多彩的校园人际网络，谈一场浪漫的恋爱，参与学生会和各类兴趣社团，结交挚友，并时常通宵唱K、聚餐与说走就走的旅行。',
          en: 'Integrating into campus social networks, dating, joining clubs, and participating in late-night gatherings and trips.'
        },
        details: {
          zh: '它是校园青春记忆中最温润美丽的情感源泉，对于缓解学业压力、建立长久的人脉网络、提升情商及社会适应力至关重要。但维系深厚人际关系和参与频繁的娱乐活动，其背后需要消耗大量的社交精力和极其昂贵的时间成本。',
          en: 'The emotional peak of youth, crucial for mental relief, building lifelong networks, and developing emotional intelligence. Yet, nurturing relationships and joining events consumes massive time and energy.'
        },
        colorHue: 310 // Hot Pink
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['grades', 'sleep'],
        sacrificedVertex: 'social',
        name: {
          zh: '优秀成绩 + 充足睡眠（学霸级苦行僧）',
          en: 'Excellent Grades + Enough Sleep (The Academic Hermit)'
        },
        description: {
          zh: '每天保持极其规律的高效学习，到点就睡。学业精湛，精神饱满，但彻底屏蔽了一切不必要的社交和娱乐。',
          en: 'Highly efficient studying and sleeping on schedule. Academic performance is top-tier and health is stable, but social life is dead.'
        },
        realWorldImpact: {
          zh: '期末成绩名列前茅，头发茂密且身体倍儿棒，但在同学眼中是一个神龙见首不见尾的孤僻“学神”，大学四年连班里人可能都没认全。',
          en: 'Perfect grades and great health, but classmates barely know them, and they graduate with zero network and social activities.'
        },
        example: {
          zh: '专注于自修室-食堂-宿舍三点一线、心无旁骛准备保研或考研的高效率学霸。',
          en: 'The dedicated student who limits daily life strictly to self-study rooms, dining halls, and early bedtime.'
        }
      },
      {
        selectedVertices: ['grades', 'social'],
        sacrificedVertex: 'sleep',
        name: {
          zh: '优秀成绩 + 丰富社交（咖啡因续命狂人）',
          en: 'Excellent Grades + Active Social Life (The Caffeine Hustler)'
        },
        description: {
          zh: '既要成为绩点第一的社交达人，又要参加每一个派对和社团。唯一的解决办法就是压缩睡眠，每天只睡三四个小时。',
          en: 'Hustling to be both a GPA champ and a social star, joining every party and internship by compressing sleep to 3-4 hours daily.'
        },
        realWorldImpact: {
          zh: '在讲台上他是耀眼的学术新星，在酒局上他是控场的社交核心，然而台下他正靠着每天四杯美式咖啡强撑，黑眼圈极深，免疫力暴跌。',
          en: 'Shines on stage and rules the social scene, but survives solely on massive coffee intake, suffering from fatigue and health risks.'
        },
        example: {
          zh: '典型的名校商科“精致利己主义”卷王、或者身兼学生会主席的超级实习达人。',
          en: 'The typical "hyper-caffeinated" business school overachiever or multi-tasking student association president.'
        }
      },
      {
        selectedVertices: ['sleep', 'social'],
        sacrificedVertex: 'grades',
        name: {
          zh: '充足睡眠 + 丰富社交（快乐的低分天使）',
          en: 'Enough Sleep + Active Social Life (The Happy Low-GPA Free-spirit)'
        },
        description: {
          zh: '每天呼呼大睡到中午，下午和朋友吃喝玩乐，晚上通宵打游戏或者夜宵狂欢。过得极其充实而快乐，代价是彻底放弃了学业绩点。',
          en: 'Sleeping in till noon, hanging out with friends, partying till dawn, enjoying university life while completely abandoning academic pressure.'
        },
        realWorldImpact: {
          zh: '拥有了最完美、最浪漫的无悔青春记忆，但到了期末面对堆积如山的专业课，只能默默祈求老师给一个“60分万岁”的及格低分。',
          en: 'Cherishes beautiful, stress-free campus memories, but faces GPA crisis and must beg professors for a passing grade of 60 at finals.'
        },
        example: {
          zh: '贯彻"大学不挂科，青春不完整"、及时行乐的佛系乐天派学生。',
          en: 'The carefree, easygoing student prioritizing life experiences and mental relaxation over competitive academic tracks.'
        }
      }
    ]
  },
  {
    id: 'energy-trilemma',
    name: {
      zh: '能源不可能三角',
      en: 'Energy Trilemma'
    },
    category: 'economics',
    tagline: {
      zh: '世界能源理事会提出的全球能源可持续发展核心难题',
      en: 'The core global sustainability challenge identified by the World Energy Council'
    },
    introduction: {
      zh: '由世界能源理事会（World Energy Council）系统性地提出。在全球能源政策的制定过程中，任何国家都无法同时完美实现能源安全、能源公平和环境可持续三个目标。三个维度之间存在着天然的张力与抵消关系，各国必须根据自身的资源禀赋与发展阶段做出权衡取舍。',
      en: 'Systematically proposed by the World Energy Council. No nation can simultaneously achieve energy security, energy equity, and environmental sustainability. There is inherent tension among these three dimensions, forcing each country to make trade-offs based on its resource endowment and development stage.'
    },
    vertices: [
      {
        id: 'energy-security',
        name: {
          zh: '能源安全',
          en: 'Energy Security'
        },
        description: {
          zh: '保障国家能源供应体系具备抵御外部冲击和中断的能力，确保能源的连续、可靠供给，包括供应来源多元化和基础设施韧性。',
          en: 'Protecting the national energy supply system against external shocks and disruptions, ensuring continuous and reliable energy delivery with diversified sources and resilient infrastructure.'
        },
        details: {
          zh: '能源安全是国民经济的生命线。它要求国家建立足以应对地缘政治危机、自然灾害和供应链中断的原油战略储备、天然气储气库以及多元化的进口管道和海运路线。为了实现独立自主，国家可能投资建设成本高昂的冗余基础设施（如连接多个地区的输电网），或者支持本土化石能源（如页岩油、煤制油）的高污染开发。',
          en: 'The lifeline of a national economy. It demands strategic petroleum reserves, LNG terminals, diverse pipeline routes, and redundant power grids to withstand geopolitical shocks and natural disasters. Achieving this may require investments in costly surplus infrastructure or supporting high-pollution domestic fossil fuel extraction.'
        },
        colorHue: 30 // Amber / Gold
      },
      {
        id: 'energy-equity',
        name: {
          zh: '能源公平',
          en: 'Energy Equity'
        },
        description: {
          zh: '确保所有国民和社会各阶层都能以可负担的价格获取充足的现代能源服务，涵盖电力、供暖和清洁烹饪燃料。',
          en: 'Ensuring all citizens and social classes can access adequate modern energy services—electricity, heating, and clean cooking—at affordable prices.'
        },
        details: {
          zh: '这是关乎社会公平和消除能源贫困的核心诉求。在全球范围内，仍有数亿人口缺乏基本的电力供应或依赖传统生物燃料（如木柴、牛粪）取暖做饭。降低电价和燃油补贴虽然能够减轻民生负担，但会扭曲市场价格信号，抑制对清洁能源和节能技术的投资，并极大地加重政府财政包袱。',
          en: 'A core demand for social justice and eradicating energy poverty. Globally, hundreds of millions lack electricity or rely on traditional biomass. Subsidizing fuel prices alleviates household burdens but distorts market signals, suppresses investment in renewables and efficiency, and weighs heavily on government budgets.'
        },
        colorHue: 175 // Teal / Cyan
      },
      {
        id: 'environment',
        name: {
          zh: '环境可持续',
          en: 'Environmental Sustainability'
        },
        description: {
          zh: '在满足当前能源需求的同时，最大限度降低能源生产和消费活动对生态系统、气候环境和生物多样性的负面影响。',
          en: 'Meeting present energy needs while minimizing negative impacts on ecosystems, climate, and biodiversity from energy production and consumption.'
        },
        details: {
          zh: '这是应对全球气候变暖与生态危机的时代使命。要求各国大幅削减化石能源的消费比例，大力推广风能、太阳能、核能和水力等低碳甚至零排放能源结构。然而，清洁能源转型需要大规模的前期资本投入（新建电厂、改造电网），将对电价和能源供应稳定性带来短期冲击，同时在储能技术尚未完全成熟的条件下，过度依赖间歇性可再生能源可能引发供电保障风险。',
          en: 'The defining mission against climate change. It demands drastic cuts in fossil fuel consumption and a massive shift to wind, solar, nuclear, and hydro. However, the transition requires enormous upfront capital, raising electricity prices and potentially destabilizing grid reliability where storage technology remains immature.'
        },
        colorHue: 125 // Leaf Green
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['energy-security', 'energy-equity'],
        sacrificedVertex: 'environment',
        name: {
          zh: '能源安全 + 能源公平（煤炭工业化之路）',
          en: 'Energy Security + Energy Equity (Industrialization via Coal)'
        },
        description: {
          zh: '优先保障能源的稳定供应和全民廉价使用，不惜大规模利用本地煤炭、石油等高碳化石能源。',
          en: 'Prioritizes stable supply and low-cost universal energy access by heavily relying on local coal and oil.'
        },
        realWorldImpact: {
          zh: '国民享有低电价和强劲的工业产能增长，但代价是严重的空气污染、雾霾频发以及碳排放量的急剧飙升，成为全球气候治理的阻力。',
          en: 'Citizens enjoy low electricity prices and rapid industrial growth, but at the cost of severe air pollution, smog, and soaring carbon emissions.'
        },
        example: {
          zh: '印度和中国在工业化初期的能源路线：依赖大量廉价的煤炭火电支撑经济高速增长和农村电气化。',
          en: 'India and China during early industrialization: relying on cheap coal-fired power to fuel rapid economic growth and rural electrification.'
        }
      },
      {
        selectedVertices: ['energy-equity', 'environment'],
        sacrificedVertex: 'energy-security',
        name: {
          zh: '能源公平 + 环境可持续（激进的绿色转型）',
          en: 'Energy Equity + Environmental Sustainability (Radical Green Transition)'
        },
        description: {
          zh: '大力补贴清洁能源和碳减排，并保障弱势群体的能源消费可负担，但不得不接受能源供应在极端天气下的不稳定性。',
          en: 'Heavily subsidizes clean energy and carbon reduction while protecting vulnerable households, but must accept supply instability during extreme weather.'
        },
        realWorldImpact: {
          zh: '碳排放显著下降，环保成效突出，但电网对天气的依赖度极高，一旦遭遇连续阴天或无风天气，将面临大面积停电和工业限产。',
          en: 'Carbon emissions drop significantly and air quality improves, but extreme weather can cause blackouts and industrial shutdowns.'
        },
        example: {
          zh: '德国能源转型（Energiewende）：大力发展风电和光伏，提供慷慨的居民电价补贴，但遭遇"黑暗无风期"时不得不重启煤电或从邻国高价进口电力。',
          en: 'Germany\'s Energiewende: massive wind and solar deployment with generous subsidies, but facing "Dunkelflaute" (dark windless periods) requiring coal plant restarts or expensive power imports.'
        }
      },
      {
        selectedVertices: ['energy-security', 'environment'],
        sacrificedVertex: 'energy-equity',
        name: {
          zh: '能源安全 + 环境可持续（昂贵清洁能源）',
          en: 'Energy Security + Environmental Sustainability (Expensive Clean Energy)'
        },
        description: {
          zh: '坚持清洁能源路线同时保障供应稳定，但清洁能源的高昂前期投入和运维成本将推高终端电价，加重民众经济负担。',
          en: 'Pursues clean energy while ensuring supply stability, but high upfront and maintenance costs for green tech drive up retail electricity prices.'
        },
        realWorldImpact: {
          zh: '电网清洁度大幅上升，能源自给率提高，但电费账单持续攀升，低收入家庭在"能源贫困"中挣扎，面临冬天交不起取暖费的困境。',
          en: 'Cleaner grid and higher energy independence, but escalating bills push low-income households into energy poverty.'
        },
        example: {
          zh: '日本福岛核事故后全面关停核电站，转为依赖昂贵的液化天然气（LNG）进口和太阳能补贴，电价大幅上涨，居民生活成本飙升。',
          en: 'Post-Fukushima Japan: shutting down nuclear plants, shifting to expensive LNG imports and solar subsidies, causing soaring electricity prices.'
        }
      }
    ]
  },
  {
    id: 'food-trilemma',
    name: {
      zh: '美食不可能三角',
      en: 'Food Trilemma'
    },
    category: 'life',
    tagline: {
      zh: '每一个吃货每天都在面对的灵魂抉择',
      en: 'The daily soul-searching every food lover faces'
    },
    introduction: {
      zh: '在美食的选择面前，人类永远面临着这个残酷的铁三角约束：一道完美的菜肴几乎不可能同时满足美味可口、健康营养和实惠便捷三个条件。你最多只能追求其二，而必须心甘情愿地接受第三个维度的不尽人意。',
      en: 'In the realm of food, humanity faces this brutal constraint: a perfect dish can almost never be simultaneously delicious, healthy, and affordable. You can have at most two, and must willingly accept the shortfall in the third dimension.'
    },
    vertices: [
      {
        id: 'delicious',
        name: {
          zh: '美味可口',
          en: 'Delicious'
        },
        description: {
          zh: '食物口感丰富、风味浓郁、香气诱人，能最大化激活味蕾的愉悦体验，带来满足感和精神慰藉。',
          en: 'Rich flavors, enticing aromas, and satisfying textures that maximize taste pleasure and emotional comfort.'
        },
        details: {
          zh: '美味是人类对食物最原始、最本能的追求。为了达到极致风味，往往需要大量使用高糖、高盐、高脂肪（如黄油、猪油、芝士）的食材，以及复杂的烹饪工艺（油炸、长时间炖煮、炭烤）。这些过程不仅耗费宝贵的时间和烹饪精力，也与现代健康饮食的科学建议相冲突。',
          en: 'The most instinctive human pursuit of food. Achieving extreme flavor requires generous use of sugar, salt, and fat (butter, lard, cheese) and complex cooking techniques like deep-frying, slow-braising, and char-grilling—all time-consuming and at odds with health advice.'
        },
        colorHue: 10 // Tomato Red
      },
      {
        id: 'healthy',
        name: {
          zh: '健康营养',
          en: 'Healthy & Nutritious'
        },
        description: {
          zh: '食材天然新鲜、营养均衡、低脂低糖低盐，富含膳食纤维、维生素和优质蛋白，有助于维持体态和预防慢性疾病。',
          en: 'Fresh natural ingredients with balanced nutrition, low in fat, sugar, and salt, rich in fiber, vitamins, and lean protein.'
        },
        details: {
          zh: '随着现代人对健康管理、减脂塑形和养生抗衰的高度重视，饮食健康化已经成为不可逆的趋势。健康食品通常要求蔬菜占大头、采用蒸煮而非油炸、使用天然低热量的调味代替工业化酱料。但这样的约束往往会牺牲食物的浓郁口味和爽感，让人觉得"食之无味"。新鲜有机食材的高昂价格也使得健康饮食成为一种奢侈品。',
          en: 'With society\'s growing focus on wellness and weight management, healthy eating has become paramount. It demands more vegetables, steaming over frying, and natural low-calorie seasoning. However, these constraints often sacrifice rich taste, and premium organic ingredients come at a high price.'
        },
        colorHue: 130 // Fresh Green
      },
      {
        id: 'affordable',
        name: {
          zh: '实惠便捷',
          en: 'Affordable & Convenient'
        },
        description: {
          zh: '价格低廉、购买方便、制作或获取流程简单快捷，适合快节奏的日常生活和大规模商业复制。',
          en: 'Low price, easy access, and simple preparation or ordering, suitable for fast-paced daily life and mass production.'
        },
        details: {
          zh: '在城市化、快节奏消费时代，"方便"和"便宜"是食品工业的座右铭。工业化流水线生产、高度标准化的加工食品能够极大地降低成本并保证稳定的口感。路边快餐、泡面、冷冻速食和连锁外卖能够在几分钟内解决一顿饭。然而为了降低成本并实现标准化，这些食品大量依赖廉价填充物和各种工业化添加剂以模拟风味和延长保质期，营养价值极低，口感也不如现做的餐食。',
          en: 'In the age of urbanization and fast-paced consumption, convenience and low cost reign supreme. Industrial production lines and standardized processed foods drastically lower costs. Instant noodles, frozen meals, and fast food chains satisfy hunger in minutes—but rely on cheap fillers and industrial additives, offering low nutritional value.'
        },
        colorHue: 220 // Steel Blue
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['delicious', 'healthy'],
        sacrificedVertex: 'affordable',
        name: {
          zh: '美味 + 健康（昂贵的精致生活）',
          en: 'Delicious + Healthy (Premium Lifestyle)'
        },
        description: {
          zh: '既要色香味俱全，又要低脂低卡营养均衡。唯一的出路是选用顶级有机食材、进口橄榄油和高级香料，并花费大量时间精心烹饪。',
          en: 'Demanding both rich flavor and nutritional balance requires premium organic ingredients, imported olive oil, and hours of careful cooking.'
        },
        realWorldImpact: {
          zh: '食物精美无比，吃一口都是享受，且完全不用担心发胖。但一顿饭的材料成本和时间成本高得惊人，普通人难以承受。',
          en: 'Every bite is a joy without health guilt, but the ingredient and time costs are prohibitive for the average person.'
        },
        example: {
          zh: '米其林餐厅的高级轻食料理、日式怀石料理、使用有机食材的家庭慢食。',
          en: 'Michelin-star fine dining kaiseki, farm-to-table organic slow food, premium health-conscious restaurants.'
        }
      },
      {
        selectedVertices: ['healthy', 'affordable'],
        sacrificedVertex: 'delicious',
        name: {
          zh: '健康 + 实惠（自律的苦行餐）',
          en: 'Healthy + Affordable (Ascetic Meal)'
        },
        description: {
          zh: '严格控制预算并追求营养最大化，唯一的办法就是放弃口感，选择最基础、最朴素的天然食材。',
          en: 'Sticking to a strict budget while maximizing nutrition means sacrificing flavor for basic, unseasoned natural ingredients.'
        },
        realWorldImpact: {
          zh: '吃出了马甲线和充沛的体能，钱包也毫无压力，但每天的餐食寡淡如水，味同嚼蜡，缺乏美食带来的精神愉悦。',
          en: 'Achieves a fit body, high energy, and low expenses—but every meal is bland and joyless, lacking the emotional comfort of good food.'
        },
        example: {
          zh: '健身达人的水煮鸡胸肉+西兰花+糙米饭套餐；学生党的燕麦片+牛奶+香蕉极简早餐。',
          en: 'A fitness devotee\'s boiled chicken breast + broccoli + brown rice; a student\'s minimal oatmeal + milk + banana breakfast.'
        }
      },
      {
        selectedVertices: ['affordable', 'delicious'],
        sacrificedVertex: 'healthy',
        name: {
          zh: '实惠 + 美味（罪恶的快乐——不健康快餐）',
          en: 'Affordable + Delicious (Guilty Pleasure — Unhealthy Fast Food)'
        },
        description: {
          zh: '用低廉的价格做出让人欲罢不能的口味。这意味着大量使用精制碳水、饱和脂肪、糖和工业添加剂。',
          en: 'Creating addictive flavors at rock-bottom prices means heavy use of refined carbs, saturated fats, sugar, and industrial additives.'
        },
        realWorldImpact: {
          zh: '用几块钱就能获得满满的幸福感，高油高糖的搭配让大脑疯狂分泌多巴胺。但长期摄入导致肥胖、高血脂、糖尿病和心血管疾病的高发。',
          en: 'Dopamine-rush happiness for pocket change—but long-term consumption leads to obesity, high cholesterol, diabetes, and heart disease.'
        },
        example: {
          zh: '快餐炸鸡汉堡、方便面、工业化零食、奶茶、外卖烤串。',
          en: 'Fast food fried chicken and burgers, instant noodles, packaged snacks, bubble tea, takeout skewers.'
        }
      }
    ]
  },
  {
    id: 'privacy-trilemma',
    name: {
      zh: '隐私不可能三角',
      en: 'Privacy Trilemma'
    },
    category: 'technology',
    tagline: {
      zh: '隐私保护技术中安全、合规与效率的艰难博弈',
      en: 'The hard trade-off between security, compliance, and efficiency in privacy technology'
    },
    introduction: {
      zh: '在密码学与隐私保护领域（尤其是区块链隐私币和通用隐私计算中），存在一个被广泛讨论的三角形困境：任何隐私保护系统都无法同时完美满足隐私性、可审计性和可扩展性三个维度的极致要求。这构成了现代数字隐私工程设计的核心制度与技术约束。',
      en: 'In cryptography and privacy-preserving systems (especially blockchain privacy coins and general-purpose secure computation), there is a widely-discussed trilemma: no system can simultaneously achieve perfect privacy, auditability, and scalability. This forms the core design constraint of modern digital privacy engineering.'
    },
    vertices: [
      {
        id: 'privacy',
        name: {
          zh: '隐私性',
          en: 'Privacy'
        },
        description: {
          zh: '保护交易细节、用户身份和智能合约数据的机密性，确保未经授权的第三方无法从链上数据中获取可识别个人或敏感商业信息。',
          en: 'Protects transaction details, user identities, and smart contract data from unauthorized parties.'
        },
        details: {
          zh: '隐私性赋予了用户对自身数据的终极控制权，使其免受大数据监控、标记和针对性操纵。通过零知识证明、环签名、同态加密等先进密码学手段，隐私系统能够做到在不披露交易金额和参与者身份的前提下完成价值流转。然而，这些复杂的密码学构造计算开销极大，会显著拖慢系统的处理速度和增加交易成本。',
          en: 'Privacy grants users ultimate control over their data, shielding them from surveillance and manipulation. Advanced cryptography like zero-knowledge proofs, ring signatures, and homomorphic encryption enables value transfer without revealing amounts or identities—but at tremendous computational cost.'
        },
        colorHue: 265 // Royal Violet
      },
      {
        id: 'auditability',
        name: {
          zh: '可审计性',
          en: 'Auditability'
        },
        description: {
          zh: '为监管机构、审计师或特定验证者提供合规审查的能力，平衡隐私保护与反洗钱（AML）、反恐融资（CFT）等法律要求。',
          en: 'Provides regulatory or audit access for compliance oversight, balancing privacy with AML/CFT legal requirements.'
        },
        details: {
          zh: '在真实世界中，完全匿名的金融系统无法逃避洗钱、勒索软件和非法交易的滥用。可审计性要求系统具备可控的透明度——允许授权方在特定条件下（如法院令）查看交易流向。但引入"后门"或"监管密钥"机制将在密码学层面打开攻击面和信任假设，可能会被滥用以大规模破坏所有用户的隐私保障。',
          en: 'Fully anonymous financial systems cannot escape abuse for money laundering and ransomware. Auditability demands controlled transparency—allowing authorized parties to trace flows under specific conditions. But introducing backdoors or regulatory keys creates attack surfaces and trust assumptions that could be abused.'
        },
        colorHue: 45 // Amber / Verification Gold
      },
      {
        id: 'scalability',
        name: {
          zh: '可扩展性',
          en: 'Scalability'
        },
        description: {
          zh: '系统在用户数量、交易频率和数据量大幅增长时仍能保持低延迟、高吞吐量和可接受的运行成本。',
          en: 'The system maintains low latency, high throughput, and acceptable costs as the number of users, transactions, and data volume grows.'
        },
        details: {
          zh: '隐私系统如果想走向大规模主流应用（如日常支付、企业级隐私计算），就必须具备媲美 Visa 或传统云计算的性能指标。但是，隐私保护所需的额外密码学轮次和证明生成时间产生了巨大的计算和存储开销。在隐私保护和性能之间做出工程取舍，是阻碍隐私技术普及的最大技术瓶颈。',
          en: 'To achieve mainstream adoption (daily payments, enterprise secure computation), privacy systems need Visa-like performance. But the extra cryptographic rounds and proof generation create massive computational overhead, presenting the biggest engineering barrier to privacy tech adoption.'
        },
        colorHue: 140 // Emerald
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['privacy', 'auditability'],
        sacrificedVertex: 'scalability',
        name: {
          zh: '隐私性 + 可审计性（以性能换合规）',
          en: 'Privacy + Auditability (Compliance at the Cost of Performance)'
        },
        description: {
          zh: '系统在保护用户交易隐私的同时为监管机构保留审计通道，但复杂的证明系统和加密验证流程严重拖慢交易速度。',
          en: 'Protects user privacy while providing regulatory audit channels, but complex proof systems dramatically slow transaction processing.'
        },
        realWorldImpact: {
          zh: '每笔交易都需要生成大量的零知识证明并经过额外的审计验证电路，导致用户需要等待较长时间才能完成转账，且网络拥堵时手续费高昂。',
          en: 'Each transaction generates large cryptographic proofs with audit circuits, causing long wait times and high fees during network congestion.'
        },
        example: {
          zh: 'Zcash 的"选择性透明"（Selective Disclosure）模式——用户可以选择向审计方披露交易细节，但完整的零知识证明生成极慢，严重限制了TPS。',
          en: 'Zcash\'s Selective Disclosure mode—users can reveal transaction details to auditors, but full ZK proof generation is extremely slow, limiting TPS.'
        }
      },
      {
        selectedVertices: ['auditability', 'scalability'],
        sacrificedVertex: 'privacy',
        name: {
          zh: '可审计性 + 可扩展性（透明高效的无隐私系统）',
          en: 'Auditability + Scalability (Transparent & Efficient, No Privacy)'
        },
        description: {
          zh: '完全公开透明的账本，所有交易数据一目了然，配合简单的哈希链即可获得极高的吞吐量，但用户的隐私完全暴露。',
          en: 'A fully transparent ledger with all transaction data publicly visible, achieving high throughput via simple hash chains—but zero privacy for users.'
        },
        realWorldImpact: {
          zh: '交易毫秒级确认，链上数据全面可查，监管机构可以实时监控所有资金的流动。然而任何人的收入、消费习惯和财富余额都在阳光之下，毫无遮拦。',
          en: 'Millisecond confirmations and full chain data visibility regulators can monitor all fund flows in real time. But everyone\'s income, spending habits, and net worth are fully exposed.'
        },
        example: {
          zh: '比特币和以太坊的公开透明模型——交易吞吐量适中，全节点验证简单，链上浏览器可供所有人查看每一笔转账的来龙去脉。',
          en: 'Bitcoin and Ethereum\'s transparent model—moderate throughput, simple full-node verification, and block explorers showing every transaction\'s source and destination.'
        }
      },
      {
        selectedVertices: ['scalability', 'privacy'],
        sacrificedVertex: 'auditability',
        name: {
          zh: '可扩展性 + 隐私性（抗监管的高速匿名网络）',
          en: 'Scalability + Privacy (Anti-Regulatory High-Speed Anonymity)'
        },
        description: {
          zh: '通过轻量级的密码学方案实现极快的匿名交易处理，但完全缺少合规审计接口，成为监管真空地带。',
          en: 'Achieves fast anonymous transactions via lightweight cryptography but completely lacks compliance interfaces, creating a regulatory black hole.'
        },
        realWorldImpact: {
          zh: '用户享受极速、低成本的匿名转账体验，但无法满足金融机构的反洗钱合规要求。一旦被用于非法活动，整个网络面临被交易所下架和各国政府封杀的系统性风险。',
          en: 'Users enjoy lightning-fast, low-cost anonymous transfers, but the system cannot meet AML compliance, risking exchange delistings and government bans.'
        },
        example: {
          zh: 'Monero（门罗币）——使用环签名和保密交易实现高度匿名性，交易效率较高，但缺乏可审计性，在许多国家的合规审查中面临重大障碍。',
          en: 'Monero—uses ring signatures and confidential transactions for strong anonymity at decent speeds, but lacks auditability and faces severe regulatory obstacles in many countries.'
        }
      }
    ]
  },
  {
    id: 'healthcare-trilemma',
    name: {
      zh: '医疗不可能三角',
      en: 'Healthcare Trilemma'
    },
    category: 'politics',
    tagline: {
      zh: '全球各国医疗体系改革绕不开的终极政策困境',
      en: 'The ultimate policy dilemma facing every nation\'s healthcare system'
    },
    introduction: {
      zh: '在任何现代国家的医疗政策设计中，始终存在一个顽固的三角约束：医疗服务的优质性、覆盖的全面性（全民可及）和成本的低廉性不可同时兼得。任何一个国家的医疗体制改革，本质上都是在这三个角之间选择牺牲哪一个。',
      en: 'In every modern nation\'s healthcare policy, there is a persistent trilemma: high quality, universal access, and low cost cannot be achieved simultaneously. Any healthcare reform is essentially a choice of which vertex to sacrifice.'
    },
    vertices: [
      {
        id: 'quality',
        name: {
          zh: '高质量医疗',
          en: 'High Quality'
        },
        description: {
          zh: '拥有世界顶级的医疗技术、高水平的专科医生、先进的诊疗设备以及良好的治疗效果和患者体验。',
          en: 'Access to world-class medical technology, highly trained specialists, advanced diagnostic equipment, and excellent patient outcomes.'
        },
        details: {
          zh: '医疗质量意味着最好的救治效果：更低的误诊率、更高的癌症五年生存率、更尖端的微创手术和最新的特效药物。但追求高精尖的医疗服务需要持续投入巨额研发资金、采购昂贵的设备（达芬奇手术机器人、PET-CT等）、并提供有竞争力的薪酬以吸引最优秀的医学人才留在临床一线而非流向私立机构。',
          en: 'Quality means the best outcomes: lower misdiagnosis rates, higher survival rates, cutting-edge surgeries, and novel drugs. But achieving this demands massive R&D investment, expensive equipment (Da Vinci robots, PET-CT), and competitive salaries to retain top talent in clinical practice.'
        },
        colorHue: 210 // Medical Blue
      },
      {
        id: 'access',
        name: {
          zh: '全民覆盖',
          en: 'Universal Access'
        },
        description: {
          zh: '确保每一位公民无论其收入水平、地理位置、年龄或就业状况，都能平等地获得必要的医疗服务。',
          en: 'Ensuring every citizen can obtain necessary medical services regardless of income, location, age, or employment status.'
        },
        details: {
          zh: '全民健康覆盖是世界卫生组织（WHO）倡导的核心目标。它代表着一个社会的文明底线——不会有人因为付不起医药费而在病痛中等死，或者因一次大病而全家陷入赤贫。但全覆盖意味着将全体国民都纳入保障网络，大幅扩大了受保人群基数，不可避免地会带来巨量的公共财政支出增长。偏远地区的基层医疗网络建设也是一笔天文数字。',
          en: 'Universal Health Coverage (UHC) is WHO\'s core mission. It represents a civilization\'s baseline—no one dies from treatable illness due to cost. But covering every citizen massively expands the insured pool and public spending, with astronomical costs for rural infrastructure.'
        },
        colorHue: 130 // Public Green
      },
      {
        id: 'low-cost',
        name: {
          zh: '低成本',
          en: 'Low Cost'
        },
        description: {
          zh: '将国家医疗总支出控制在可持续的财政范围内，降低个人自费比例，避免医疗通胀速度超过经济增长。',
          en: 'Keeping national health expenditure within sustainable fiscal limits, reducing out-of-pocket costs, and preventing medical inflation from outpacing economic growth.'
        },
        details: {
          zh: '医疗费用是全球各国政府的头号财政难题。控制了医疗成本，意味着能把更多的预算投入到教育、国防、基建等同样重要的领域，也能避免民众因病致贫。然而，控制成本意味着必须限制高价药品和耗材的采购、设定医生诊疗费用的上限、减少不必要的检查和住院天数。这些措施不可避免地会引起医疗从业者的强烈抵制，并可能以牺牲服务质量或就医可及性为代价。',
          en: 'Healthcare spending is the #1 fiscal challenge for governments worldwide. Controlling costs frees budget for education, defense, and infrastructure while preventing medical poverty. But it means capping drug prices, limiting reimbursements, and restricting procedures—triggering pushback from providers and potentially lowering quality or access.'
        },
        colorHue: 40 // Cost Control Amber
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['quality', 'access'],
        sacrificedVertex: 'low-cost',
        name: {
          zh: '高质量 + 全民覆盖（高成本医疗模式）',
          en: 'High Quality + Universal Access (High-Cost Model)'
        },
        description: {
          zh: '追求顶级医疗服务惠及每一位公民，但代价是医疗开支的急剧膨胀，成为国家财政的沉重负担。',
          en: 'Pursuing top-tier care for every citizen causes healthcare spending to balloon, weighing heavily on national finances.'
        },
        realWorldImpact: {
          zh: '医疗技术世界领先，人均寿命长，但医疗支出占GDP比重极高，政府债务风险加大，企业社保负担沉重，间接削弱经济竞争力。',
          en: 'World-class outcomes and long life expectancy, but healthcare consumes a huge share of GDP, increasing sovereign debt risk and employer burdens.'
        },
        example: {
          zh: '美国医疗体系：拥有全球最顶尖的医疗技术和药企，Medicare 和 Medicaid 覆盖特定人群，但人均医疗支出高达 1.2 万美元以上，远超其他发达国家。',
          en: 'The US healthcare system: world-class technology and pharmaceuticals with Medicare/Medicaid coverage, but per-capita spending exceeds $12,000—far above any other developed nation.'
        }
      },
      {
        selectedVertices: ['access', 'low-cost'],
        sacrificedVertex: 'quality',
        name: {
          zh: '全民覆盖 + 低成本（普惠式公费医疗）',
          en: 'Universal Access + Low Cost (Public Single-Payer System)'
        },
        description: {
          zh: '通过强大的政府议价能力和严格的预算管控，将医疗开支压到极低水平并覆盖全民，但不得不忍受漫长的排队和有限的选择。',
          en: 'Leveraging government bargaining power and strict budgets to cover everyone cheaply, at the cost of long waiting lists and limited choice.'
        },
        realWorldImpact: {
          zh: '人人看得起病，财政可控，但非紧急手术排队时间可达数月甚至一年，尖端设备和创新药物的可及性严重受限，部分患者被迫跨境或自费寻求高端医疗。',
          en: 'Everyone can afford care and budgets are sustainable. But non-urgent surgery wait times stretch months to a year, access to cutting-edge treatments is limited, and some patients go abroad for care.'
        },
        example: {
          zh: '英国 NHS（国家医疗服务体系）：政府统一税收支付、全面覆盖，但等待名单常年高达数百万人，癌症等重症的及时救治面临严峻挑战。',
          en: 'The UK\'s NHS: tax-funded and universal, but waiting lists historically exceed millions, with serious challenges in timely cancer treatment.'
        }
      },
      {
        selectedVertices: ['quality', 'low-cost'],
        sacrificedVertex: 'access',
        name: {
          zh: '高质量 + 低成本（精英式私人医疗）',
          en: 'High Quality + Low Cost (Elite Private Healthcare)'
        },
        description: {
          zh: '通过市场化竞争和严格的费用控制实现优质且相对低价的医疗服务，但主要服务于具有支付能力的群体，未覆盖全民。',
          en: 'Achieving quality care at competitive prices through market competition, but serving only those who can pay.'
        },
        realWorldImpact: {
          zh: '中高收入人群能快速获得世界级水平的治疗，价格也相对合理，但低收入群体、老年人和慢性病患者被排除在外，面临极大的健康不平等问题。',
          en: 'The wealthy enjoy world-class care at reasonable prices, but low-income groups, the elderly, and chronic patients face severe health inequality and exclusion.'
        },
        example: {
          zh: '新加坡医疗体系：强调个人储蓄账户（Medisave）与市场竞争，兼顾医疗质量和成本控制，但低收入者仍面临较大的自费压力。',
          en: 'Singapore\'s healthcare system: emphasizing personal Medisave accounts and market competition, balancing quality and cost, though low-income groups still face significant out-of-pocket pressure.'
        }
      }
    ]
  },
  {
    id: 'zooko-triangle',
    name: {
      zh: 'Zooko 三角——数字身份不可能三角',
      en: 'Zooko\'s Triangle — Digital Identity Trilemma'
    },
    category: 'technology',
    tagline: {
      zh: '网络身份标识系统设计的基础性约束',
      en: 'The foundational constraint in naming and identity system design'
    },
    introduction: {
      zh: '由 Zcash 创始人 Zooko Wilcox-O\'Hearn 提出，指出在对等网络中的身份标识符（用户名、地址、域名）存在一个三重约束：一个标识符系统最多只能同时满足安全、人类可读和去中心化中的两个属性。这深刻影响了从 DNS 到区块链地址系统的设计演进。',
      en: 'Proposed by Zcash founder Zooko Wilcox-O\'Hearn, it states that identifiers in peer-to-peer networks (usernames, addresses, domain names) can satisfy at most two of three properties: secure, human-meaningful, and decentralized.'
    },
    vertices: [
      {
        id: 'secure',
        name: {
          zh: '安全性',
          en: 'Secure'
        },
        description: {
          zh: '系统中的标识符具有全局唯一性，任何实体都无法伪造或冒用他人的身份，且系统能够抵抗女巫攻击和中间人攻击。',
          en: 'Identifiers are globally unique and cannot be forged or impersonated, with the system resistant to Sybil and man-in-the-middle attacks.'
        },
        details: {
          zh: '安全性是身份系统的生命线——你必须在密码学上确信你正在交互的对象就是它声称的对象。这要求标识符的注册和解析过程经得起密码学验证，且不存在任何中心化实体能够单方面篡改映射关系。然而，实现这种无需信任的安全性的最直接方法就是使用原始的、无意义的密码学公钥哈希，但这对于人类来说几乎无法记忆和使用。',
          en: 'Security is the lifeline of identity—you must be cryptographically certain that the entity you interact with is who they claim to be. The most direct way to achieve trustless security is using raw cryptographic public key hashes, but these are nearly impossible for humans to remember and use.'
        },
        colorHue: 355 // Security Red
      },
      {
        id: 'human-meaningful',
        name: {
          zh: '人类可读',
          en: 'Human-Meaningful'
        },
        description: {
          zh: '标识符是短小、有意义、可记忆的字符串（如 alice、mycompany、example.com），方便人类的日常交流和使用。',
          en: 'Identifiers are short, meaningful, and memorable strings (like alice, mycompany, example.com) for everyday human use.'
        },
        details: {
          zh: '人类可读性是将区块链和加密技术推向主流大众的关键润滑剂。没有人会每天使用一长串十六进制地址来点外卖或转账。像电子邮箱用户名、Twitter 账号或域名这样简短易记的标识符能够极大地降低用户的心理负担。然而，有意义的字符串天然是有价值的且有限（"好名字"总是稀缺资源），这引出了名字囤积、抢注和黑市交易的问题。',
          en: 'Human readability is the key to mainstream adoption. No one uses long hex strings to order food or send payments. Short, memorable names like email usernames or domain names dramatically reduce user friction. However, meaningful strings are naturally scarce and valuable, inviting squatting and black-market trading.'
        },
        colorHue: 45 // Memorable Gold
      },
      {
        id: 'decentralized',
        name: {
          zh: '去中心化',
          en: 'Decentralized'
        },
        description: {
          zh: '标识符的注册、解析和所有权转移不依赖任何单一的中心化权威机构或服务器，由分布式节点网络共同维护。',
          en: 'Registration, resolution, and transfer of identifiers are not controlled by any central authority but maintained by a distributed network.'
        },
        details: {
          zh: '去中心化意味着没有人能够单方面剥夺你的身份、审查你的域名或冻结你的账户。这是 Web3 和抵抗审查的基础。但去中心化的名字系统缺乏中央机构来仲裁争议（如商标纠纷、名字盗用），也容易因缺乏高效的争议解决机制而导致恶意抢注泛滥。同时，分布式的共识记账在效率和用户体验上通常劣于中心化的数据库查询。',
          en: 'Decentralization means no single entity can revoke your identity or freeze your account—the foundation of Web3 and censorship resistance. But without a central authority to resolve disputes (trademark conflicts, name squatting), malicious pre-registration run rampant. Distributed consensus also lags behind centralized databases in query efficiency.'
        },
        colorHue: 270 // Decentralized Violet
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['secure', 'human-meaningful'],
        sacrificedVertex: 'decentralized',
        name: {
          zh: '安全 + 人类可读（中心化域名系统）',
          en: 'Secure + Human-Meaningful (Centralized Naming)'
        },
        description: {
          zh: '能够注册有意义的用户名并确保不会被冒用，但所有解析和所有权都由中心化权威机构控制。',
          en: 'Users register meaningful names that are globally unique and unforgeable, but a central authority controls all resolution and ownership.'
        },
        realWorldImpact: {
          zh: '域名系统稳定可靠、广泛普及，但政府或注册局可以随时没收域名、审查内容或修改 DNS 记录，去中心化精神完全丧失。',
          en: 'Stable, reliable, and universally adopted—but governments and registries can seize domains, censor content, or alter DNS records at will.'
        },
        example: {
          zh: '传统 DNS 系统（域名注册局 + CA 证书颁发机构）、ICANN 管理的 .com/.org 顶级域名系统、以及所有 Web2 平台的用户名体系（如 Twitter @handle、微信 ID）。',
          en: 'Traditional DNS (registries + CA system), ICANN-managed TLDs (.com/.org), and all Web2 platform usernames (Twitter @handle, WeChat ID).'
        }
      },
      {
        selectedVertices: ['human-meaningful', 'decentralized'],
        sacrificedVertex: 'secure',
        name: {
          zh: '人类可读 + 去中心化（自由命名系统）',
          en: 'Human-Meaningful + Decentralized (Free Naming Systems)'
        },
        description: {
          zh: '任何人都可以在无需许可的分布式网络中注册任意可读名字，但没有全局唯一性保障，冒名和抢注泛滥。',
          en: 'Anyone can register any readable name in a permissionless distributed network, but without global uniqueness guarantees, impersonation and squatting run rampant.'
        },
        realWorldImpact: {
          zh: '用户可以自由选择心仪的名字，但无法分辨哪个才是真正的目标实体。恶意用户批量抢注热门名字并高价倒卖，极大地降低了系统的可信度。',
          en: 'Users enjoy free name choice but cannot distinguish genuine identities. Squatters mass-register popular names for resale, eroding system trust.'
        },
        example: {
          zh: '以太坊 ENS 域名（早期抢注疯狂、名人大批被盗用）；Namecoin（早期去中心化 DNS，缺乏安全约束，域名冲突频发）。',
          en: 'Ethereum ENS in early days (rampant name squatting, celebrity name theft); Namecoin (early decentralized DNS lacking security guarantees).'
        }
      },
      {
        selectedVertices: ['decentralized', 'secure'],
        sacrificedVertex: 'human-meaningful',
        name: {
          zh: '去中心化 + 安全（密码学地址）',
          en: 'Decentralized + Secure (Cryptographic Addresses)'
        },
        description: {
          zh: '通过非对称密码学生成全球唯一、无需许可的地址，抗伪造和攻击能力极强，但地址本身是一串毫无语义的乱码。',
          en: 'Globally unique, permissionless addresses via asymmetric cryptography offer extreme security against forgery and attacks, but are meaningless random strings.'
        },
        realWorldImpact: {
          zh: '任何人都能即时生成安全的地址，无需任何第三方。但地址太长无法记忆，用户必须依赖地址簿、二维码或复制粘贴，一旦输错（如漏了一个字符）则资金永久丢失。',
          en: 'Anyone can instantly generate a secure address with no third party. But addresses are too long to remember, requiring address books or QR codes—one mistyped character means permanent loss.'
        },
        example: {
          zh: '比特币地址（1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa）、以太坊地址（0x...格式）、IPFS 内容哈希（CID）。',
          en: 'Bitcoin addresses (1A1z...), Ethereum addresses (0x...), IPFS content hashes (CIDs).'
        }
      }
    ]
  },
  {
    id: 'social-media-trilemma',
    name: {
      zh: '社交媒体不可能三角',
      en: 'Social Media Trilemma'
    },
    category: 'life',
    tagline: {
      zh: '每个社交平台都在内容生态的漩涡中博弈挣扎',
      en: 'The agonizing balancing act every social platform faces'
    },
    introduction: {
      zh: '在现代社交媒体的平台治理中，存在一个制约所有内容生态系统的三角困境：用户互动与增长、信息内容的真实性、以及社区氛围的安全健康。任何一个主流社交平台，都在这三个相互冲突的目标之间精疲力竭地进行着永无终点的动态平衡。',
      en: 'In modern social media governance, a trilemma constrains all content ecosystems: user engagement and growth, content authenticity, and community safety. Every major platform exhaustively struggles with this dynamic, never-ending balancing act.'
    },
    vertices: [
      {
        id: 'engagement',
        name: {
          zh: '高互动与增长',
          en: 'Engagement & Growth'
        },
        description: {
          zh: '算法和产品设计高度优化，最大化用户的使用时长、日活/月活、内容消费频次、点赞转发以及病毒式传播。',
          en: 'Algorithms and product design are optimized to maximize time spent, DAU/MAU, content consumption, likes, shares, and viral spread.'
        },
        details: {
          zh: '互动是社交媒体的生命血液和商业模式的基石。更高的互动意味着更多的广告曝光、更精确的用户画像和更强劲的股价表现。为了最大化互动，推荐算法天然倾向于推送最能激发强烈情绪（愤怒、恐惧、猎奇、争议）的内容，因为这些内容最容易获得点击和转发。然而，这种算法机制恰好也是虚假信息、极端言论和情绪化内容获得最大传播动力的温床。',
          en: 'Engagement is the lifeblood and business model of social media. More engagement means more ad impressions and higher stock prices. Algorithms naturally amplify content that triggers strong emotions (anger, fear, outrage), as it drives the most clicks and shares. However, this is precisely the mechanism that supercharges misinformation and radical content.'
        },
        colorHue: 340 // Virality Pink
      },
      {
        id: 'authenticity',
        name: {
          zh: '信息真实性',
          en: 'Content Authenticity'
        },
        description: {
          zh: '平台上传播的信息经过核实，最大限度地减少虚假新闻、误导性信息、深度伪造和阴谋论的扩散。',
          en: 'Information on the platform is verified to minimize fake news, disinformation, deepfakes, and conspiracy theories.'
        },
        details: {
          zh: '真实性是社交媒体作为公共舆论场的合法性基石。当平台成为谎言和谣言的放大器，它不仅侵蚀了社会信任，还可能酿成现实世界的暴力冲突和公共卫生灾难（例如疫苗谣言导致接种率下降）。然而，建立事实核查机制和标注误导信息需要投入大量的专业人工审核团队或第三方事实核查机构，成本极高。而且，事实核查天然存在用户抵触情绪——没有人喜欢被平台标记为"说谎者"。',
          en: 'Authenticity is the legitimacy foundation of social platforms as public forums. When platforms amplify lies, they erode social trust and can trigger real-world harms (vaccine misinformation). But building fact-checking systems requires massive human review teams and third-party agencies. Fact-checks also provoke user backlash—nobody likes being labeled a liar.'
        },
        colorHue: 220 // Truth Blue
      },
      {
        id: 'safety',
        name: {
          zh: '社区安全',
          en: 'Community Safety'
        },
        description: {
          zh: '平台能够有效打击网络霸凌、仇恨言论、骚扰、极端主义和剥削性内容，营造健康包容的讨论环境。',
          en: 'The platform effectively combats cyberbullying, hate speech, harassment, extremism, and exploitative content to foster a healthy environment.'
        },
        details: {
          zh: '社区安全决定了平台的长期社会可接受性和用户留存。一个充满仇恨和骚扰的平台将赶走主流用户和品牌广告商。然而，安全的另一个侧面是"过度审核"——如果平台为了安全而采取极端严格的自动过滤，又会大规模误伤正常讨论，引发"言论自由"和"审查制度"的巨大争议。垃圾信息的对抗也是一场永不停歇的军备竞赛，需要持续投入巨额的 AI 模型训练和人工审核成本。',
          en: 'Safety determines long-term social acceptability and user retention. A platform rife with hate drives away mainstream users and advertisers. But aggressive automated moderation inevitably catches legitimate speech, triggering censorship controversies. Fighting spam and abuse is a never-ending arms race demanding enormous AI and human moderation investment.'
        },
        colorHue: 100 // Safety Green
      }
    ],
    tradeOffs: [
      {
        selectedVertices: ['engagement', 'authenticity'],
        sacrificedVertex: 'safety',
        name: {
          zh: '高互动 + 真实性（激烈的公开广场）',
          en: 'High Engagement + Authenticity (The Raucous Public Square)'
        },
        description: {
          zh: '鼓励用户自由表达和辩论事实，不加以温和的社区过滤，但激烈的言辞交锋和公开对质极易演变为网络暴力。',
          en: 'Encourages free expression and fact-based debate without soft moderation, but heated confrontations easily escalate into online harassment.'
        },
        realWorldImpact: {
          zh: '平台成为"观点自由市场"，辟谣和辩论非常活跃。但针对公众人物的恶意人身攻击、死亡威胁和网络暴力极为猖獗，平台沦为人肉搜索和网络审判的战场。',
          en: 'The platform becomes a vibrant marketplace of ideas with active fact-checking debate. But harassment, doxxing, and mob justice run rampant, making it a toxic battlefield for public figures.'
        },
        example: {
          zh: 'Twitter（X）在马斯克接管后推行"言论自由优先"路线：社区笔记（Community Notes）对抗虚假信息，但仇恨言论、骚扰和反犹主义内容急剧上升，大量广告商出走。',
          en: 'Twitter/X under Musk\'s "free speech absolutism": Community Notes counter misinformation, but hate speech, harassment, and antisemitic content surged, driving away major advertisers.'
        }
      },
      {
        selectedVertices: ['authenticity', 'safety'],
        sacrificedVertex: 'engagement',
        name: {
          zh: '真实性 + 安全性（谨慎的高墙花园）',
          en: 'Authenticity + Safety (The Walled Garden)'
        },
        description: {
          zh: '平台投入大量人力物力进行内容审核和事实核查，社区文明且理性，但内容变得保守沉闷，自发的讨论热度大幅下降。',
          en: 'Heavy investment in content moderation and fact-checking creates a civil, rational community—but the platform feels sterile and spontaneous discussion declines.'
        },
        realWorldImpact: {
          zh: '虚假信息和仇恨言论得到有效抑制，用户体验文明友好。但用户抱怨"过度敏感"，专业但无趣的内容无法获得推荐流量，创作者失去表达热情转向其他平台。',
          en: 'Misinformation and hate speech are effectively contained. User experience is civil. But complaints of over-moderation grow; niche creative or edgy content is suppressed, driving creators to rivals.'
        },
        example: {
          zh: 'Pinterest 和 LinkedIn：内容经过高度审核，社区文明度极高，虚假信息极少，但完全不具备病毒式传播能力和大众娱乐性，用户互动频次远低于 TikTok。',
          en: 'Pinterest and LinkedIn: highly moderated, civil communities with minimal misinformation. But they lack viral dynamics and mass entertainment appeal, with far lower engagement than TikTok.'
        }
      },
      {
        selectedVertices: ['engagement', 'safety'],
        sacrificedVertex: 'authenticity',
        name: {
          zh: '高互动 + 安全性（温和的过滤气泡）',
          en: 'Engagement + Safety (The Cozy Filter Bubble)'
        },
        description: {
          zh: '算法推荐令人愉快、内容安全、无攻击性的热门内容，创造舒适的用户体验，但以牺牲信息多样性和真实性为代价。',
          en: 'Algorithms recommend pleasant, safe, inoffensive trending content for a comfortable experience—at the cost of information diversity and truth.'
        },
        realWorldImpact: {
          zh: '用户在平台上感到愉快、放松、安全，社区氛围友善。但推荐系统将用户困在同质化的"信息茧房"和"过滤气泡"中，算法为了"温和"而回避争议性真相，大量虚假信息和谣言以伪科学、养生秘方等形式在私密群组中交叉传播而不被干预。',
          en: 'Users feel happy and safe, enjoying a friendly atmosphere. But recommendation algorithms trap them in homogeneous filter bubbles, sacrificing exposure to diverse viewpoints. Misinformation spreads in private groups under the radar.'
        },
        example: {
          zh: '微信朋友圈和微信群的"私域"流量模式：封闭的安全空间内互动活跃，但大量中老年健康谣言、伪科学文章和阴谋论在群组内不受干预地疯传。',
          en: 'WeChat Moments and group chats: active engagement in safe, closed spaces, but health rumors, pseudoscience, and conspiracy theories spread unchecked among older demographics.'
        }
      }
    ]
  }
];
