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
  category: 'economics' | 'politics' | 'technology' | 'life';
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
    category: 'life',
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
          zh: '贯彻“大学不挂科，青春不完整”、及时行乐的佛系乐天派学生。',
          en: 'The carefree, easygoing student prioritizing life experiences and mental relaxation over competitive academic tracks.'
        }
      }
    ]
  }
];
