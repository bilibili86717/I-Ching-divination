// ================================================================================
// 高岛易断 · 六十四卦数据 guaData.js
// --------------------------------------------------------------------------------
// 说明：本文件定义周易 64 卦的核心数据，并提供起卦、查卦、变卦等工具函数。
// 八卦编号：1=乾, 2=兑, 3=离, 4=震, 5=巽, 6=坎, 7=艮, 8=坤
// 编码：UTF-8
// ================================================================================

const guaData = [
    {
        id: 1, upper: 1, lower: 1, name: '乾为天', symbol: '䷀',
        summary: {
            text: '天行健，君子以自强不息。纯阳刚健，主大吉大利，需守正不妄为。',
            northeastDialect: '这卦老阳刚了！就跟那顶天立地的老爷们儿似的，啥事儿都能扛，就得一股劲儿往前干。'
        },
        interpretations: []
    },
    {
        id: 2, upper: 8, lower: 8, name: '坤为地', symbol: '䷁',
        summary: {
            text: '地势坤，君子以厚德载物。纯阴柔顺，主包容宽厚，宜顺时而动。',
            northeastDialect: '这卦就是大地那股劲儿，啥都能装下，老实在了，别瞎折腾，顺着来就对了。'
        },
        interpretations: []
    },
    {
        id: 3, upper: 6, lower: 4, name: '水雷屯', symbol: '䷂',
        summary: {
            text: '云雷屯，君子以经纶。万事开头难，如草木初生，宜守正待时。',
            northeastDialect: '刚起头儿哪有不费劲的？就跟那小草刚冒芽似的，得憋着劲儿慢慢拱，别急。'
        },
        interpretations: []
    },
    {
        id: 4, upper: 7, lower: 6, name: '山水蒙', symbol: '䷃',
        summary: {
            text: '山下出泉，蒙。君子以果行育德。蒙昧初开，宜启蒙教化，虚心求教。',
            northeastDialect: '还没开窍呢！就跟小孩儿刚学说话似的，得找明白人指点，自己别瞎琢磨。'
        },
        interpretations: []
    },
    {
        id: 5, upper: 6, lower: 1, name: '水天需', symbol: '䷄',
        summary: {
            text: '云上于天，需。君子以饮食宴乐。时机未至，宜耐心等待，养精蓄锐。',
            northeastDialect: '急啥啊？还没到时候呢！该吃吃该喝喝，等火候到了再动手也不迟。'
        },
        interpretations: []
    },
    {
        id: 6, upper: 1, lower: 6, name: '天水讼', symbol: '䷅',
        summary: {
            text: '天与水违行，讼。君子以作事谋始。争讼之象，宜慎始慎终，不可好斗。',
            northeastDialect: '犯口舌打官司可不是啥好事儿！能忍就忍，真要干也得先把后路想明白。'
        },
        interpretations: []
    },
    {
        id: 7, upper: 8, lower: 6, name: '地水师', symbol: '䷆',
        summary: {
            text: '地中有水，师。君子以容民畜众。兴兵用众之象，须择良将，以正服人。',
            northeastDialect: '要干大事儿就得拢住人！得找个靠谱的带头大哥，大伙儿一条心才能成事儿。'
        },
        interpretations: []
    },
    {
        id: 8, upper: 6, lower: 8, name: '水地比', symbol: '䷇',
        summary: {
            text: '地上有水，比。先王以建万国、亲诸侯。亲比相助，宜择善而从，团结一致。',
            northeastDialect: '跟对人走对路！找着靠谱的兄弟一块儿干，比啥都强，别自己瞎闯。'
        },
        interpretations: []
    },
    {
        id: 9, upper: 5, lower: 1, name: '风天小畜', symbol: '䷈',
        summary: {
            text: '风行天上，小畜。君子以懿文德。小有积蓄，宜蓄养德行，不可妄动大举。',
            northeastDialect: '刚攒俩子儿别瞎得瑟！先把自己那点德行养好了，大事儿还得再等等。'
        },
        interpretations: []
    },
    {
        id: 10, upper: 1, lower: 2, name: '天泽履', symbol: '䷉',
        summary: {
            text: '上天下泽，履。君子以辨上下、定民志。如履虎尾，须谨慎前行，守礼不妄。',
            northeastDialect: '踩着老虎尾巴了！可得加十二万分小心，一步走错就完犊子，规矩点儿没错。'
        },
        interpretations: []
    },
    {
        id: 11, upper: 8, lower: 1, name: '地天泰', symbol: '䷊',
        summary: {
            text: '天地交，泰。后以财成天地之道，辅相天地之宜。上下交泰，万事亨通。',
            northeastDialect: '这卦老顺了！上下通气啥都好，干啥啥成，跟开了挂似的。'
        },
        interpretations: []
    },
    {
        id: 12, upper: 1, lower: 8, name: '天地否', symbol: '䷋',
        summary: {
            text: '天地不交，否。君子以俭德辟难，不可荣以禄。上下阻塞，诸事不顺，宜退守。',
            northeastDialect: '点儿背到家了！干啥啥不成，嘴都闭紧了少说话，夹着尾巴做人吧。'
        },
        interpretations: []
    },
    {
        id: 13, upper: 1, lower: 3, name: '天火同人', symbol: '䷌',
        summary: {
            text: '天与火，同人。君子以类族辨物。志同道合，宜与人同心协力，光明正大。',
            northeastDialect: '找着一伙儿对路子的哥们儿了！大伙儿心往一处想，劲儿往一处使，啥事儿干不成？'
        },
        interpretations: []
    },
    {
        id: 14, upper: 3, lower: 1, name: '火天大有', symbol: '䷍',
        summary: {
            text: '火在天上，大有。君子以遏恶扬善，顺天休命。大有所得，主富贵昌盛，须谦和。',
            northeastDialect: '这是要发大财的节奏啊！啥好事儿都奔你来了，但可得低调，别飘起来。'
        },
        interpretations: []
    },
    {
        id: 15, upper: 8, lower: 7, name: '地山谦', symbol: '䷎',
        summary: {
            text: '地中有山，谦。君子以裒多益寡，称物平施。谦逊有德，主无不利，福泽绵长。',
            northeastDialect: '低调才是最牛的炫耀！有能耐别显摆，越谦虚越有人捧，啥事儿都顺。'
        },
        interpretations: []
    },
    {
        id: 16, upper: 4, lower: 8, name: '雷地豫', symbol: '䷏',
        summary: {
            text: '雷出地奋，豫。先王以作乐崇德，殷荐之上帝。顺时而动，主安乐喜悦，防逸乐。',
            northeastDialect: '这阵子心情老敞亮了！干啥都带劲，但也别光顾着乐呵，忘了正事儿。'
        },
        interpretations: []
    },
    {
        id: 17, upper: 2, lower: 4, name: '泽雷随', symbol: '䷐',
        summary: {
            text: '泽中有雷，随。君子以向晦入宴息。随顺时势，宜随机应变，择善而从。',
            northeastDialect: '识时务者为俊杰！该低头就低头，跟着明白人走，死扛没好果子吃。'
        },
        interpretations: []
    },
    {
        id: 18, upper: 7, lower: 5, name: '山风蛊', symbol: '䷑',
        summary: {
            text: '山下有风，蛊。君子以振民育德。积弊需整治，宜革故鼎新，拨乱反正。',
            northeastDialect: '老毛病攒一堆了！得下狠手整治整治，该改的改该换的换，别姑息。'
        },
        interpretations: []
    },
    {
        id: 19, upper: 8, lower: 2, name: '地泽临', symbol: '䷒',
        summary: {
            text: '泽上有地，临。君子以教思无穷，容保民无疆。君临督导，宜积极进取，把握时机。',
            northeastDialect: '机会送上门儿了！得主动出击，别等人家求你，该出手时就出手。'
        },
        interpretations: []
    },
    {
        id: 20, upper: 5, lower: 8, name: '风地观', symbol: '䷓',
        summary: {
            text: '风行地上，观。先王以省方观民设教。观察省视，宜审时度势，静观其变。',
            northeastDialect: '先别瞎动！眯着眼好好瞅瞅，看准了形势再下手，急着表态容易栽跟头。'
        },
        interpretations: []
    },
    {
        id: 21, upper: 3, lower: 4, name: '火雷噬嗑', symbol: '䷔',
        summary: {
            text: '雷电，噬嗑。先王以明罚敕法。咬合贯通，须明察决断，破除障碍。',
            northeastDialect: '有坎儿堵着道儿呢！得下狠嘴咬开它，该咋办咋办，别跟个娘们儿似的磨磨唧唧。'
        },
        interpretations: []
    },
    {
        id: 22, upper: 7, lower: 3, name: '山火贲', symbol: '䷕',
        summary: {
            text: '山下有火，贲。君子以明庶政，无敢折狱。文饰装点，宜修饰外表，实质为本。',
            northeastDialect: '该捯饬捯饬了！人是衣裳马是鞍，但别光整面子活儿，内里也得硬。'
        },
        interpretations: []
    },
    {
        id: 23, upper: 7, lower: 8, name: '山地剥', symbol: '䷖',
        summary: {
            text: '山附于地，剥。上以厚下安宅。剥落侵蚀，主阴盛阳衰，宜顺势待复。',
            northeastDialect: '这阵子可是够倒霉的！啥啥都往下掉，别硬撑，先猫起来等风头过去。'
        },
        interpretations: []
    },
    {
        id: 24, upper: 8, lower: 4, name: '地雷复', symbol: '䷗',
        summary: {
            text: '雷在地中，复。先王以至日闭关，商旅不行。一阳来复，主否极泰来，生机重现。',
            northeastDialect: '眼瞅着要翻身了！就剩那点儿阳气也回来了，别着急，慢慢往好里走。'
        },
        interpretations: []
    },
    {
        id: 25, upper: 1, lower: 4, name: '天雷无妄', symbol: '䷘',
        summary: {
            text: '天下雷行，物与无妄。先王以茂对时，育万物。不妄动，宜守正道，顺其自然。',
            northeastDialect: '别瞎作妖！该咋地咋地，老老实实按着道儿走，瞎折腾准出乱子。'
        },
        interpretations: []
    },
    {
        id: 26, upper: 7, lower: 1, name: '山天大畜', symbol: '䷙',
        summary: {
            text: '天在山中，大畜。君子以多识前言往行，以畜其德。大有蓄积，主厚积薄发。',
            northeastDialect: '肚里有货底气足！平时多攒点本事学问，关键时刻才能镇得住场子。'
        },
        interpretations: []
    },
    {
        id: 27, upper: 7, lower: 4, name: '山雷颐', symbol: '䷚',
        summary: {
            text: '山下有雷，颐。君子以慎言语，节饮食。颐养之象，宜修身养性，谨慎自持。',
            northeastDialect: '该好好养养了！管住嘴迈开腿，说话也得掂量着，别啥都往外唠。'
        },
        interpretations: []
    },
    {
        id: 28, upper: 2, lower: 5, name: '泽风大过', symbol: '䷛',
        summary: {
            text: '泽灭木，大过。君子以独立不惧，遁世无闷。过度超常，须非常之举，慎之又慎。',
            northeastDialect: '这事儿闹得有点悬！得敢作敢当，但也不能瞎来，每一步都得走心。'
        },
        interpretations: []
    },
    {
        id: 29, upper: 6, lower: 6, name: '坎为水', symbol: '䷜',
        summary: {
            text: '水洊至，习坎。君子以常德行，习教事。重险相连，主险难重重，须心诚信实。',
            northeastDialect: '掉坑里又掉坑里！老难了，但也别慌，沉住气一步一步往外爬。'
        },
        interpretations: []
    },
    {
        id: 30, upper: 3, lower: 3, name: '离为火', symbol: '䷝',
        summary: {
            text: '明两作，离。大人以继明照于四方。光明附丽，主前程似锦，宜依附正道。',
            northeastDialect: '前途一片光明！就跟那大太阳照着似的，但也得找对地方落脚，别瞎晃。'
        },
        interpretations: []
    },
    {
        id: 31, upper: 2, lower: 7, name: '泽山咸', symbol: '䷞',
        summary: {
            text: '山上有泽，咸。君子以虚受人。感应相通，主情投意合，宜虚心待人。',
            northeastDialect: '心有灵犀一点通！跟人打交道得走心，别玩虚的，实诚点儿才能对上眼。'
        },
        interpretations: []
    },
    {
        id: 32, upper: 4, lower: 5, name: '雷风恒', symbol: '䷟',
        summary: {
            text: '雷风，恒。君子以立不易方。恒久持守，主持之以恒，不可朝三暮四。',
            northeastDialect: '干啥都得有长性！别三天打鱼两天晒网，咬住了不松口才是正道。'
        },
        interpretations: []
    },
    {
        id: 33, upper: 1, lower: 7, name: '天山遁', symbol: '䷠',
        summary: {
            text: '天下有山，遁。君子以远小人，不恶而严。退避隐遁，宜急流勇退，明哲保身。',
            northeastDialect: '该撤就撤！别死扛着，退一步海阔天空，犯不着跟小人一般见识。'
        },
        interpretations: []
    },
    {
        id: 34, upper: 4, lower: 1, name: '雷天大壮', symbol: '䷡',
        summary: {
            text: '雷在天上，大壮。君子以非礼弗履。阳气壮盛，主气势如虹，须守礼不妄。',
            northeastDialect: '这股子劲儿老冲了！但也不能横冲直撞，该守的规矩还得守。'
        },
        interpretations: []
    },
    {
        id: 35, upper: 3, lower: 8, name: '火地晋', symbol: '䷢',
        summary: {
            text: '明出地上，晋。君子以自昭明德。光明上升，主前途光明，宜积极进取。',
            northeastDialect: '太阳从地底下冒出来了！眼看着就步步高升，赶紧往前冲吧。'
        },
        interpretations: []
    },
    {
        id: 36, upper: 8, lower: 3, name: '地火明夷', symbol: '䷣',
        summary: {
            text: '明入地中，明夷。君子以莅众，用晦而明。光明受损，主处境艰难，宜韬光养晦。',
            northeastDialect: '这阵子可憋屈了！有能耐也别瞎显摆，装怂保命，等机会再说。'
        },
        interpretations: []
    },
    {
        id: 37, upper: 5, lower: 3, name: '风火家人', symbol: '䷤',
        summary: {
            text: '风自火出，家人。君子以言有物而行有恒。家道和睦，主内修齐家，正家风。',
            northeastDialect: '家和万事兴！先把家里那摊子理顺了，外头才能干出模样来。'
        },
        interpretations: []
    },
    {
        id: 38, upper: 3, lower: 2, name: '火泽睽', symbol: '䷥',
        summary: {
            text: '上火下泽，睽。君子以同而异。乖违背离，主事有分歧，宜求同存异。',
            northeastDialect: '尿不到一个壶里！意见不合很正常，各退一步没啥大不了的，别较真。'
        },
        interpretations: []
    },
    {
        id: 39, upper: 6, lower: 7, name: '水山蹇', symbol: '䷦',
        summary: {
            text: '山上有水，蹇。君子以反身修德。艰难险阻，主进退维谷，宜反躬自省。',
            northeastDialect: '这道儿老难走了！往前费劲往后也难，不如先歇会儿想想自己哪儿不对。'
        },
        interpretations: []
    },
    {
        id: 40, upper: 4, lower: 6, name: '雷水解', symbol: '䷧',
        summary: {
            text: '雷雨作，解。君子以赦过宥罪。险难消解，主冰消瓦解，宜宽以待人。',
            northeastDialect: '可算是熬出头了！那点破事儿都散了，该放下的就放下，别老揪着不放。'
        },
        interpretations: []
    },
    {
        id: 41, upper: 7, lower: 2, name: '山泽损', symbol: '䷨',
        summary: {
            text: '山下有泽，损。君子以惩忿窒欲。减损克制，主有所舍才能有所得，宜节制。',
            northeastDialect: '该舍就得舍！别啥都攥手里不放，少点脾气少点贪念，反而能得着更多。'
        },
        interpretations: []
    },
    {
        id: 42, upper: 5, lower: 4, name: '风雷益', symbol: '䷩',
        summary: {
            text: '风雷，益。君子以见善则迁，有过则改。损上益下，主增益丰厚，宜积极行善。',
            northeastDialect: '这是要捡大便宜的节奏！干啥都能得着好处，但也得知道好歹，有错就改。'
        },
        interpretations: []
    },
    {
        id: 43, upper: 2, lower: 1, name: '泽天夬', symbol: '䷪',
        summary: {
            text: '泽上于天，夬。君子以施禄及下，居德则忌。决断去除，主果敢行事，不可犹豫。',
            northeastDialect: '该了断就得狠下心！别磨磨唧唧的，一刀下去干净利索，啥都解决了。'
        },
        interpretations: []
    },
    {
        id: 44, upper: 1, lower: 5, name: '天风姤', symbol: '䷫',
        summary: {
            text: '天下有风，姤。后以施命诰四方。不期而遇，主事起突然，须慎防小人。',
            northeastDialect: '半道儿上撞见的！可不是啥好事儿都有，尤其得防着那背后捅刀子的。'
        },
        interpretations: []
    },
    {
        id: 45, upper: 2, lower: 8, name: '泽地萃', symbol: '䷬',
        summary: {
            text: '泽上于地，萃。君子以除戎器，戒不虞。聚集会萃，主人才汇聚，宜聚众成事。',
            northeastDialect: '人都凑一块儿了！大伙儿抱团儿干事儿，啥困难都能扛过去。'
        },
        interpretations: []
    },
    {
        id: 46, upper: 8, lower: 5, name: '地风升', symbol: '䷭',
        summary: {
            text: '地中生木，升。君子以顺德，积小以高大。上升发展，主步步高升，循序渐进。',
            northeastDialect: '眼瞅着一天比一天好！就跟那小树往上窜似的，慢慢来，别着急。'
        },
        interpretations: []
    },
    {
        id: 47, upper: 2, lower: 6, name: '泽水困', symbol: '䷮',
        summary: {
            text: '泽无水，困。君子以致命遂志。困顿窘迫，主处境艰难，须坚守志向不屈。',
            northeastDialect: '可真是掉坑里了！要啥没啥，但也不能怂，咬着牙也得把骨气守住。'
        },
        interpretations: []
    },
    {
        id: 48, upper: 6, lower: 5, name: '水风井', symbol: '䷯',
        summary: {
            text: '木上有水，井。君子以劳民劝相。井养不穷，主养而不竭，宜修德养民。',
            northeastDialect: '得像那井水似的，啥时候有人来舀都有！平时多攒德行，总有派上用场的时候。'
        },
        interpretations: []
    },
    {
        id: 49, upper: 2, lower: 3, name: '泽火革', symbol: '䷰',
        summary: {
            text: '泽中有火，革。君子以治历明时。变革更新，主除旧布新，顺时而变。',
            northeastDialect: '该变就得变！老一套行不通了，换个活法儿说不定就柳暗花明了。'
        },
        interpretations: []
    },
    {
        id: 50, upper: 3, lower: 5, name: '火风鼎', symbol: '䷱',
        summary: {
            text: '木上有火，鼎。君子以正位凝命。鼎新革故，主尊荣稳固，宜守正立新。',
            northeastDialect: '改朝换代了！新规矩新气象，找准自己的位置，踏踏实实过日子。'
        },
        interpretations: []
    },
    {
        id: 51, upper: 4, lower: 4, name: '震为雷', symbol: '䷲',
        summary: {
            text: '洊雷，震。君子以恐惧修省。震动惊惧，主有惊无险，宜反省修身。',
            northeastDialect: '轰隆一声吓一跳！但没啥大事儿，就是给你提个醒，自己好好琢磨琢磨。'
        },
        interpretations: []
    },
    {
        id: 52, upper: 7, lower: 7, name: '艮为山', symbol: '䷳',
        summary: {
            text: '兼山，艮。君子以思不出其位。止而不动，主适可而止，宜安分守己。',
            northeastDialect: '该停就得停！别啥都往前冲，知道自己几斤几两，不该管的别瞎掺和。'
        },
        interpretations: []
    },
    {
        id: 53, upper: 5, lower: 7, name: '风山渐', symbol: '䷴',
        summary: {
            text: '山上有木，渐。君子以居贤德善俗。循序渐进，主稳步发展，不可急于求成。',
            northeastDialect: '心急吃不了热豆腐！一步一步来，稳稳当当的比啥都强。'
        },
        interpretations: []
    },
    {
        id: 54, upper: 4, lower: 2, name: '雷泽归妹', symbol: '䷵',
        summary: {
            text: '雷上动泽，归妹。君子以永终知敝。婚嫁归宿，主事有定分，须慎终如始。',
            northeastDialect: '该着的事儿跑不了！但也不能马虎，该咋办咋办，别到最后掉链子。'
        },
        interpretations: []
    },
    {
        id: 55, upper: 4, lower: 3, name: '雷火丰', symbol: '䷶',
        summary: {
            text: '雷电皆至，丰。君子以折狱致刑。丰盛盛大，主如日中天，须防盛极而衰。',
            northeastDialect: '这阵势老热闹了！眼瞅着啥都兴旺，但也得留个心眼，别乐极生悲。'
        },
        interpretations: []
    },
    {
        id: 56, upper: 3, lower: 7, name: '火山旅', symbol: '䷷',
        summary: {
            text: '山上有火，旅。君子以明慎用刑，而不留狱。羁旅行役，主客居在外，宜谨慎谦和。',
            northeastDialect: '出门在外不容易！人在屋檐下不得不低头，低调点儿，别跟人起冲突。'
        },
        interpretations: []
    },
    {
        id: 57, upper: 5, lower: 5, name: '巽为风', symbol: '䷸',
        summary: {
            text: '随风，巽。君子以申命行事。顺从入化，主谦逊行事，宜顺势而为。',
            northeastDialect: '顺着风势走！该低头就低头，软点儿没亏吃，死犟硬扛没啥好下场。'
        },
        interpretations: []
    },
    {
        id: 58, upper: 2, lower: 2, name: '兑为泽', symbol: '䷹',
        summary: {
            text: '丽泽，兑。君子以朋友讲习。喜悦和说，主心情愉悦，宜广结善缘。',
            northeastDialect: '这阵子老开心了！啥事儿都顺，多跟哥们儿唠唠，越唠越起劲。'
        },
        interpretations: []
    },
    {
        id: 59, upper: 5, lower: 6, name: '风水涣', symbol: '䷺',
        summary: {
            text: '风行水上，涣。先王以享于帝立庙。涣散离析，主冰消瓦解，宜凝聚人心。',
            northeastDialect: '人心散了队伍不好带！得想办法把大伙儿再拢一块儿，别让那股劲儿散了。'
        },
        interpretations: []
    },
    {
        id: 60, upper: 6, lower: 2, name: '水泽节', symbol: '䷻',
        summary: {
            text: '泽上有水，节。君子以制数度，议德行。节制有度，主量入为出，不可过度。',
            northeastDialect: '啥事儿都得有个度！该省就得省，可着劲儿造早晚得拉饥荒。'
        },
        interpretations: []
    },
    {
        id: 61, upper: 5, lower: 2, name: '风泽中孚', symbol: '䷼',
        summary: {
            text: '泽上有风，中孚。君子以议狱缓死。中正诚信，主诚信感人，宜守信不欺。',
            northeastDialect: '做人得实诚！说到做到不玩虚的，真诚信得过，啥事儿都好办。'
        },
        interpretations: []
    },
    {
        id: 62, upper: 4, lower: 7, name: '雷山小过', symbol: '䷽',
        summary: {
            text: '山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。小有过越，主谨慎从事，可小不可大。',
            northeastDialect: '别整大的！小打小闹没啥，大动作就免了吧，低调点儿稳当。'
        },
        interpretations: []
    },
    {
        id: 63, upper: 6, lower: 3, name: '水火既济', symbol: '䷾',
        summary: {
            text: '水在火上，既济。君子以思患而预防之。事已成功，主守成防变，居安思危。',
            northeastDialect: '事儿办成了但也别松劲儿！好光景不长久，留点后手总没错。'
        },
        interpretations: []
    },
    {
        id: 64, upper: 3, lower: 6, name: '火水未济', symbol: '䷿',
        summary: {
            text: '火在水上，未济。君子以慎辨物居方。事未成功，主前途未卜，宜审慎前行。',
            northeastDialect: '还差一把火！别以为稳了，没准儿临门一脚就掉链子，加小心没错。'
        },
        interpretations: []
    }
];

