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
            northeastDialect: '天道运行刚健有力，象征自强不息的精神。得此卦者应当奋发有为，但必须坚守正道，不可狂妄行事。'
        },
        interpretations: []
    },
    {
        id: 2, upper: 8, lower: 8, name: '坤为地', symbol: '䷁',
        summary: {
            text: '地势坤，君子以厚德载物。纯阴柔顺，主包容宽厚，宜顺时而动。',
            northeastDialect: '大地承载万物，象征宽厚包容的美德。得此卦者当顺势而为，以柔顺包容的态度处事，不宜强行冒进。'
        },
        interpretations: []
    },
    {
        id: 3, upper: 6, lower: 4, name: '水雷屯', symbol: '䷂',
        summary: {
            text: '云雷屯，君子以经纶。万事开头难，如草木初生，宜守正待时。',
            northeastDialect: '万事开头难，就像草木刚刚萌芽时需要精心呵护。得此卦者应当在起步阶段守正待时，不可急于求成。'
        },
        interpretations: []
    },
    {
        id: 4, upper: 7, lower: 6, name: '山水蒙', symbol: '䷃',
        summary: {
            text: '山下出泉，蒙。君子以果行育德。蒙昧初开，宜启蒙教化，虚心求教。',
            northeastDialect: '山下有泉水涌出，象征蒙昧初开需要启蒙教化。得此卦者应当虚心向他人求教，以开启心智。'
        },
        interpretations: []
    },
    {
        id: 5, upper: 6, lower: 1, name: '水天需', symbol: '䷄',
        summary: {
            text: '云上于天，需。君子以饮食宴乐。时机未至，宜耐心等待，养精蓄锐。',
            northeastDialect: '云气积聚于天上尚未降雨，象征时机尚未成熟。得此卦者应耐心等待，养精蓄锐，不可急躁冒进。'
        },
        interpretations: []
    },
    {
        id: 6, upper: 1, lower: 6, name: '天水讼', symbol: '䷅',
        summary: {
            text: '天与水违行，讼。君子以作事谋始。争讼之象，宜慎始慎终，不可好斗。',
            northeastDialect: '天与水背道而驰，象征意见不合易起争端。得此卦者应谨慎处理纠纷，能忍则忍，不可好讼斗狠。'
        },
        interpretations: []
    },
    {
        id: 7, upper: 8, lower: 6, name: '地水师', symbol: '䷆',
        summary: {
            text: '地中有水，师。君子以容民畜众。兴兵用众之象，须择良将，以正服人。',
            northeastDialect: '地中藏水可以养兵蓄众，象征组织用兵之象。得此卦者应选择可靠的领导，团结一致方能成事。'
        },
        interpretations: []
    },
    {
        id: 8, upper: 6, lower: 8, name: '水地比', symbol: '䷇',
        summary: {
            text: '地上有水，比。先王以建万国、亲诸侯。亲比相助，宜择善而从，团结一致。',
            northeastDialect: '水在地上相互依附，象征亲比相助。得此卦者应选择志同道合的伙伴，团结协作比单打独斗更有利。'
        },
        interpretations: []
    },
    {
        id: 9, upper: 5, lower: 1, name: '风天小畜', symbol: '䷈',
        summary: {
            text: '风行天上，小畜。君子以懿文德。小有积蓄，宜蓄养德行，不可妄动大举。',
            northeastDialect: '风行天上小有积蓄，象征力量渐长但尚未壮大。得此卦者应注重修养德行，不可轻举妄动、图谋大事。'
        },
        interpretations: []
    },
    {
        id: 10, upper: 1, lower: 2, name: '天泽履', symbol: '䷉',
        summary: {
            text: '上天下泽，履。君子以辨上下、定民志。如履虎尾，须谨慎前行，守礼不妄。',
            northeastDialect: '人行走在虎尾之上，象征处境危险须谨慎行事。得此卦者应循规蹈矩，一步一步小心前进，不可冒险。'
        },
        interpretations: []
    },
    {
        id: 11, upper: 8, lower: 1, name: '地天泰', symbol: '䷊',
        summary: {
            text: '天地交，泰。后以财成天地之道，辅相天地之宜。上下交泰，万事亨通。',
            northeastDialect: '天地相交万物生，象征上下通达、诸事顺利。得此卦者做什么都会顺利，是难得的吉祥之卦。'
        },
        interpretations: []
    },
    {
        id: 12, upper: 1, lower: 8, name: '天地否', symbol: '䷋',
        summary: {
            text: '天地不交，否。君子以俭德辟难，不可荣以禄。上下阻塞，诸事不顺，宜退守。',
            northeastDialect: '天地不交互相阻隔，象征上下不通、诸事不顺。得此卦者应收敛退守，低调做人，不可有所作为。'
        },
        interpretations: []
    },
    {
        id: 13, upper: 1, lower: 3, name: '天火同人', symbol: '䷌',
        summary: {
            text: '天与火，同人。君子以类族辨物。志同道合，宜与人同心协力，光明正大。',
            northeastDialect: '天与火同气相求，象征志同道合、心往一处想。得此卦者应与志同道合之人携手合作，光明正大地行事。'
        },
        interpretations: []
    },
    {
        id: 14, upper: 3, lower: 1, name: '火天大有', symbol: '䷍',
        summary: {
            text: '火在天上，大有。君子以遏恶扬善，顺天休命。大有所得，主富贵昌盛，须谦和。',
            northeastDialect: '火在天上普照万物，象征富有丰盛、收获丰厚。得此卦者当有大的收获，但须保持谦逊，不可骄傲自满。'
        },
        interpretations: []
    },
    {
        id: 15, upper: 8, lower: 7, name: '地山谦', symbol: '䷎',
        summary: {
            text: '地中有山，谦。君子以裒多益寡，称物平施。谦逊有德，主无不利，福泽绵长。',
            northeastDialect: '山藏于地不显其高，象征谦逊自抑的美德。得此卦者越是谦虚越受人尊敬，做什么都会顺利。'
        },
        interpretations: []
    },
    {
        id: 16, upper: 4, lower: 8, name: '雷地豫', symbol: '䷏',
        summary: {
            text: '雷出地奋，豫。先王以作乐崇德，殷荐之上帝。顺时而动，主安乐喜悦，防逸乐。',
            northeastDialect: '雷声震动大地振奋，象征顺时而动、心情愉悦。得此卦者当前运势顺畅，但也不可沉迷享乐而荒废正事。'
        },
        interpretations: []
    },
    {
        id: 17, upper: 2, lower: 4, name: '泽雷随', symbol: '䷐',
        summary: {
            text: '泽中有雷，随。君子以向晦入宴息。随顺时势，宜随机应变，择善而从。',
            northeastDialect: '泽中有雷动静相随，象征顺势而变、随机应变。得此卦者应灵活处事，跟随时势调整方向，不可固执己见。'
        },
        interpretations: []
    },
    {
        id: 18, upper: 7, lower: 5, name: '山风蛊', symbol: '䷑',
        summary: {
            text: '山下有风，蛊。君子以振民育德。积弊需整治，宜革故鼎新，拨乱反正。',
            northeastDialect: '山下有风拂动，象征积弊需要整治革新。得此卦者应反思过往弊病，下决心革除旧习、拨乱反正。'
        },
        interpretations: []
    },
    {
        id: 19, upper: 8, lower: 2, name: '地泽临', symbol: '䷒',
        summary: {
            text: '泽上有地，临。君子以教思无穷，容保民无疆。君临督导，宜积极进取，把握时机。',
            northeastDialect: '泽上有地居高临下，象征亲临督导、积极进取。得此卦者应主动把握机会，积极推进，不可消极等待。'
        },
        interpretations: []
    },
    {
        id: 20, upper: 5, lower: 8, name: '风地观', symbol: '䷓',
        summary: {
            text: '风行地上，观。先王以省方观民设教。观察省视，宜审时度势，静观其变。',
            northeastDialect: '风行地上遍观万物，象征审时度势、观察分析。得此卦者应先观察形势再做决断，不可急于表态和行动。'
        },
        interpretations: []
    },
    {
        id: 21, upper: 3, lower: 4, name: '火雷噬嗑', symbol: '䷔',
        summary: {
            text: '雷电，噬嗑。先王以明罚敕法。咬合贯通，须明察决断，破除障碍。',
            northeastDialect: '雷电交加须明法纪，象征明察决断、破除障碍。得此卦者遇到阻碍应当机立断，依法依规处理。'
        },
        interpretations: []
    },
    {
        id: 22, upper: 7, lower: 3, name: '山火贲', symbol: '䷕',
        summary: {
            text: '山下有火，贲。君子以明庶政，无敢折狱。文饰装点，宜修饰外表，实质为本。',
            northeastDialect: '山下有火光芒映辉，象征文饰装点但不失本质。得此卦者应注重外在形象，但更要以实力内涵为本。'
        },
        interpretations: []
    },
    {
        id: 23, upper: 7, lower: 8, name: '山地剥', symbol: '䷖',
        summary: {
            text: '山附于地，剥。上以厚下安宅。剥落侵蚀，主阴盛阳衰，宜顺势待复。',
            northeastDialect: '山体依附于大地之上，象征阴气旺盛阳气被侵蚀。得此卦者当前运势低迷，应顺势退守，等待时机好转。'
        },
        interpretations: []
    },
    {
        id: 24, upper: 8, lower: 4, name: '地雷复', symbol: '䷗',
        summary: {
            text: '雷在地中，复。先王以至日闭关，商旅不行。一阳来复，主否极泰来，生机重现。',
            northeastDialect: '阳气复生深藏地下，象征否极泰来、重现生机。得此卦者运势正在好转，但应循序渐进，不可操之过急。'
        },
        interpretations: []
    },
    {
        id: 25, upper: 1, lower: 4, name: '天雷无妄', symbol: '䷘',
        summary: {
            text: '天下雷行，物与无妄。先王以茂对时，育万物。不妄动，宜守正道，顺其自然。',
            northeastDialect: '天下雷行万物有序，象征顺其自然、不妄作为。得此卦者应安守本分，按正道行事，不可轻举妄动惹是非。'
        },
        interpretations: []
    },
    {
        id: 26, upper: 7, lower: 1, name: '山天大畜', symbol: '䷙',
        summary: {
            text: '天在山中，大畜。君子以多识前言往行，以畜其德。大有蓄积，主厚积薄发。',
            northeastDialect: '天藏山中积蓄深厚，象征厚积薄发、蓄势待发。得此卦者平时应多积累才学和经验，关键时刻才能有所作为。'
        },
        interpretations: []
    },
    {
        id: 27, upper: 7, lower: 4, name: '山雷颐', symbol: '䷚',
        summary: {
            text: '山下有雷，颐。君子以慎言语，节饮食。颐养之象，宜修身养性，谨慎自持。',
            northeastDialect: '山下有雷震动须慎动，象征颐养身心、修身养性。得此卦者应注重自我修养，谨慎言语，节制饮食。'
        },
        interpretations: []
    },
    {
        id: 28, upper: 2, lower: 5, name: '泽风大过', symbol: '䷛',
        summary: {
            text: '泽灭木，大过。君子以独立不惧，遁世无闷。过度超常，须非常之举，慎之又慎。',
            northeastDialect: '泽水淹没树木栋梁，象征事态超常须非常之举。得此卦者面临重大考验，应独立担当、慎之又慎。'
        },
        interpretations: []
    },
    {
        id: 29, upper: 6, lower: 6, name: '坎为水', symbol: '䷜',
        summary: {
            text: '水洊至，习坎。君子以常德行，习教事。重险相连，主险难重重，须心诚信实。',
            northeastDialect: '河水接连不断涌来，象征险难重重、前路艰险。得此卦者须心诚意实、沉着应对，一步一步化解困难。'
        },
        interpretations: []
    },
    {
        id: 30, upper: 3, lower: 3, name: '离为火', symbol: '䷝',
        summary: {
            text: '明两作，离。大人以继明照于四方。光明附丽，主前程似锦，宜依附正道。',
            northeastDialect: '日月轮流照耀四方，象征光明附丽、前程似锦。得此卦者前途光明，但须选择正道依附，不可盲目行事。'
        },
        interpretations: []
    },
    {
        id: 31, upper: 2, lower: 7, name: '泽山咸', symbol: '䷞',
        summary: {
            text: '山上有泽，咸。君子以虚受人。感应相通，主情投意合，宜虚心待人。',
            northeastDialect: '山上有泽地气相通，象征感应相通、情投意合。得此卦者与人交往应以诚相待，虚心接纳他人意见。'
        },
        interpretations: []
    },
    {
        id: 32, upper: 4, lower: 5, name: '雷风恒', symbol: '䷟',
        summary: {
            text: '雷风，恒。君子以立不易方。恒久持守，主持之以恒，不可朝三暮四。',
            northeastDialect: '雷与风相辅相成恒久，象征持之以恒、坚持不懈。得此卦者做事应有恒心毅力，不可朝三暮四、半途而废。'
        },
        interpretations: []
    },
    {
        id: 33, upper: 1, lower: 7, name: '天山遁', symbol: '䷠',
        summary: {
            text: '天下有山，遁。君子以远小人，不恶而严。退避隐遁，宜急流勇退，明哲保身。',
            northeastDialect: '天下有山遁而不见，象征退避隐遁、明哲保身。得此卦者应适时退让，远离小人，保全自身以待良机。'
        },
        interpretations: []
    },
    {
        id: 34, upper: 4, lower: 1, name: '雷天大壮', symbol: '䷡',
        summary: {
            text: '雷在天上，大壮。君子以非礼弗履。阳气壮盛，主气势如虹，须守礼不妄。',
            northeastDialect: '雷声震动于天上壮盛，象征气势如虹、力量充沛。得此卦者气势强盛，但须守礼循规，不可恃强凌弱。'
        },
        interpretations: []
    },
    {
        id: 35, upper: 3, lower: 8, name: '火地晋', symbol: '䷢',
        summary: {
            text: '明出地上，晋。君子以自昭明德。光明上升，主前途光明，宜积极进取。',
            northeastDialect: '光明从大地上升起，象征前途光明、步步高升。得此卦者运势向上发展，应积极进取、把握机会。'
        },
        interpretations: []
    },
    {
        id: 36, upper: 8, lower: 3, name: '地火明夷', symbol: '䷣',
        summary: {
            text: '明入地中，明夷。君子以莅众，用晦而明。光明受损，主处境艰难，宜韬光养晦。',
            northeastDialect: '光明隐入地中受损伤，象征处境艰难、怀才不遇。得此卦者应收敛锋芒，韬光养晦，不可显露才华。'
        },
        interpretations: []
    },
    {
        id: 37, upper: 5, lower: 3, name: '风火家人', symbol: '䷤',
        summary: {
            text: '风自火出，家人。君子以言有物而行有恒。家道和睦，主内修齐家，正家风。',
            northeastDialect: '风从火中生出相依存，象征家庭和睦、家道兴旺。得此卦者应先把家庭内部事务理顺，方可对外发展。'
        },
        interpretations: []
    },
    {
        id: 38, upper: 3, lower: 2, name: '火泽睽', symbol: '䷥',
        summary: {
            text: '上火下泽，睽。君子以同而异。乖违背离，主事有分歧，宜求同存异。',
            northeastDialect: '上火下泽两相背离，象征意见不合、事有分歧。得此卦者应求同存异，各退一步，不可斤斤计较。'
        },
        interpretations: []
    },
    {
        id: 39, upper: 6, lower: 7, name: '水山蹇', symbol: '䷦',
        summary: {
            text: '山上有水，蹇。君子以反身修德。艰难险阻，主进退维谷，宜反躬自省。',
            northeastDialect: '山上有水流路艰难，象征进退维谷、处境困难。得此卦者应反躬自省，从自身找原因，不可怨天尤人。'
        },
        interpretations: []
    },
    {
        id: 40, upper: 4, lower: 6, name: '雷水解', symbol: '䷧',
        summary: {
            text: '雷雨作，解。君子以赦过宥罪。险难消解，主冰消瓦解，宜宽以待人。',
            northeastDialect: '雷雨交加险难消解，象征困境解除、冰消瓦解。得此卦者应放下过去的恩怨，以宽容之心重新开始。'
        },
        interpretations: []
    },
    {
        id: 41, upper: 7, lower: 2, name: '山泽损', symbol: '䷨',
        summary: {
            text: '山下有泽，损。君子以惩忿窒欲。减损克制，主有所舍才能有所得，宜节制。',
            northeastDialect: '山下有泽减损以益上，象征有所舍弃才能有所得。得此卦者应克制私欲，节制开支，舍小利方能成大事。'
        },
        interpretations: []
    },
    {
        id: 42, upper: 5, lower: 4, name: '风雷益', symbol: '䷩',
        summary: {
            text: '风雷，益。君子以见善则迁，有过则改。损上益下，主增益丰厚，宜积极行善。',
            northeastDialect: '风雷激荡损上以益下，象征积极行善、有所增益。得此卦者凡事皆有收获，但应见善思迁、有过则改。'
        },
        interpretations: []
    },
    {
        id: 43, upper: 2, lower: 1, name: '泽天夬', symbol: '䷪',
        summary: {
            text: '泽上于天，夬。君子以施禄及下，居德则忌。决断去除，主果敢行事，不可犹豫。',
            northeastDialect: '泽水高涨冲向天空，象征果断行事、去除阻碍。得此卦者面临抉择应当机立断，不可犹豫不决、拖泥带水。'
        },
        interpretations: []
    },
    {
        id: 44, upper: 1, lower: 5, name: '天风姤', symbol: '䷫',
        summary: {
            text: '天下有风，姤。后以施命诰四方。不期而遇，主事起突然，须慎防小人。',
            northeastDialect: '天下有风处处相遇，象征不期而遇、事出突然。得此卦者应对意外之事保持警惕，尤其注意防范小人暗算。'
        },
        interpretations: []
    },
    {
        id: 45, upper: 2, lower: 8, name: '泽地萃', symbol: '䷬',
        summary: {
            text: '泽上于地，萃。君子以除戎器，戒不虞。聚集会萃，主人才汇聚，宜聚众成事。',
            northeastDialect: '泽水聚于地中成湖，象征人才汇聚、众志成城。得此卦者应团结众人，齐心协力，方能克服困难成就事业。'
        },
        interpretations: []
    },
    {
        id: 46, upper: 8, lower: 5, name: '地风升', symbol: '䷭',
        summary: {
            text: '地中生木，升。君子以顺德，积小以高大。上升发展，主步步高升，循序渐进。',
            northeastDialect: '地中生出木苗向上长，象征循序渐进、步步高升。得此卦者运势稳步向上，应踏踏实实地积累，不可急于求成。'
        },
        interpretations: []
    },
    {
        id: 47, upper: 2, lower: 6, name: '泽水困', symbol: '䷮',
        summary: {
            text: '泽无水，困。君子以致命遂志。困顿窘迫，主处境艰难，须坚守志向不屈。',
            northeastDialect: '泽中无水困顿窘迫，象征处境艰难、资源匮乏。得此卦者虽身处困境，但不可丧失志气，应坚守志向以待转机。'
        },
        interpretations: []
    },
    {
        id: 48, upper: 6, lower: 5, name: '水风井', symbol: '䷯',
        summary: {
            text: '木上有水，井。君子以劳民劝相。井养不穷，主养而不竭，宜修德养民。',
            northeastDialect: '井中泉水养人不竭，象征修德养民、泽惠长远。得此卦者平时应多积累德行，终有用武之地惠及他人。'
        },
        interpretations: []
    },
    {
        id: 49, upper: 2, lower: 3, name: '泽火革', symbol: '䷰',
        summary: {
            text: '泽中有火，革。君子以治历明时。变革更新，主除旧布新，顺时而变。',
            northeastDialect: '泽中起火变革旧貌，象征除旧布新、顺时而变。得此卦者旧的模式已行不通，应勇于变革、开创新路。'
        },
        interpretations: []
    },
    {
        id: 50, upper: 3, lower: 5, name: '火风鼎', symbol: '䷱',
        summary: {
            text: '木上有火，鼎。君子以正位凝命。鼎新革故，主尊荣稳固，宜守正立新。',
            northeastDialect: '木上有火烹煮成食，象征鼎新革故、尊荣稳固。得此卦者已打开新局面，应找准自身位置、踏实经营。'
        },
        interpretations: []
    },
    {
        id: 51, upper: 4, lower: 4, name: '震为雷', symbol: '䷲',
        summary: {
            text: '洊雷，震。君子以恐惧修省。震动惊惧，主有惊无险，宜反省修身。',
            northeastDialect: '雷声接连不断地震动，象征有惊无险、警示反省。得此卦者虽受惊吓但无大碍，应借此反思自身不足。'
        },
        interpretations: []
    },
    {
        id: 52, upper: 7, lower: 7, name: '艮为山', symbol: '䷳',
        summary: {
            text: '兼山，艮。君子以思不出其位。止而不动，主适可而止，宜安分守己。',
            northeastDialect: '两山并立止而不行，象征适可而止、安分守己。得此卦者应知止知退，不该管的事不要插手，该停就停。'
        },
        interpretations: []
    },
    {
        id: 53, upper: 5, lower: 7, name: '风山渐', symbol: '䷴',
        summary: {
            text: '山上有木，渐。君子以居贤德善俗。循序渐进，主稳步发展，不可急于求成。',
            northeastDialect: '山上有木渐渐长成，象征循序渐进、稳步发展。得此卦者做事应一步一步来，稳扎稳打比急于求成更有利。'
        },
        interpretations: []
    },
    {
        id: 54, upper: 4, lower: 2, name: '雷泽归妹', symbol: '䷵',
        summary: {
            text: '雷上动泽，归妹。君子以永终知敝。婚嫁归宿，主事有定分，须慎终如始。',
            northeastDialect: '雷声震动泽中少女动，象征婚嫁归宿、事有定数。得此卦者须慎重对待既定之事，始终如一不可半途松懈。'
        },
        interpretations: []
    },
    {
        id: 55, upper: 4, lower: 3, name: '雷火丰', symbol: '䷶',
        summary: {
            text: '雷电皆至，丰。君子以折狱致刑。丰盛盛大，主如日中天，须防盛极而衰。',
            northeastDialect: '雷电齐来声势盛大，象征事业兴隆、如日中天。得此卦者正当鼎盛之时，但应警惕盛极而衰，不可得意忘形。'
        },
        interpretations: []
    },
    {
        id: 56, upper: 3, lower: 7, name: '火山旅', symbol: '䷷',
        summary: {
            text: '山上有火，旅。君子以明慎用刑，而不留狱。羁旅行役，主客居在外，宜谨慎谦和。',
            northeastDialect: '山上有火映照他乡，象征客居在外、羁旅奔波。得此卦者出门在外应低调谦和，谨言慎行，不可与人争执。'
        },
        interpretations: []
    },
    {
        id: 57, upper: 5, lower: 5, name: '巽为风', symbol: '䷸',
        summary: {
            text: '随风，巽。君子以申命行事。顺从入化，主谦逊行事，宜顺势而为。',
            northeastDialect: '风相随而行无孔不入，象征谦逊柔顺、顺势而为。得此卦者应放低姿态、顺应形势，不可过于刚硬固执。'
        },
        interpretations: []
    },
    {
        id: 58, upper: 2, lower: 2, name: '兑为泽', symbol: '䷹',
        summary: {
            text: '丽泽，兑。君子以朋友讲习。喜悦和说，主心情愉悦，宜广结善缘。',
            northeastDialect: '两泽相连相互滋润，象征心情愉悦、志同道合。得此卦者心情舒畅，应与良师益友多交流切磋、共同进步。'
        },
        interpretations: []
    },
    {
        id: 59, upper: 5, lower: 6, name: '风水涣', symbol: '䷺',
        summary: {
            text: '风行水上，涣。先王以享于帝立庙。涣散离析，主冰消瓦解，宜凝聚人心。',
            northeastDialect: '风行水上涣散分离，象征人心离散、需要凝聚。得此卦者应设法凝聚人心，避免团队力量涣散瓦解。'
        },
        interpretations: []
    },
    {
        id: 60, upper: 6, lower: 2, name: '水泽节', symbol: '䷻',
        summary: {
            text: '泽上有水，节。君子以制数度，议德行。节制有度，主量入为出，不可过度。',
            northeastDialect: '泽上有水蓄积有节，象征节制有度、量入为出。得此卦者凡事应把握分寸，不可过度挥霍，适可而止方长久。'
        },
        interpretations: []
    },
    {
        id: 61, upper: 5, lower: 2, name: '风泽中孚', symbol: '䷼',
        summary: {
            text: '泽上有风，中孚。君子以议狱缓死。中正诚信，主诚信感人，宜守信不欺。',
            northeastDialect: '泽上有风诚信感应，象征中正诚信、守信不欺。得此卦者为人应诚实守信，说到做到，以诚待人方能成事。'
        },
        interpretations: []
    },
    {
        id: 62, upper: 4, lower: 7, name: '雷山小过', symbol: '䷽',
        summary: {
            text: '山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。小有过越，主谨慎从事，可小不可大。',
            northeastDialect: '山上有雷小有震动，象征小过谨慎、不宜大事。得此卦者只宜做小规模的事，不可图谋大举，低调稳健方为上策。'
        },
        interpretations: []
    },
    {
        id: 63, upper: 6, lower: 3, name: '水火既济', symbol: '䷾',
        summary: {
            text: '水在火上，既济。君子以思患而预防之。事已成功，主守成防变，居安思危。',
            northeastDialect: '水在火上事已成功，象征守成防变、居安思危。得此卦者虽已取得成功，但不可松懈，应预防祸患、留有后手。'
        },
        interpretations: []
    },
    {
        id: 64, upper: 3, lower: 6, name: '火水未济', symbol: '䷿',
        summary: {
            text: '火在水上，未济。君子以慎辨物居方。事未成功，主前途未卜，宜审慎前行。',
            northeastDialect: '火在水上事未成功，象征前途未卜、尚须努力。得此卦者距离目标还有差距，切不可轻敌，应审慎前行、加把劲。'
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

// ==========================================================
// 大衍筮法（五十蓍草法）- 正宗周易起卦方法
// 流程：分二→挂一→揲四→归奇，三变得一爻，六爻十八变
// 结果：9=老阳(变), 8=少阴(不变), 7=少阳(不变), 6=老阴(变)
// ==========================================================

// 线性同余伪随机数生成器（使用时间戳作为种子）
function lcg(seed) {
    const a = 1103515245;
    const c = 12345;
    const m = Math.pow(2, 31);
    return (a * seed + c) % m;
}

// 大衍筮法三变得一爻（使用时间戳作为随机种子）
function dayanThreeChanges(timestamp) {
    let count = 49; // 大衍之数五十，其用四十有九
    let totalRemoved = 0;
    let seed = timestamp;
    
    // 第一变
    {
        seed = lcg(seed);
        const left = (seed % (count - 1)) + 1;
        const right = count - left;
        
        const hung = 1;
        let remLeft = left % 4;
        let remRight = (right - 1) % 4;
        
        remLeft = remLeft === 0 ? 4 : remLeft;
        remRight = remRight === 0 ? 4 : remRight;
        
        totalRemoved += hung + remLeft + remRight;
        count = 49 - totalRemoved;
    }
    
    // 第二变
    {
        seed = lcg(seed);
        const left = (seed % (count - 1)) + 1;
        const right = count - left;
        const hung = 1;
        let remLeft = left % 4;
        let remRight = (right - 1) % 4;
        remLeft = remLeft === 0 ? 4 : remLeft;
        remRight = remRight === 0 ? 4 : remRight;
        totalRemoved += hung + remLeft + remRight;
        count = 49 - totalRemoved;
    }
    
    // 第三变
    {
        seed = lcg(seed);
        const left = (seed % (count - 1)) + 1;
        const right = count - left;
        const hung = 1;
        let remLeft = left % 4;
        let remRight = (right - 1) % 4;
        remLeft = remLeft === 0 ? 4 : remLeft;
        remRight = remRight === 0 ? 4 : remRight;
        totalRemoved += hung + remLeft + remRight;
        count = 49 - totalRemoved;
    }
    
    const yaoValue = count / 4;
    
    return {
        value: yaoValue,
        isMoving: (yaoValue === 6 || yaoValue === 9),
        type: yaoValue === 9 ? '老阳' : (yaoValue === 6 ? '老阴' : (yaoValue === 8 ? '少阴' : '少阳'))
    };
}

// 大衍筮法完整起卦（六爻十八变）
function castGuaDayan(timestamp) {
    const yaoResults = [];
    let movingYao = 0;
    let baseSeed = timestamp || Date.now();
    
    // 六爻：从下往上数（初爻到上爻）
    for (let i = 1; i <= 6; i++) {
        const result = dayanThreeChanges(baseSeed + i * 1000000);
        yaoResults.push(result);
        
        // 记录第一个动爻位置
        if (result.isMoving && movingYao === 0) {
            movingYao = i;
        }
    }
    
    // 根据六爻结果计算上下卦
    // 下卦：初爻、二爻、三爻（取阴阳性，阳=1，阴=0）
    // 上卦：四爻、五爻、上爻
    let lowerBin = 0;
    let upperBin = 0;
    
    // 初爻（位置0）→ 最右位，二爻→中间位，三爻→最左位
    for (let i = 0; i < 3; i++) {
        const yao = yaoResults[i];
        // 阳爻（7/9）=1，阴爻（6/8）=0
        const bit = (yao.value === 7 || yao.value === 9) ? 1 : 0;
        lowerBin += bit * Math.pow(2, i);
    }
    
    for (let i = 3; i < 6; i++) {
        const yao = yaoResults[i];
        const bit = (yao.value === 7 || yao.value === 9) ? 1 : 0;
        upperBin += bit * Math.pow(2, i - 3);
    }
    
    const lower = binToNum[lowerBin];
    const upper = binToNum[upperBin];
    
    const original = findGuaByUpperLower(upper, lower);
    
    // 如果没有动爻，变卦等于本卦
    const changed = movingYao > 0 ? getChangedGua(upper, lower, movingYao) : original;
    
    return {
        upperTrigram: upper,
        lowerTrigram: lower,
        movingYao: movingYao,
        originalGua: original,
        changedGua: changed,
        yaoResults: yaoResults,
        method: 'dayan'
    };
}

// 浏览器环境 → 全局；Node 环境 → module.exports
if (typeof window !== 'undefined') {
    window.guaData = guaData;
    window.findGuaByUpperLower = findGuaByUpperLower;
    window.findGuaById = findGuaById;
    window.getChangedGua = getChangedGua;
    window.castGua = castGua;
    window.castGuaDayan = castGuaDayan;
    window.dayanThreeChanges = dayanThreeChanges;
    window.numToBin = numToBin;
    window.binToNum = binToNum;
    window.trigramName = trigramName;
    window.trigramSymbol = trigramSymbol;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        guaData, findGuaByUpperLower, findGuaById, getChangedGua, castGua,
        castGuaDayan, dayanThreeChanges,
        numToBin, binToNum, trigramName, trigramSymbol
    };
}
