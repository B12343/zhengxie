// ===== 委员工作室数据 =====
const studiosData = [
    {id:1, name:"政协湖滨小组委员工作室", leader:"查靖", address:"上城区羊血弄10号", type:"街道"},
    {id:2, name:"政协清波小组委员工作室", leader:"徐洁", address:"上城区清波街道蔡官巷35号三楼", type:"街道"},
    {id:3, name:"政协小营小组委员工作室", leader:"冷晓辉", address:"上城区建国南路98号", type:"街道"},
    {id:4, name:"政协望江小组委员工作室", leader:"毛静波", address:"上城区翡翠海岸1幢6号", type:"街道"},
    {id:5, name:"政协南星小组委员工作室", leader:"游广敏", address:"上城区目术塘创意园2号楼7楼", type:"街道"},
    {id:6, name:"紫阳街道\"三一\"委员工作室", leader:"王盈", address:"上城区金钗袋巷79号", type:"街道"},
    {id:7, name:"闸弄口街道\"基层治理\"委员工作室", leader:"祝文雅", address:"上城区闸弄口街道党群服务中心", type:"街道"},
    {id:8, name:"政协凯旋小组委员工作室", leader:"金志伟", address:"上城区凤起东路127号", type:"街道"},
    {id:9, name:"采荷街道\"幸福19\"委员工作室", leader:"赵丹晨", address:"上城区采荷街道洁莲社区", type:"街道"},
    {id:10, name:"政协四季青小组委员工作室", leader:"李岗", address:"上城区民心路280号", type:"街道"},
    {id:11, name:"政协笕桥小组委员工作室", leader:"阮骏", address:"上城区笕桥街道政协会议室", type:"街道"},
    {id:12, name:"政协彭埠小组委员工作室", leader:"任渊", address:"上城区罗家老宅", type:"街道"},
    {id:13, name:"政协九堡小组委员工作室", leader:"胡建清", address:"上城区九乔街与杭乔路交叉口", type:"街道"},
    {id:14, name:"政协丁兰小组委员工作室", leader:"倪勇卿", address:"上城区临丁路699号", type:"街道"},
    {id:15, name:"张瑞旭委员工作室", leader:"张瑞旭", address:"上城区凯旋街道凯益荟208室", type:"特色"},
    {id:16, name:"缪渭川委员工作室", leader:"缪渭川", address:"上城区凯旋街道南肖埠社区", type:"特色"},
    {id:17, name:"虞军红委员工作室", leader:"虞军红", address:"上城区运新花苑运新社区", type:"特色"},
    {id:18, name:"商业服务智库委员工作室", leader:"姚华俊、黄晓芹", address:"上城区UDC时代大厦3楼", type:"特色"},
    {id:19, name:"俞富康宋韵文化委员工作室", leader:"俞富康", address:"上城区凯旋路151号", type:"特色"},
    {id:20, name:"爱馨文化公益委员工作室", leader:"杨洁", address:"上城区南山路198号", type:"特色"},
    {id:21, name:"\"文润童心\"委员工作室", leader:"周媛媛", address:"上城区清波街道府学巷8号", type:"特色"},
    {id:22, name:"\"老爸好商量\"委员工作室", leader:"俞富根", address:"上城区四宜路180号", type:"特色"},
    {id:23, name:"侨见未来委员工作室", leader:"胡晓敏", address:"上城区兰巷101-104号", type:"特色"},
    {id:24, name:"宋韵老字号委员工作室", leader:"屠明珏", address:"上城区江城路865号", type:"特色"},
    {id:25, name:"幸福邻里委员工作室", leader:"尹兆青", address:"上城区闸弄口街道红梅社区", type:"特色"},
    {id:26, name:"大健康委员工作室", leader:"谢慧淼", address:"上城区凯旋路与凯林巷交叉口", type:"特色"},
    {id:27, name:"大成委员工作室", leader:"陈磊", address:"上城区华润大厦A座18层", type:"特色"},
    {id:28, name:"\"邻聚力\"委员工作室", leader:"余丹凤", address:"上城区中豪五福天地B座21层", type:"特色"},
    {id:29, name:"东港社区委员工作室", leader:"蒋平樑", address:"上城区笕桥街道东港社区", type:"社区"},
    {id:30, name:"建和社区委员工作室", leader:"周建卫", address:"上城区彭埠街道建和社区", type:"社区"},
    {id:31, name:"杨柳郡社区委员工作室", leader:"王鹏", address:"上城区九和路660号绿城杨柳郡", type:"社区"},
    {id:32, name:"长睦幸福湾委员工作室", leader:"龚云玉", address:"上城区丁兰街道长睦苑社区", type:"社区"},
    {id:33, name:"同心·共富委员工作室", leader:"吴韵", address:"上城区丁兰街道皋城村文化礼堂", type:"社区"},
    {id:34, name:"乐动新声委员工作室", leader:"俞宙", address:"上城区金峰大厦1503室", type:"特色"},
    {id:35, name:"茗荟聚智委员工作室", leader:"王容峰", address:"上城区大井巷30-4号", type:"特色"},
    {id:36, name:"上城区政协无党派界别委员工作室", leader:"凌栋", address:"上城区凯旋路247-1号4楼", type:"界别"},
    {id:37, name:"上城区政协工会界别委员工作室", leader:"蔡肇颖", address:"上城区太平门直街458号", type:"界别"},
    {id:38, name:"上城区政协社会福利和保障界别委员工作室", leader:"吴国庆", address:"上城区特有爱·幸福体验馆", type:"界别"},
    {id:39, name:"有意思委员工作室", leader:"方晓阳", address:"上城区复兴南街130号", type:"特色"},
    {id:40, name:"春泥委员工作室", leader:"沈春妮", address:"上城区采荷路34号", type:"特色"},
    {id:41, name:"两岸一家亲委员工作室", leader:"陆雯", address:"上城区解放路189号-2", type:"特色"},
    {id:42, name:"\"视觉之思\"委员工作室", leader:"何晓菲", address:"上城区虎玉路16-18号", type:"特色"},
    {id:43, name:"\"育共体 阳光行\"委员工作室", leader:"王梦婷", address:"上城区景芳三区58幢", type:"特色"},
    {id:44, name:"非遗委员工作室", leader:"胡志强", address:"上城区大井巷55号", type:"特色"},
    {id:45, name:"乐医汇委员工作室", leader:"潘乐屹", address:"上城区西子智慧产业园8号楼", type:"特色"},
    {id:46, name:"全民阅读委员工作室", leader:"赵群伟", address:"上城区中山中路6号", type:"特色"},
    {id:47, name:"健康九久委员工作室", leader:"李祖胜", address:"上城区九堡街道蓝桥卫生服务站", type:"特色"},
    {id:48, name:"智汇钱潮委员工作室", leader:"沈波", address:"上城区小院书房", type:"特色"},
    {id:49, name:"环境资源和农业界别委员工作室", leader:"熊义勤、骆鉴湖", address:"浙江大学华家池校区", type:"界别"},
    {id:50, name:"漱玉集委员工作室", leader:"王盈", address:"上城区紫阳街道闻潮路77号", type:"特色"}
];