// ==========================================================
// 八卦编号到二进制编码映射（从上到下：上爻|中爻|初爻，阳=1，阴=0）
// 乾(1)=111=7, 兑(2)=011=3, 离(3)=101=5, 震(4)=001=1
// 巽(5)=110=6, 坎(6)=010=2, 艮(7)=100=4, 坤(8)=000=0
// ==========================================================
const numToBin = { 1: 7, 2: 3, 3: 5, 4: 1, 5: 6, 6: 2, 7: 4, 8: 0 };
const binToNum = { 7: 1, 3: 2, 5: 3, 1: 4, 6: 5, 2: 6, 4: 7, 0: 8 };
const trigramName = { 1: '乾', 2: '兑', 3: '离', 4: '震', 5: '巽', 6: '坎', 7: '艮', 8: '坤' };
const trigramSymbol = { 1: '☰', 2: '☱', 3: '☲', 4: '☳', 5: '☴', 6: '☵', 7: '☶', 8: '☷' };

// 根据上下卦编号查找卦象
function findGuaByUpperLower(upper, lower) {
    return guaData.find(g => g.upper === upper && g.lower === lower);
}

// 根据id查找卦象
function findGuaById(id) {
    return guaData.find(g => g.id === id);
}

// 计算变卦：给定本卦的上下卦编号和变爻位置(1-6)，返回变卦对象
// 爻位 1-3 属于下卦（内卦），4-6 属于上卦（外卦）
function getChangedGua(upperNum, lowerNum, yaoPos) {
    let upperBin = numToBin[upperNum];
    let lowerBin = numToBin[lowerNum];

    // 翻转对应二进制位
    if (yaoPos === 1)      lowerBin = lowerBin ^ 1;
    else if (yaoPos === 2) lowerBin = lowerBin ^ 2;
    else if (yaoPos === 3) lowerBin = lowerBin ^ 4;
    else if (yaoPos === 4) upperBin = upperBin ^ 1;
    else if (yaoPos === 5) upperBin = upperBin ^ 2;
    else if (yaoPos === 6) upperBin = upperBin ^ 4;

    const newUpper = binToNum[upperBin];
    const newLower = binToNum[lowerBin];
    return findGuaByUpperLower(newUpper, newLower);
}

// 梅花易数简化起卦
function castGua(upperRandom, lowerRandom, yaoRandom) {
    const upper = (upperRandom % 8 === 0) ? 8 : upperRandom % 8;
    const lower = (lowerRandom % 8 === 0) ? 8 : lowerRandom % 8;
    const yao   = (yaoRandom   % 6 === 0) ? 6 : yaoRandom   % 6;

    const original = findGuaByUpperLower(upper, lower);
    const changed  = getChangedGua(upper, lower, yao);

    return {
        upperTrigram: upper,
        lowerTrigram: lower,
        movingYao: yao,
        originalGua: original,
        changedGua: changed
    };
}

// 浏览器环境 → 全局；Node 环境 → module.exports
if (typeof window !== 'undefined') {
    window.guaData = guaData;
    window.findGuaByUpperLower = findGuaByUpperLower;
    window.findGuaById = findGuaById;
    window.getChangedGua = getChangedGua;
    window.castGua = castGua;
    window.numToBin = numToBin;
    window.binToNum = binToNum;
    window.trigramName = trigramName;
    window.trigramSymbol = trigramSymbol;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        guaData, findGuaByUpperLower, findGuaById, getChangedGua, castGua,
        numToBin, binToNum, trigramName, trigramSymbol
    };
}