// ===== 委员工作室图片 =====
const studiosImages = {
    1: {src:"images/studios/1-政协湖滨小组委员工作室-学习考察新质生产力一-万事利科创中心.webp", title:"学习考察新质生产力"},
    2: {src:"images/studios/2-政协清波小组委员工作室-幸福清波，文化送福，联动中国美院为清波派出所、禁毒所、清波居民送新年祝福.webp", title:"幸福清波 文化送福"},
    3: {src:"images/studios/3-政协紫阳"三一"委员工作室-践行"委员说·委员做"，锚定"两个先行"目标，领跑"基层白治"之路.webp", title:"委员说·委员做"},
    4: {src:"images/studios/4-采荷街道"幸福19"委员工作室-"疗愈经济分享体验会"活动.webp", title:"疗愈经济分享"},
    5: {src:"images/studios/5-政协四季青小组委员工作室-市区县三级联动，召开"投早投小投科技"专题协商会.webp", title:"投早投小投科技"},
    6: {src:"images/studios/6-政协彭埠小组委员工作室-邀请非遗传承人开展非遗制作体验活动.webp", title:"非遗制作体验"},
    7: {src:"images/studios/7-工会界别委员工作室-开展"美丽大讲堂"活动.webp", title:"美丽大讲堂"},
    8: {src:"images/studios/8-社会福利和保障界别委员工作室-残疾人之家的义卖活动.webp", title:"残疾人之家义卖"},
    9: {src:"images/studios/9-"文润童心"委员工作室-传承和弘扬中华优秀传统文化，探索乡村优秀传统文化启蒙教育新路径.webp", title:"文润童心"},
    10: {src:"images/studios/10-全民阅读委员工作室-举办宋韵美学体验活动.webp", title:"宋韵美学体验"},
    11: {src:"images/studios/11-爱馨文化公益委员工作室-爱馨文化公益委员工作室.webp", title:"爱馨文化公益"},
    12: {src:"images/studios/12-"老爸好商量"委员工作室-发扬重视家庭教育优良传统，助力孩子健康快乐成长，举办亲子运动会.webp", title:"亲子运动会"},
    13: {src:"images/studios/13-有意思委员工作室-工作室委员与社区居民代表召开民生座谈会，听取居民对小区提升、菜场改造、停车难等问题的意见建议.webp", title:"民生座谈会"},
    14: {src:"images/studios/14-侨见未来委员工作室-关于社区居民空调安装纠纷的专项协商会.webp", title:"社区协商会"},
    15: {src:"images/studios/15-张瑞旭委员工作室-举办委员工作室跨代共融日活动.webp", title:"跨代共融日"},
    16: {src:"images/studios/16-大健康委员工作室-传承国粹，践行公益，走进社区开展健康宣教义诊活动.webp", title:"健康宣教义诊"},
    17: {src:"images/studios/17-俞富康宋韵文化委员工作室-国际艺术交流送中国"福".webp", title:"国际艺术交流"},
    18: {src:"images/studios/18-春泥委员工作室-两会期间迎新送福、送春联.webp", title:"迎新送福"},
    19: {src:"images/studios/19-"邻聚力"委员工作室-凝聚社会公益慈善之心，开展"让每个孩子像花儿一样绽放"主题论坛.webp", title:"花儿绽放论坛"},
    20: {src:"images/studios/20-建和社区委员工作室-党建引领，做好点滴惠民小事，走访慰问九和人家独居老人.webp", title:"走访慰问"},
    21: {src:"images/studios/21-健康九久委员工作室-召开健康普及专题座谈会.webp", title:"健康普及座谈"},
    22: {src:"images/studios/22-同心·共富委员工作室-举行"乡村音乐节"，用实用管用的好点子，助力乡村振兴.webp", title:"乡村音乐节"},
    23: {src:"images/studios/23-茗荟聚智委员工作室-开展"茶韵议事"交流活动.webp", title:"茶韵议事"},
    24: {src:"images/studios/24-"育共体 阳光行"委员工作室-"小小政协委员"青少年模拟政协活动.webp", title:"小小政协委员"},
    25: {src:"images/studios/25-乐动新声委员工作室-委员工作室.webp", title:"乐动新声"}
};

// ===== 界别数据 =====
const circlesData = [
    {name:"中共界别", count:4, activities:[
        {month:"1月", title:"国际人才交流活动", type:"主题活动"},
        {month:"9月", title:"加强人才引育，助推CID建设专题协商会", type:"专题协商"}
    ]},
    {name:"无党派人士界别", count:3, activities:[
        {month:"3月", title:"与新就业女性共庆妇女节主题沙龙", type:"主题沙龙"},
        {month:"5月", title:"界别委员公益惠民活动", type:"公益咨询"},
        {month:"9月", title:"无党派界别协商议事会", type:"专题协商"}
    ]},
    {name:"共青团、青联界别", count:2, activities:[
        {month:"1月", title:"送福送春联活动", type:"惠民服务"},
        {month:"4月", title:"读书交流会", type:"主题活动"}
    ]},
    {name:"工会界别", count:2, activities:[
        {month:"4月", title:"铜雕艺术体验日活动", type:"互动体验"},
        {month:"4月", title:"上城区职工毅行活动", type:"主题活动"}
    ]},
    {name:"妇联界别", count:2, activities:[
        {month:"5月", title:"品宋韵·话传承·谋创新文化专题活动", type:"主题活动"},
        {month:"9月", title:"金融赋能发展协商会", type:"专题协商"}
    ]},
    {name:"工商联界别", count:2, activities:[
        {month:"7月", title:"营商环境专项调研协商", type:"专题协商"},
        {month:"12月", title:"委员企业现代治理互学活动", type:"主题活动"}
    ]},
    {name:"科技、科协界别", count:2, activities:[
        {month:"3月", title:"关于推进OPC发展的调研", type:"专题调研"},
        {month:"10月", title:"加快推进科技创新和产业创新深度融合的协商会", type:"专题协商"}
    ]},
    {name:"侨、台界别", count:3, activities:[
        {month:"4月", title:"走进群核科技", type:"主题活动"},
        {month:"6月", title:"融通世界 文化互鉴活动", type:"主题活动"},
        {month:"9月", title:"侨助发展专题协商会", type:"专题协商"}
    ]},
    {name:"新闻文体界别", count:2, activities:[
        {month:"8月", title:"上城区人文经济创新发展专题协商会", type:"专题协商"},
        {month:"10月", title:"宋韵文化\"两创\"交流分享活动", type:"参观交流"}
    ]},
    {name:"经济界别", count:2, activities:[
        {month:"4月", title:"开局\"十五五\"——经济高质量发展专题协商会", type:"专题协商"},
        {month:"9月", title:"创新高地专题调研活动", type:"主题活动"}
    ]},
    {name:"环境资源和农业界别", count:2, activities:[
        {month:"4月", title:"城乡融合体验实践分享会", type:"主题活动"},
        {month:"10月", title:"城市更新盘活存量建筑的举措协商会", type:"专题协商"}
    ]},
    {name:"教育界别", count:2, activities:[
        {month:"9月", title:"青少年模拟政协委员活动", type:"主题活动"},
        {month:"11月", title:"教育系统政协委员座谈会", type:"专题协商"}
    ]},
    {name:"医卫界别", count:2, activities:[
        {month:"5月", title:"界别委员惠民健体服务", type:"惠民服务"},
        {month:"9月", title:"医卫界别协商议事会", type:"专题协商"}
    ]},
    {name:"社会福利和保障界别", count:2, activities:[
        {month:"6月", title:"爱心服务活动", type:"志愿服务"},
        {month:"11月", title:"爱心义卖活动", type:"爱心义卖"}
    ]},
    {name:"民族、宗教界别", count:2, activities:[
        {month:"5月", title:"红十字会博爱周市集", type:"主题活动"},
        {month:"8月", title:"居民楼外立面整治协调会", type:"专题协商"}
    ]},
    {name:"特邀界别", count:2, activities:[
        {month:"5月", title:"区垃圾分类工作专题协商", type:"专题协商"},
        {month:"9月", title:"城市道路健康体检观察主题活动", type:"主题活动"}
    ]}
];

// ===== 界别图片（按文件夹对应）=====
const circlesImages = {
    "1中共": [
        {src:"images/circles/1中共/2022.12.06 中共界别委员交流活动.webp", title:"中共界别委员交流活动"},
        {src:"images/circles/1中共/2024.02.02 区政协一届三次会议中共界别小组讨论会.webp", title:"区政协一届三次会议小组讨论"}
    ],
    "2无党派": [
        {src:"images/circles/2无党派/参加老旧小区物业提质协商议事.webp", title:"老旧小区物业提质协商"},
        {src:"images/circles/2无党派/无党派界别赴区司法局调研涉外法律服务有关工作 .webp", title:"涉外法律服务调研"},
        {src:"images/circles/2无党派/范国良副主席为老字号工作室揭牌.webp", title:"老字号工作室揭牌"},
        {src:"images/circles/2无党派/范国良副主席参加无党派界别主题分享活动.webp", title:"宏观经济态势分享"},
        {src:"images/circles/2无党派/重阳节开展为老服务.webp", title:"重阳节为老服务"}
    ],
    "3共青团、青联": [
        {src:"images/circles/3共青团、青联/IMG_20240531_160417.webp", title:"共青团青联界别活动"},
        {src:"images/circles/3共青团、青联/mmexport1717153124428.webp", title:"青年交流活动"},
        {src:"images/circles/3共青团、青联/mmexport1717153126963.webp", title:"界别协商活动"},
        {src:"images/circles/3共青团、青联/mmexport1717153128393.webp", title:"委员活动"}
    ],
    "4工会": [
        {src:"images/circles/4工会/2024年5月6日 上工大讲堂.webp", title:"上工大讲堂"},
        {src:"images/circles/4工会/5月25日2024年上城区职工毅行大会.webp", title:"职工毅行大会"},
        {src:"images/circles/4工会/5月25日2024年上城区职工毅行大会2.webp", title:"职工毅行活动"}
    ],
    "5妇联": [
        {src:"images/circles/5妇联/妇联界别召集人吕仕琼开展“七一”慰问.webp", title:"七一慰问"},
        {src:"images/circles/5妇联/妇联界别开展“品宋韵文化 做精致丽人”三八节活动.webp", title:"品宋韵文化活动"},
        {src:"images/circles/5妇联/妇联界别调研牵头人高艳霞带队调研白马庄巾帼共富工坊.webp", title:"巾帼共富工坊调研"},
        {src:"images/circles/5妇联/政协一届三次会议，妇联界别民宗界别合影.webp", title:"政协会议合影"}
    ],
    "6工商联": [
        {src:"images/circles/6工商联/主体培训班合影.webp", title:"主体培训班"},
        {src:"images/circles/6工商联/深圳浙江商会考察钱二图片.webp", title:"深圳商会考察"},
        {src:"images/circles/6工商联/组织民企500强部分人员参观考察钱二.webp", title:"民企500强考察"}
    ],
    "7科技、科协": [
        {src:"images/circles/7科技、科协/mmexport1711700143984.webp", title:"科技界别活动"},
        {src:"images/circles/7科技、科协/mmexport1711702029812.webp", title:"科创交流活动"}
    ],
    "8侨、台": [
        {src:"images/circles/8侨、台/WechatIMG31.webp", title:"侨台界别活动"},
        {src:"images/circles/8侨、台/WechatIMG32.webp", title:"交流活动"},
        {src:"images/circles/8侨、台/WechatIMG33.webp", title:"联谊活动"}
    ],
    "9新闻文体": [
        {src:"images/circles/9新闻文体/2023年8月，参观亚运会博物馆.webp", title:"参观亚运会博物馆"},
        {src:"images/circles/9新闻文体/2023年8月，参观亚运会博物馆2.webp", title:"亚运文化体验"}
    ],
    "10经济": [
        {src:"images/circles/10经济/353cd94f8a4dc02a2e821a5ba8ab043.webp", title:"经济界别活动"},
        {src:"images/circles/10经济/619ee9289835d103c435f174c1e0cff.webp", title:"经济协商活动"}
    ],
    "11环境资源和农业": [
        {src:"images/circles/11环境资源和农业/3f7343aec8231bde22a668a4e17d149a.webp", title:"环境资源活动"},
        {src:"images/circles/11环境资源和农业/42e4ebbcbe8d12cf29a4876baecaca2a.webp", title:"农业界别活动"},
        {src:"images/circles/11环境资源和农业/82cf6d0fbeb3c41a443b837ff9927617.webp", title:"调研活动"},
        {src:"images/circles/11环境资源和农业/db8232e0c5d40a94e9fbcf8c9dfaee8.webp", title:"协商议事"}
    ],
    "12教育": [
        {src:"images/circles/12教育/2f41c28d4b53804fb60bb6ef196c54a4.webp", title:"教育界别活动"},
        {src:"images/circles/12教育/IMG_2126.webp", title:"教育交流"}
    ],
    "13医卫": [
        {src:"images/circles/13医卫/IMG20240527105848.webp", title:"医卫界别义诊"},
        {src:"images/circles/13医卫/IMG20240527161315.webp", title:"健康讲座"},
        {src:"images/circles/13医卫/IMG20240527170959.webp", title:"医疗活动"},
        {src:"images/circles/13医卫/IMG_0853.HEIC.webp", title:"医卫服务"}
    ],
    "14社会福利和保障": [
        {src:"images/circles/14社会福利和保障/区政府副主席范国良与政协委员参观社会福利和保障界别委员工作室.webp", title:"参观委员工作室"},
        {src:"images/circles/14社会福利和保障/社会福利和保障界别委员联系界别群众参加党纪学习教育.webp", title:"党纪学习教育"},
        {src:"images/circles/14社会福利和保障/联动邵逸夫医院，开展“以爱之名”等残疾人画展及手工艺品义卖活动.webp", title:"残疾人义卖活动"}
    ],
    "15民宗": [
        {src:"images/circles/15民宗/IMG_20240315_085702.webp", title:"民宗界别活动1"},
        {src:"images/circles/15民宗/IMG_20240618_095251.webp", title:"民宗界别活动2"}
    ],
    "16特邀": [
        {src:"images/circles/16特邀/与商户开展座谈.webp", title:"与商户座谈"},
        {src:"images/circles/16特邀/开展读书会.webp", title:"读书会活动"},
        {src:"images/circles/16特邀/现场调研德寿宫附近停车泊位情况.webp", title:"德寿宫调研"},
        {src:"images/circles/16特邀/现场调研湖滨步行街营商环境提升项目.webp", title:"湖滨步行街调研"},
        {src:"images/circles/16特邀/针对德寿宫周边一件事情况进行座谈.webp", title:"德寿宫座谈"}
    ]
};

// ===== 街道数据 =====
const streetsData = {
    "湖滨街道": [
        {month:"5月", title:"湖滨\"智慧文旅商圈\"消费提振专题协商会", desc:"探讨智慧商圈建设与消费提振"},
        {month:"8月", title:"电动自行车充停点位数字化升级可行性专题协商", desc:"数智赋能，防患未'燃'"}
    ],
    "清波街道": [
        {month:"5月", title:"打造林徽因文化IP与培育街区新质生产力协商", desc:"IP赋能·业态焕新"},
        {month:"10月", title:"深化\"十邻坊\"机制与优化全龄友好服务体系协商", desc:"巷陌共治·幸福邻里"}
    ],
    "小营街道": [
        {month:"3月", title:"锚定创新高地，赋能健康未来专题协商会", desc:"大健康产业发展协商"},
        {month:"8月", title:"推进城市更新协商会", desc:"让城市更有\"韧性\"与\"温度\""}
    ],
    "望江街道": [
        {month:"5月", title:"提升招商引资精准度专题协商", desc:"聚商引智 强链补链"},
        {month:"10月", title:"AI赋能\"一老一小\"智慧服务新模式专题协商", desc:"打造智慧养老与托育服务"}
    ],
    "南星街道": [
        {month:"3月", title:"龙山河生态人文与生物多样性融合治理协商", desc:"河韵新生"},
        {month:"10月", title:"以一碗面为媒探索餐饮烟火气赋能基层治理", desc:"餐饮文化与基层治理"}
    ],
    "紫阳街道": [
        {month:"2月", title:"街区大物业·坊巷共治理专题协商", desc:"深化二十三坊有机更新"},
        {month:"4月", title:"特色楼宇提质·科创企业赋能对口协商", desc:"聚力经济提质增效"},
        {month:"6月", title:"赋能中河南路改造，升级瓦肆文化品牌", desc:"推动人文经济融合"},
        {month:"8月", title:"构建\"防消一张网\"，打造矛盾调处中心", desc:"创新基层社会治理"},
        {month:"10月", title:"优化\"一老一小一残\"服务", desc:"完善15分钟便民服务圈"},
        {month:"12月", title:"争创上羊市街全过程人民民主实践点", desc:"擦亮基层治理品牌"}
    ],
    "闸弄口街道": [
        {month:"4月", title:"老旧小区全域类未来社区示范样板街区打造协商", desc:"未来社区创建"},
        {month:"8月", title:"\"闸们家\"特有AI\"TA经济\"中心专题协商", desc:"探索TA经济发展"}
    ],
    "凯旋街道": [
        {month:"6月", title:"深化\"跨社联片\"治理模式协商", desc:"健全新就业群体服务体系建设"},
        {month:"11月", title:"建立\"平安议事会\"机制协商", desc:"构建居民纠纷多元化解体系"}
    ],
    "采荷街道": [
        {month:"4月", title:"\"中国服装第一街\"国际消费打卡地品牌打造", desc:"聚焦\"全球触达\""},
        {month:"8月", title:"\"商文旅\"融合共绘时尚打卡新地图", desc:"城市体验与时尚打卡"}
    ],
    "四季青街道": [
        {month:"4月", title:"环总部经济生态圈建设专题协商", desc:"CID产业社区迭代建设"},
        {month:"9月", title:"全域未来社区建设专题协商", desc:"提升辖区人居环境"}
    ],
    "笕桥街道": [
        {month:"4月", title:"小区协商治理专题协商会", desc:"基层治理议题"},
        {month:"10月", title:"老街区域焕新蝶变专题协商会", desc:"城市更新议题"}
    ],
    "彭埠街道": [
        {month:"5月", title:"\"彭友暖新\"新就业群体多维服务矩阵协商", desc:"探索小哥驿站服务提升"},
        {month:"9月", title:"\"破墙融心\"租住融合社区共同体协商", desc:"构建和谐共生人居环境"}
    ],
    "九堡街道": [
        {month:"2月", title:"电商新生态赋能CID建设专题协商", desc:"电商产业发展"},
        {month:"9月", title:"\"城北企盼\"主题协商活动", desc:"区域发展议题"}
    ],
    "丁兰街道": [
        {month:"6月", title:"聚力丁兰经济发展专题协商会", desc:"区域经济发展"},
        {month:"10月", title:"助力皋亭文旅发展专题协商会", desc:"文旅融合发展"}
    ]
};

// ===== 分中心图片 =====
const centerImages = {
    pengbu: [
        {src:"images/center/彭埠1-市政协新时代协商民主实践中心矩阵建设座谈会在实践中心上城区分中心召开，市政协毛溪浩副主席参加.webp", title:"市区政协矩阵建设座谈会"},
        {src:"images/center/彭埠2-市区街三级政协党建联建工作会议在彭埠分中心召开.webp", title:"党建联建工作会议"},
        {src:"images/center/彭埠3-彭埠街道委员小组开展“圆梦安居，助力街道回迁安置”民生议事堂专题协商.webp", title:"回迁安置民生议事"},
        {src:"images/center/彭埠4-彭埠街道委员小组开展非遗体验活动.webp", title:"非遗体验活动"},
        {src:"images/center/彭埠5-联盟单位夏衍小学开展棋类比赛.webp", title:"夏衍小学棋类比赛"},
        {src:"images/center/彭埠6-妇联界别举办国学文化品鉴暨界别调研总结会.webp", title:"国学文化品鉴会"},
        {src:"images/center/彭埠7-共青团、青联界别，工商联界别，科技、科协界别和彭埠街道委员小组联合举办中医养生专题讲座及义诊服务活动.webp", title:"中医养生义诊服务"},
        {src:"images/center/彭埠8-湖滨街道委员小组开展"助推商圈社区建设"民生议事堂活动.webp", title:"商圈社区建设议事"},
        {src:"images/center/彭埠9-清波街道委员小组、无党派界别开展清波街道老旧小区物业服务"质价双提"议事协商活动.webp", title:"物业服务议事协商"},
        {src:"images/center/彭埠10-小营街道委员小组举办"遇见东坡"交流会.webp", title:"遇见东坡交流会"},
        {src:"images/center/彭埠11-望江街道委员小组开展"普及全民金融知识增强百姓防诈意识"专题协商活动.webp", title:"防诈意识专题协商"},
        {src:"images/center/彭埠12-南星街道委员小组携手特邀界别举办"赓续历史之文脉，建言服务为民生"冬季读书会及专题协商会.webp", title:"冬季读书会"}
    ],
    ziyang: [
        {src:"images/center/紫阳1-区政协孙国方主席赴紫阳分中心调研.webp", title:"孙国方主席调研"},
        {src:"images/center/紫阳2-市政协吴玉凤副秘书长调研紫阳分中心建设工作.webp", title:"吴玉凤副秘书长调研"},
        {src:"images/center/紫阳3-紫阳上羊实践点开展"推动邻里食堂智能化"专题协商会.webp", title:"邻里食堂智能化协商"}
    ]
};
