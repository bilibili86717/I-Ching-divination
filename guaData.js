const guaData = [
    { id: 1, upper: 1, lower: 1, name: '乾为天', symbol: '䷀',
        summary: { text: '天行健，君子以自强不息。', northeastDialect: '天道刚健，自强不息。' },
        hexagramText: '元亨，利贞。', hexagramTranslation: '元始亨通，利于守正。',
        yaoTexts: [
            { position: 1, text: '初九：潜龙勿用。', translation: '潜藏的龙不可用。', interpretation: '时机未到，宜隐忍待机。' },
            { position: 2, text: '九二：见龙在田，利见大人。', translation: '龙出现在田野，利于见大人。', interpretation: '初露锋芒，宜寻求贵人。' },
            { position: 3, text: '九三：君子终日乾乾，夕惕若，厉无咎。', translation: '君子整日勤勉，夜晚警惕。', interpretation: '勤勉谨慎，可保无咎。' },
            { position: 4, text: '九四：或跃在渊，无咎。', translation: '龙或跃或在渊。', interpretation: '进退自如，灵活应对。' },
            { position: 5, text: '九五：飞龙在天，利见大人。', translation: '龙飞腾在天。', interpretation: '事业巅峰，大展宏图。' },
            { position: 6, text: '上九：亢龙有悔。', translation: '龙飞过高有悔。', interpretation: '盛极而衰，宜知止退。' }
        ]
    },
    { id: 2, upper: 8, lower: 8, name: '坤为地', symbol: '䷁',
        summary: { text: '地势坤，君子以厚德载物。', northeastDialect: '大地包容，厚德载物。' },
        hexagramText: '元亨，利牝马之贞。', hexagramTranslation: '元始亨通，利于母马守正。',
        yaoTexts: [
            { position: 1, text: '初六：履霜，坚冰至。', translation: '踩到霜，坚冰将至。', interpretation: '防患于未然。' },
            { position: 2, text: '六二：直、方、大，不习无不利。', translation: '正直方正广大。', interpretation: '品德端正，自然顺遂。' },
            { position: 3, text: '六三：含章可贞。或从王事，无成有终。', translation: '内含文采，守正。', interpretation: '含蓄内敛，终获善果。' },
            { position: 4, text: '六四：括囊，无咎无誉。', translation: '扎紧口袋。', interpretation: '谨慎收敛，不求名声。' },
            { position: 5, text: '六五：黄裳，元吉。', translation: '黄色衣裳，大吉。', interpretation: '居中得位，必获吉祥。' },
            { position: 6, text: '上六：龙战于野，其血玄黄。', translation: '龙在野外争斗。', interpretation: '阴盛阳衰，避免冲突。' }
        ]
    },
    { id: 3, upper: 6, lower: 4, name: '水雷屯', symbol: '䷂',
        summary: { text: '云雷屯，君子以经纶。', northeastDialect: '万事开头难，守正待时。' },
        hexagramText: '元亨，利贞。勿用有攸往。', hexagramTranslation: '元始亨通，利于守正。不宜前往。',
        yaoTexts: [
            { position: 1, text: '初九：磐桓，利居贞。', translation: '徘徊不前，利于居守。', interpretation: '初始艰难，宜固根基。' },
            { position: 2, text: '六二：屯如邅如，乘马班如。', translation: '艰难徘徊。', interpretation: '时机未到，耐心等待。' },
            { position: 3, text: '六三：即鹿无虞，惟入于林中。', translation: '逐鹿无向导。', interpretation: '盲目追求，不如放弃。' },
            { position: 4, text: '六四：乘马班如，求婚媾。往吉。', translation: '寻求婚配，前往吉。', interpretation: '时机成熟，主动进取。' },
            { position: 5, text: '九五：屯其膏。小贞吉，大贞凶。', translation: '囤积恩泽。', interpretation: '把握分寸，不可过分。' },
            { position: 6, text: '上六：乘马班如，泣血涟如。', translation: '血泪涟涟。', interpretation: '处境艰难，宜退守。' }
        ]
    },
    { id: 4, upper: 7, lower: 6, name: '山水蒙', symbol: '䷃',
        summary: { text: '山下出泉，君子以果行育德。', northeastDialect: '蒙昧初开，虚心求教。' },
        hexagramText: '亨。匪我求童蒙，童蒙求我。', hexagramTranslation: '亨通。童蒙求我。',
        yaoTexts: [
            { position: 1, text: '初六：发蒙，利用刑人。', translation: '启发蒙昧。', interpretation: '启蒙初期，树立规矩。' },
            { position: 2, text: '九二：包蒙，吉。纳妇吉。', translation: '包容蒙昧。', interpretation: '包容教导，家道兴旺。' },
            { position: 3, text: '六三：勿用取女，见金夫，不有躬。', translation: '不宜娶此女。', interpretation: '择人不善，谨慎选择。' },
            { position: 4, text: '六四：困蒙，吝。', translation: '困于蒙昧。', interpretation: '主动求教，摆脱困境。' },
            { position: 5, text: '六五：童蒙，吉。', translation: '幼稚蒙昧，吉。', interpretation: '虚心好学，终获吉祥。' },
            { position: 6, text: '上九：击蒙，不利为寇。', translation: '打击蒙昧。', interpretation: '刚猛施教，只宜防守。' }
        ]
    },
    { id: 5, upper: 6, lower: 1, name: '水天需', symbol: '䷄',
        summary: { text: '云上于天，君子以饮食宴乐。', northeastDialect: '时机未至，耐心等待。' },
        hexagramText: '有孚，光亨，贞吉。利涉大川。', hexagramTranslation: '有诚信，光明亨通。',
        yaoTexts: [
            { position: 1, text: '初九：需于郊，利用恒。', translation: '郊外等待，保持恒心。', interpretation: '等待初期，安于现状。' },
            { position: 2, text: '九二：需于沙，小有言，终吉。', translation: '沙滩等待，小有言语。', interpretation: '坚持下去终会吉祥。' },
            { position: 3, text: '九三：需于泥，致寇至。', translation: '泥泞中等待，招寇。', interpretation: '处境危险，谨慎防范。' },
            { position: 4, text: '六四：需于血，出自穴。', translation: '血泊中等待，脱困。', interpretation: '历经艰险，等待转机。' },
            { position: 5, text: '九五：需于酒食，贞吉。', translation: '酒食中等待。', interpretation: '时机成熟，安享成果。' },
            { position: 6, text: '上六：入于穴，有不速之客三人来。', translation: '不速之客来到。', interpretation: '意外之客，恭敬款待。' }
        ]
    },
    { id: 6, upper: 1, lower: 6, name: '天水讼', symbol: '䷅',
        summary: { text: '天与水违行，君子以作事谋始。', northeastDialect: '争讼之象，慎始慎终。' },
        hexagramText: '有孚窒惕，中吉，终凶。', hexagramTranslation: '有诚信但受阻。',
        yaoTexts: [
            { position: 1, text: '初六：不永所事，小有言，终吉。', translation: '不纠缠争端。', interpretation: '避免长久争讼。' },
            { position: 2, text: '九二：不克讼，归而逋。', translation: '争讼不胜，逃亡。', interpretation: '主动退让，保全自身。' },
            { position: 3, text: '六三：食旧德，贞厉，终吉。', translation: '安享旧德。', interpretation: '安于现状，不宜强求。' },
            { position: 4, text: '九四：不克讼，复即命。', translation: '回复天命，改变态度。', interpretation: '顺应天命，安分守己。' },
            { position: 5, text: '九五：讼，元吉。', translation: '争讼，大吉。', interpretation: '居中得位，主持公道。' },
            { position: 6, text: '上九：或锡之鞶带，终朝三褫之。', translation: '一日三夺。', interpretation: '争讼虽胜，终遭贬黜。' }
        ]
    },
    { id: 7, upper: 8, lower: 6, name: '地水师', symbol: '䷆',
        summary: { text: '地中有水，君子以容民畜众。', northeastDialect: '兴兵用众，择良将。' },
        hexagramText: '贞，丈人吉，无咎。', hexagramTranslation: '守正，老成之人吉。',
        yaoTexts: [
            { position: 1, text: '初六：师出以律，否臧凶。', translation: '军队出动要有纪律。', interpretation: '纪律严明，否则凶险。' },
            { position: 2, text: '九二：在师中，吉，无咎。', translation: '在军队中，吉。', interpretation: '得到信任，忠心耿耿。' },
            { position: 3, text: '六三：师或舆尸，凶。', translation: '军队载尸而归。', interpretation: '指挥不当，盲目冒进。' },
            { position: 4, text: '六四：师左次，无咎。', translation: '军队驻扎。', interpretation: '谨慎行事，不急于进攻。' },
            { position: 5, text: '六五：田有禽，长子帅师。', translation: '长子率军。', interpretation: '用人得当，不可听信小人。' },
            { position: 6, text: '上六：大君有命，开国承家。', translation: '功成名就，论功行赏。', interpretation: '小人勿用。' }
        ]
    },
    { id: 8, upper: 6, lower: 8, name: '水地比', symbol: '䷇',
        summary: { text: '地上有水，先王以建万国亲诸侯。', northeastDialect: '亲比相助，团结协作。' },
        hexagramText: '吉。原筮，元永贞，无咎。', hexagramTranslation: '吉祥，元始永贞。',
        yaoTexts: [
            { position: 1, text: '初六：有孚比之，无咎。', translation: '诚信亲比。', interpretation: '广结善缘，终获吉祥。' },
            { position: 2, text: '六二：比之自内，贞吉。', translation: '内部亲比。', interpretation: '搞好内部团结。' },
            { position: 3, text: '六三：比之匪人。', translation: '亲比非人。', interpretation: '交友不慎，必有后患。' },
            { position: 4, text: '六四：外比之，贞吉。', translation: '向外亲比。', interpretation: '与外部建立良好关系。' },
            { position: 5, text: '九五：显比，王用三驱。', translation: '光明正大亲比。', interpretation: '中正无私，以德服人。' },
            { position: 6, text: '上六：比之无首，凶。', translation: '亲比无首。', interpretation: '群龙无首，必有凶险。' }
        ]
    },
    { id: 9, upper: 5, lower: 1, name: '风天小畜', symbol: '䷈',
        summary: { text: '风行天上，君子以懿文德。', northeastDialect: '小有积蓄，蓄养德行。' },
        hexagramText: '亨。密云不雨，自我西郊。', hexagramTranslation: '亨通，密云不雨。',
        yaoTexts: [
            { position: 1, text: '初九：复自道，何其咎，吉。', translation: '回归正道。', interpretation: '回归正道，吉祥。' },
            { position: 2, text: '九二：牵复，吉。', translation: '牵连而返。', interpretation: '相互扶持，吉祥。' },
            { position: 3, text: '九三：舆说辐，夫妻反目。', translation: '车辐脱落。', interpretation: '关系破裂，谨慎行事。' },
            { position: 4, text: '六四：有孚，血去惕出。', translation: '诚信化解危机。', interpretation: '保持警惕，可保无咎。' },
            { position: 5, text: '九五：有孚挛如，富以其邻。', translation: '诚信相连，共同富裕。', interpretation: '互利共赢。' },
            { position: 6, text: '上九：既雨既处，尚德载。', translation: '雨过天晴。', interpretation: '时机已过，安守现状。' }
        ]
    },
    { id: 10, upper: 1, lower: 2, name: '天泽履', symbol: '䷉',
        summary: { text: '上天下泽，君子以辨上下定民志。', northeastDialect: '如履虎尾，谨慎前行。' },
        hexagramText: '履虎尾，不咥人，亨。', hexagramTranslation: '踩到虎尾，虎不咬人。',
        yaoTexts: [
            { position: 1, text: '初九：素履，往无咎。', translation: '朴素前行。', interpretation: '脚踏实地，前行无咎。' },
            { position: 2, text: '九二：履道坦坦，幽人贞吉。', translation: '道路平坦。', interpretation: '处境平顺，守正则吉。' },
            { position: 3, text: '六三：眇能视，跛能履，履虎尾，咥人凶。', translation: '能力不足，履虎尾。', interpretation: '盲目行事，必有凶险。' },
            { position: 4, text: '九四：履虎尾，愬愬，终吉。', translation: '恐惧警惕。', interpretation: '谨慎行事，终获吉祥。' },
            { position: 5, text: '九五：夬履，贞厉。', translation: '决断前行。', interpretation: '刚愎自用，虽守正仍危。' },
            { position: 6, text: '上九：视履考祥，其旋元吉。', translation: '审视行为，回归本原。', interpretation: '总结经验，大吉。' }
        ]
    },
    { id: 11, upper: 8, lower: 1, name: '地天泰', symbol: '䷊',
        summary: { text: '天地交，后以财成天地之道。', northeastDialect: '上下交泰，万事亨通。' },
        hexagramText: '小往大来，吉，亨。', hexagramTranslation: '小去大来，吉祥。',
        yaoTexts: [
            { position: 1, text: '初九：拔茅茹，以其汇，征吉。', translation: '拔茅茹，出征吉。', interpretation: '顺势而为，出征必吉。' },
            { position: 2, text: '九二：包荒，用冯河。', translation: '包容广阔，徒步过河。', interpretation: '宽宏大量，勇往直前。' },
            { position: 3, text: '九三：无平不陂，无往不复。', translation: '物极必反。', interpretation: '居安思危，终获福报。' },
            { position: 4, text: '六四：翩翩，不富以其邻。', translation: '不贪富贵，与邻亲近。', interpretation: '诚信待人，自得其乐。' },
            { position: 5, text: '六五：帝乙归妹，以祉元吉。', translation: '帝乙嫁女。', interpretation: '婚配得当，大吉。' },
            { position: 6, text: '上六：城复于隍，勿用师。', translation: '城墙倒塌。', interpretation: '盛极而衰，宜退守。' }
        ]
    },
    { id: 12, upper: 1, lower: 8, name: '天地否', symbol: '䷋',
        summary: { text: '天地不交，君子以俭德辟难。', northeastDialect: '上下阻塞，诸事不顺。' },
        hexagramText: '否之匪人，不利君子贞。', hexagramTranslation: '闭塞不通，不利于守正。',
        yaoTexts: [
            { position: 1, text: '初六：拔茅茹，以其汇，贞吉。', translation: '守正吉祥。', interpretation: '团结同道，守正不阿。' },
            { position: 2, text: '六二：包承，小人吉，大人否。', translation: '包容奉承。', interpretation: '小人得势，大人宜隐忍。' },
            { position: 3, text: '六三：包羞。', translation: '包容羞辱。', interpretation: '忍辱负重，等待时机。' },
            { position: 4, text: '九四：有命，无咎，畴离祉。', translation: '顺应天命，众人得福。', interpretation: '与众人同心。' },
            { position: 5, text: '九五：休否，大人吉。', translation: '休止闭塞。', interpretation: '居安思危，可保平安。' },
            { position: 6, text: '上九：倾否，先否后喜。', translation: '倾覆闭塞。', interpretation: '否极泰来，终获喜悦。' }
        ]
    },
    { id: 13, upper: 1, lower: 3, name: '天火同人', symbol: '䷌',
        summary: { text: '天与火，君子以类族辨物。', northeastDialect: '志同道合，同心协力。' },
        hexagramText: '同人于野，亨。利涉大川。', hexagramTranslation: '郊外同人，亨通。',
        yaoTexts: [
            { position: 1, text: '初九：同人于门，无咎。', translation: '门内同人。', interpretation: '坦诚相待，无咎。' },
            { position: 2, text: '六二：同人于宗，吝。', translation: '宗族同人。', interpretation: '心胸狭隘，难以成事。' },
            { position: 3, text: '九三：伏戎于莽，三岁不兴。', translation: '埋伏军队。', interpretation: '心怀敌意，终难成事。' },
            { position: 4, text: '九四：乘其墉，弗克攻，吉。', translation: '知难而退。', interpretation: '不强行进攻，可获吉祥。' },
            { position: 5, text: '九五：同人，先号咷而后笑。', translation: '先哭后笑。', interpretation: '历经艰难，终获胜利。' },
            { position: 6, text: '上九：同人于郊，无悔。', translation: '郊野同人。', interpretation: '胸怀广阔，没有悔恨。' }
        ]
    },
    { id: 14, upper: 3, lower: 1, name: '火天大有', symbol: '䷍',
        summary: { text: '火在天上，君子以遏恶扬善。', northeastDialect: '大有所得，保持谦和。' },
        hexagramText: '元亨。', hexagramTranslation: '元始亨通。',
        yaoTexts: [
            { position: 1, text: '初九：无交害，匪咎，艰则无咎。', translation: '不与人交恶。', interpretation: '不与人交恶，坚守无咎。' },
            { position: 2, text: '九二：大车以载，有攸往，无咎。', translation: '大车装载。', interpretation: '担当重任，前往无咎。' },
            { position: 3, text: '九三：公用亨于天子，小人弗克。', translation: '公侯进献。', interpretation: '地位尊贵，小人不宜。' },
            { position: 4, text: '九四：匪其彭，无咎。', translation: '不自大。', interpretation: '保持谦逊，可保无咎。' },
            { position: 5, text: '六五：厥孚交如，威如，吉。', translation: '诚信相交，有威严。', interpretation: '诚信威严，必获吉祥。' },
            { position: 6, text: '上九：自天祐之，吉无不利。', translation: '上天保佑。', interpretation: '顺天应人，万事大吉。' }
        ]
    },
    { id: 15, upper: 8, lower: 7, name: '地山谦', symbol: '䷎',
        summary: { text: '地中有山，君子以裒多益寡。', northeastDialect: '谦逊有德，无往不利。' },
        hexagramText: '亨。君子有终。', hexagramTranslation: '亨通，君子有好结果。',
        yaoTexts: [
            { position: 1, text: '初六：谦谦君子，用涉大川，吉。', translation: '极其谦逊。', interpretation: '非常谦逊，可担重任。' },
            { position: 2, text: '六二：鸣谦，贞吉。', translation: '谦虚有名声。', interpretation: '守正不骄，吉祥。' },
            { position: 3, text: '九三：劳谦，君子有终，吉。', translation: '勤劳谦逊。', interpretation: '勤劳谦虚，终获善果。' },
            { position: 4, text: '六四：无不利，撝谦。', translation: '发挥谦逊。', interpretation: '处处谦逊，无往不利。' },
            { position: 5, text: '六五：不富以其邻，利用侵伐。', translation: '以德服人。', interpretation: '虽不富有但得人心。' },
            { position: 6, text: '上六：鸣谦，利用行师。', translation: '谦逊有声望。', interpretation: '用兵有道，可征伐四方。' }
        ]
    },
    { id: 16, upper: 4, lower: 8, name: '雷地豫', symbol: '䷏',
        summary: { text: '雷出地奋，先王以作乐崇德。', northeastDialect: '顺时而动，防逸乐。' },
        hexagramText: '利建侯行师。', hexagramTranslation: '利于建侯出兵。',
        yaoTexts: [
            { position: 1, text: '初六：鸣豫，凶。', translation: '因享乐有名声。', interpretation: '沉迷享乐，必有凶险。' },
            { position: 2, text: '六二：介于石，不终日，贞吉。', translation: '坚如磐石。', interpretation: '坚定不移，当机立断。' },
            { position: 3, text: '六三：盱豫，悔。迟有悔。', translation: '张目享乐。', interpretation: '贪图享乐，必生悔恨。' },
            { position: 4, text: '九四：由豫，大有得。', translation: '顺应时势，大有收获。', interpretation: '广结善缘。' },
            { position: 5, text: '六五：贞疾，恒不死。', translation: '守正有疾。', interpretation: '守正虽有疾，不会危及生命。' },
            { position: 6, text: '上六：冥豫，成有渝，无咎。', translation: '昏冥享乐。', interpretation: '及时改变，没有过错。' }
        ]
    },
    { id: 17, upper: 2, lower: 4, name: '泽雷随', symbol: '䷐',
        summary: { text: '泽中有雷，君子以向晦入宴息。', northeastDialect: '随顺时势，随机应变。' },
        hexagramText: '元亨，利贞，无咎。', hexagramTranslation: '元始亨通，利于守正。',
        yaoTexts: [
            { position: 1, text: '初九：官有渝，贞吉。出门交有功。', translation: '官职变化。', interpretation: '顺应变化，积极交往。' },
            { position: 2, text: '六二：系小子，失丈夫。', translation: '系住小子，失去丈夫。', interpretation: '因小失大，得不偿失。' },
            { position: 3, text: '六三：系丈夫，失小子。', translation: '系住丈夫，失去小子。', interpretation: '抓住主要矛盾。' },
            { position: 4, text: '九四：随有获，贞凶。', translation: '随从有所获。', interpretation: '保持清醒，明辨是非。' },
            { position: 5, text: '九五：孚于嘉，吉。', translation: '诚信于美好。', interpretation: '心怀美好，诚实守信。' },
            { position: 6, text: '上六：拘系之，乃从维之。', translation: '被束缚。', interpretation: '寻求解脱之道。' }
        ]
    },
    { id: 18, upper: 7, lower: 5, name: '山风蛊', symbol: '䷑',
        summary: { text: '山下有风，君子以振民育德。', northeastDialect: '积弊需整治，革故鼎新。' },
        hexagramText: '元亨。利涉大川。', hexagramTranslation: '元始亨通，利于渡河。',
        yaoTexts: [
            { position: 1, text: '初六：干父之蛊，有子，考无咎。', translation: '整治父弊。', interpretation: '子承父业，整治积弊。' },
            { position: 2, text: '九二：干母之蛊，不可贞。', translation: '整治母弊。', interpretation: '整治方式因人而异。' },
            { position: 3, text: '九三：干父之蛊，小有悔，无大咎。', translation: '整治父弊，小有悔。', interpretation: '整治难免有失误。' },
            { position: 4, text: '六四：裕父之蛊，往见吝。', translation: '宽容父弊。', interpretation: '宽容难以解决问题。' },
            { position: 5, text: '六五：干父之蛊，用誉。', translation: '整治父弊，得赞誉。', interpretation: '方法得当，获得称赞。' },
            { position: 6, text: '上九：不事王侯，高尚其事。', translation: '不侍奉王侯。', interpretation: '超脱世俗，坚守正道。' }
        ]
    },
    { id: 19, upper: 8, lower: 2, name: '地泽临', symbol: '䷒',
        summary: { text: '泽上有地，君子以教思无穷。', northeastDialect: '君临督导，积极进取。' },
        hexagramText: '元亨，利贞。至于八月有凶。', hexagramTranslation: '元始亨通，八月有凶。',
        yaoTexts: [
            { position: 1, text: '初九：咸临，贞吉。', translation: '感化临视。', interpretation: '以感化之道待人。' },
            { position: 2, text: '九二：咸临，吉，无不利。', translation: '感化临视。', interpretation: '居中得位，感化众人。' },
            { position: 3, text: '六三：甘临，无攸利。', translation: '甜言蜜语临视。', interpretation: '虚情假意，没有好处。' },
            { position: 4, text: '六四：至临，无咎。', translation: '亲自临视。', interpretation: '亲力亲为，没有过错。' },
            { position: 5, text: '六五：知临，大君之宜，吉。', translation: '明智临视。', interpretation: '知人善任，吉祥。' },
            { position: 6, text: '上六：敦临，吉，无咎。', translation: '敦厚临视。', interpretation: '敦厚诚恳，以身作则。' }
        ]
    },
    { id: 20, upper: 5, lower: 8, name: '风地观', symbol: '䷓',
        summary: { text: '风行地上，先王以省方观民设教。', northeastDialect: '审时度势，静观其变。' },
        hexagramText: '盥而不荐，有孚颙若。', hexagramTranslation: '祭祀前洗手，诚信恭敬。',
        yaoTexts: [
            { position: 1, text: '初六：童观，小人无咎，君子吝。', translation: '幼稚观察。', interpretation: '见识浅薄，君子不宜。' },
            { position: 2, text: '六二：窥观，利女贞。', translation: '从缝隙中观察。', interpretation: '所见有限，守正不妄动。' },
            { position: 3, text: '六三：观我生，进退。', translation: '观察自己，决定进退。', interpretation: '自我反省，审时度势。' },
            { position: 4, text: '六四：观国之光，利用宾于王。', translation: '观察国家光辉。', interpretation: '见多识广，可辅佐君王。' },
            { position: 5, text: '九五：观我生，君子无咎。', translation: '观察自己。', interpretation: '修身养性，君子无咎。' },
            { position: 6, text: '上九：观其生，君子无咎。', translation: '观察他人。', interpretation: '取长补短，君子无咎。' }
        ]
    },
    { id: 21, upper: 3, lower: 4, name: '火雷噬嗑', symbol: '䷔',
        summary: { text: '雷电，先王以明罚敕法。', northeastDialect: '明察决断，破除障碍。' },
        hexagramText: '亨。利用狱。', hexagramTranslation: '亨通，利于用刑狱。',
        yaoTexts: [
            { position: 1, text: '初九：屦校灭趾，无咎。', translation: '脚上戴刑具。', interpretation: '小惩大诫，防微杜渐。' },
            { position: 2, text: '六二：噬肤灭鼻，无咎。', translation: '咬皮肤。', interpretation: '依法惩处，虽严但正当。' },
            { position: 3, text: '六三：噬腊肉，遇毒，小吝，无咎。', translation: '咬腊肉遇毒。', interpretation: '处理棘手问题。' },
            { position: 4, text: '九四：噬干胏，得金矢。', translation: '咬骨头得金箭。', interpretation: '克服困难，获得宝物。' },
            { position: 5, text: '六五：噬干肉，得黄金。', translation: '咬干肉得黄金。', interpretation: '获得珍贵之物。' },
            { position: 6, text: '上九：何校灭耳，凶。', translation: '肩上扛刑具。', interpretation: '罪大恶极，受到严惩。' }
        ]
    },
    { id: 22, upper: 7, lower: 3, name: '山火贲', symbol: '䷕',
        summary: { text: '山下有火，君子以明庶政。', northeastDialect: '文饰装点，实质为本。' },
        hexagramText: '亨。小利有攸往。', hexagramTranslation: '亨通，小有好处。',
        yaoTexts: [
            { position: 1, text: '初九：贲其趾，舍车而徒。', translation: '装饰脚趾。', interpretation: '注重外表，过于讲究。' },
            { position: 2, text: '六二：贲其须。', translation: '装饰胡须。', interpretation: '修饰次要之处。' },
            { position: 3, text: '九三：贲如濡如，永贞吉。', translation: '装饰润泽。', interpretation: '内外兼修，永守正道。' },
            { position: 4, text: '六四：贲如皤如，白马翰如。', translation: '装饰洁白。', interpretation: '纯洁无瑕，美好姻缘。' },
            { position: 5, text: '六五：贲于丘园，束帛戋戋。', translation: '装饰山丘园林。', interpretation: '朴实无华，礼轻情意重。' },
            { position: 6, text: '上九：白贲，无咎。', translation: '白色装饰。', interpretation: '返璞归真，朴实无华。' }
        ]
    },
    { id: 23, upper: 7, lower: 8, name: '山地剥', symbol: '䷖',
        summary: { text: '山附于地，上以厚下安宅。', northeastDialect: '阴盛阳衰，顺势待复。' },
        hexagramText: '不利有攸往。', hexagramTranslation: '不利于前往。',
        yaoTexts: [
            { position: 1, text: '初六：剥床以足，蔑贞凶。', translation: '剥落床脚。', interpretation: '根基受损，凶险。' },
            { position: 2, text: '六二：剥床以辨，蔑贞凶。', translation: '剥落床板。', interpretation: '形势恶化，凶险。' },
            { position: 3, text: '六三：剥之，无咎。', translation: '剥落它。', interpretation: '顺应时势，主动剥落。' },
            { position: 4, text: '六四：剥床以肤，凶。', translation: '剥落到床面。', interpretation: '危及根本，凶险。' },
            { position: 5, text: '六五：贯鱼以宫人宠。', translation: '宫人得宠。', interpretation: '以柔克刚，无不利。' },
            { position: 6, text: '上九：硕果不食，君子得舆。', translation: '大果实不食。', interpretation: '保存实力，君子得助。' }
        ]
    },
    { id: 24, upper: 8, lower: 4, name: '地雷复', symbol: '䷗',
        summary: { text: '雷在地中，先王以至日闭关。', northeastDialect: '否极泰来，生机重现。' },
        hexagramText: '亨。出入无疾，朋来无咎。', hexagramTranslation: '亨通，朋友来无咎。',
        yaoTexts: [
            { position: 1, text: '初九：不远复，无祗悔，元吉。', translation: '走不远就返回。', interpretation: '迷途知返，大吉。' },
            { position: 2, text: '六二：休复，吉。', translation: '休止而返。', interpretation: '停止错误，回归正道。' },
            { position: 3, text: '六三：频复，厉，无咎。', translation: '频繁返回。', interpretation: '反复无常，虽危但能改正。' },
            { position: 4, text: '六四：中行独复。', translation: '中途独自返回。', interpretation: '不随大流，独自回归。' },
            { position: 5, text: '六五：敦复，无悔。', translation: '敦厚返回。', interpretation: '诚恳回归，没有悔恨。' },
            { position: 6, text: '上六：迷复，凶，有灾眚。', translation: '迷惑不返。', interpretation: '执迷不悟，凶险至极。' }
        ]
    },
    { id: 25, upper: 1, lower: 4, name: '天雷无妄', symbol: '䷘',
        summary: { text: '天下雷行，先王以茂对时育万物。', northeastDialect: '不妄动，守正道。' },
        hexagramText: '元亨，利贞。其匪正有眚。', hexagramTranslation: '元始亨通，不守正有灾祸。',
        yaoTexts: [
            { position: 1, text: '初九：无妄往，吉。', translation: '不妄动前往。', interpretation: '不妄作为，吉祥。' },
            { position: 2, text: '六二：不耕获，不菑畲。', translation: '不耕种不收获。', interpretation: '不劳而获，不是正道。' },
            { position: 3, text: '六三：无妄之灾。', translation: '不妄为而受灾。', interpretation: '无辜受灾，谨慎防范。' },
            { position: 4, text: '九四：可贞，无咎。', translation: '可以守正。', interpretation: '坚守正道，可保无咎。' },
            { position: 5, text: '九五：无妄之疾，勿药有喜。', translation: '不妄为而生的病。', interpretation: '不治自愈，有喜事。' },
            { position: 6, text: '上九：无妄，行有眚。', translation: '行动有灾祸。', interpretation: '行动时机不对，有灾祸。' }
        ]
    },
    { id: 26, upper: 7, lower: 1, name: '山天大畜', symbol: '䷙',
        summary: { text: '天在山中，君子以多识前言往行。', northeastDialect: '大有蓄积，厚积薄发。' },
        hexagramText: '利贞。不家食，吉。', hexagramTranslation: '利于守正，不在家吃饭。',
        yaoTexts: [
            { position: 1, text: '初九：有厉，利已。', translation: '有危险，利于停止。', interpretation: '时机未到，宜停止。' },
            { position: 2, text: '九二：舆说輹。', translation: '车辐脱落。', interpretation: '前进受阻，暂停休整。' },
            { position: 3, text: '九三：良马逐，利艰贞。', translation: '良马奔驰。', interpretation: '积蓄力量，勤奋练习。' },
            { position: 4, text: '六四：童牛之牿，元吉。', translation: '童牛的角木。', interpretation: '防患于未然，大吉。' },
            { position: 5, text: '六五：豮豕之牙，吉。', translation: '阉割猪的牙。', interpretation: '去除锋芒，以柔克刚。' },
            { position: 6, text: '上九：何天之衢，亨。', translation: '承天之路。', interpretation: '得天相助，亨通无阻。' }
        ]
    },
    { id: 27, upper: 7, lower: 4, name: '山雷颐', symbol: '䷚',
        summary: { text: '山下有雷，君子以慎言语节饮食。', northeastDialect: '颐养身心，修身养性。' },
        hexagramText: '贞吉。观颐，自求口实。', hexagramTranslation: '守正吉祥，自己寻求口粮。',
        yaoTexts: [
            { position: 1, text: '初九：舍尔灵龟，观我朵颐，凶。', translation: '舍弃灵龟。', interpretation: '贪图眼前小利，凶险。' },
            { position: 2, text: '六二：颠颐，拂经。', translation: '颠倒颐养。', interpretation: '违背常理，强行求取。' },
            { position: 3, text: '六三：拂颐，贞凶。', translation: '违背颐养。', interpretation: '违背规律，长期不利。' },
            { position: 4, text: '六四：颠颐，吉。', translation: '颠倒颐养，吉。', interpretation: '以退为进，积极进取。' },
            { position: 5, text: '六五：拂经，居贞吉。', translation: '违背常理。', interpretation: '守正不妄动，不宜冒险。' },
            { position: 6, text: '上九：由颐，厉吉。', translation: '遵循颐养。', interpretation: '遵循规律，虽危但终吉。' }
        ]
    },
    { id: 28, upper: 2, lower: 5, name: '泽风大过', symbol: '䷛',
        summary: { text: '泽灭木，君子以独立不惧。', northeastDialect: '过度超常，非常之举。' },
        hexagramText: '栋桡。利有攸往，亨。', hexagramTranslation: '栋梁弯曲，利于前往。',
        yaoTexts: [
            { position: 1, text: '初六：藉用白茅，无咎。', translation: '用白茅铺垫。', interpretation: '谨慎行事，可保无咎。' },
            { position: 2, text: '九二：枯杨生稊，老夫得其女妻。', translation: '枯杨生芽。', interpretation: '枯木逢春，老当益壮。' },
            { position: 3, text: '九三：栋桡，凶。', translation: '栋梁弯曲。', interpretation: '支撑不住，凶险。' },
            { position: 4, text: '九四：栋隆，吉。', translation: '栋梁隆起。', interpretation: '力挽狂澜，虽吉但有困难。' },
            { position: 5, text: '六五：枯杨生华，老妇得其士夫。', translation: '枯杨开花。', interpretation: '回光返照，不值得称赞。' },
            { position: 6, text: '上六：过涉灭顶，凶，无咎。', translation: '涉水过深。', interpretation: '冒险过头，但出于正道。' }
        ]
    },
    { id: 29, upper: 6, lower: 6, name: '坎为水', symbol: '䷜',
        summary: { text: '水洊至，君子以常德行。', northeastDialect: '险难重重，心诚信实。' },
        hexagramText: '习坎，有孚维心亨。', hexagramTranslation: '重坎，有诚信亨通。',
        yaoTexts: [
            { position: 1, text: '初六：习坎，入于坎窞，凶。', translation: '进入坎穴深处。', interpretation: '深陷困境，凶险。' },
            { position: 2, text: '九二：坎有险，求小得。', translation: '坎中有险。', interpretation: '身处险境，不宜贪大。' },
            { position: 3, text: '六三：来之坎坎，险且枕。', translation: '来到坎坎之地。', interpretation: '进退两难，不可行动。' },
            { position: 4, text: '六四：樽酒簋贰，用缶。', translation: '一樽酒两簋饭。', interpretation: '以诚信待人，终获无咎。' },
            { position: 5, text: '九五：坎不盈，祗既平。', translation: '坎水不满。', interpretation: '危险消除，平安无事。' },
            { position: 6, text: '上六：系用徽纆，寘于丛棘。', translation: '绳索捆绑。', interpretation: '陷入困境，长期不得解脱。' }
        ]
    },
    { id: 30, upper: 3, lower: 3, name: '离为火', symbol: '䷝',
        summary: { text: '明两作，大人以继明照于四方。', northeastDialect: '光明附丽，前程似锦。' },
        hexagramText: '利贞，亨。畜牝牛吉。', hexagramTranslation: '利于守正，畜养母牛吉。',
        yaoTexts: [
            { position: 1, text: '初九：履错然，敬之无咎。', translation: '步履错乱。', interpretation: '恭敬谨慎，可保无咎。' },
            { position: 2, text: '六二：黄离，元吉。', translation: '黄色的光明。', interpretation: '中正之位，大吉大利。' },
            { position: 3, text: '九三：日昃之离，不鼓缶而歌。', translation: '太阳偏西。', interpretation: '年老力衰，宜乐天知命。' },
            { position: 4, text: '九四：突如其来如，焚如。', translation: '突然到来。', interpretation: '来势凶猛，谨慎防范。' },
            { position: 5, text: '六五：出涕沱若，戚嗟若，吉。', translation: '流泪滂沱。', interpretation: '居安思危，终获吉祥。' },
            { position: 6, text: '上九：王用出征，有嘉折首。', translation: '君王出征。', interpretation: '正义之师，无咎。' }
        ]
    },
    { id: 31, upper: 2, lower: 7, name: '泽山咸', symbol: '䷞',
        summary: { text: '山上有泽，君子以虚受人。', northeastDialect: '感应相通，虚心待人。' },
        hexagramText: '亨，利贞。取女吉。', hexagramTranslation: '亨通，娶妻吉祥。',
        yaoTexts: [
            { position: 1, text: '初六：咸其拇。', translation: '感应到脚趾。', interpretation: '感应初生，不宜行动。' },
            { position: 2, text: '六二：咸其腓，凶。居吉。', translation: '感应到小腿。', interpretation: '感应过急，安居则吉。' },
            { position: 3, text: '九三：咸其股，执其随。', translation: '感应到大腿。', interpretation: '盲目跟随他人。' },
            { position: 4, text: '九四：贞吉，悔亡。', translation: '守正吉祥。', interpretation: '心无杂念，朋友自来。' },
            { position: 5, text: '九五：咸其脢，无悔。', translation: '感应到后背。', interpretation: '感应深远，无所悔恨。' },
            { position: 6, text: '上六：咸其辅颊舌。', translation: '感应到面颊口舌。', interpretation: '言语感应，谨慎言辞。' }
        ]
    },
    { id: 32, upper: 4, lower: 5, name: '雷风恒', symbol: '䷟',
        summary: { text: '雷风，君子以立不易方。', northeastDialect: '恒久持守，持之以恒。' },
        hexagramText: '亨，无咎，利贞。', hexagramTranslation: '亨通，利于守正。',
        yaoTexts: [
            { position: 1, text: '初六：浚恒，贞凶。', translation: '深求恒久。', interpretation: '急于求成，凶险。' },
            { position: 2, text: '九二：悔亡。', translation: '悔恨消失。', interpretation: '守中持正。' },
            { position: 3, text: '九三：不恒其德，或承之羞。', translation: '不能恒久保持德行。', interpretation: '德行不恒，易受羞辱。' },
            { position: 4, text: '九四：田无禽。', translation: '田里没有禽兽。', interpretation: '徒劳无功。' },
            { position: 5, text: '六五：恒其德，贞。', translation: '恒久保持德行。', interpretation: '柔顺守正。' },
            { position: 6, text: '上六：振恒，凶。', translation: '震动不安。', interpretation: '动摇不定，凶险。' }
        ]
    },
    { id: 33, upper: 1, lower: 7, name: '天山遁', symbol: '䷠',
        summary: { text: '天下有山，君子以远小人。', northeastDialect: '退避隐遁，明哲保身。' },
        hexagramText: '亨，小利贞。', hexagramTranslation: '亨通，小利于守正。',
        yaoTexts: [
            { position: 1, text: '初六：遁尾，厉。', translation: '退避在后。', interpretation: '退避不及，处境危险。' },
            { position: 2, text: '六二：执之用黄牛之革。', translation: '用黄牛皮束缚。', interpretation: '意志坚定，无人能动摇。' },
            { position: 3, text: '九三：系遁，有疾厉。', translation: '受牵绊而退避。', interpretation: '退避有牵绊，宜退守。' },
            { position: 4, text: '九四：好遁，君子吉。', translation: '喜好退避。', interpretation: '君子知进退。' },
            { position: 5, text: '九五：嘉遁，贞吉。', translation: '嘉美退避。', interpretation: '功成身退，吉祥。' },
            { position: 6, text: '上九：肥遁，无不利。', translation: '宽裕退避。', interpretation: '退避从容，无所不利。' }
        ]
    },
    { id: 34, upper: 4, lower: 1, name: '雷天大壮', symbol: '䷡',
        summary: { text: '雷在天上，君子以非礼弗履。', northeastDialect: '气势如虹，守礼不妄。' },
        hexagramText: '利贞。', hexagramTranslation: '利于守正。',
        yaoTexts: [
            { position: 1, text: '初九：壮于趾，征凶。', translation: '脚趾强壮。', interpretation: '力量不足，贸然行动凶险。' },
            { position: 2, text: '九二：贞吉。', translation: '守正吉祥。', interpretation: '居中守正。' },
            { position: 3, text: '九三：小人用壮，君子用罔。', translation: '小人用壮力。', interpretation: '恃强冒进，反受其困。' },
            { position: 4, text: '九四：贞吉，悔亡。', translation: '守正吉祥。', interpretation: '冲破阻碍，力量充沛。' },
            { position: 5, text: '六五：丧羊于易，无悔。', translation: '丢失羊。', interpretation: '有所损失，但无大碍。' },
            { position: 6, text: '上六：羝羊触藩，不能退。', translation: '公羊触篱笆。', interpretation: '进退两难，坚持前行终吉。' }
        ]
    },
    { id: 35, upper: 3, lower: 8, name: '火地晋', symbol: '䷢',
        summary: { text: '明出地上，君子以自昭明德。', northeastDialect: '前途光明，积极进取。' },
        hexagramText: '康侯用锡马蕃庶。', hexagramTranslation: '康侯受赐众多马匹。',
        yaoTexts: [
            { position: 1, text: '初六：晋如摧如，贞吉。', translation: '前进又退缩。', interpretation: '进退两难，守正不阿。' },
            { position: 2, text: '六二：晋如愁如，贞吉。', translation: '前进又忧愁。', interpretation: '虽忧愁但守正，终获福报。' },
            { position: 3, text: '六三：众允，悔亡。', translation: '众人允许。', interpretation: '得到众人支持。' },
            { position: 4, text: '九四：晋如鼫鼠，贞厉。', translation: '前进如硕鼠。', interpretation: '行为不正，守正仍危。' },
            { position: 5, text: '六五：悔亡，失得勿恤。', translation: '得失不必忧虑。', interpretation: '不计得失，勇往直前。' },
            { position: 6, text: '上九：晋其角，维用伐邑。', translation: '前进到角上。', interpretation: '进取过头，守正有困难。' }
        ]
    },
    { id: 36, upper: 8, lower: 3, name: '地火明夷', symbol: '䷣',
        summary: { text: '明入地中，君子以莅众用晦而明。', northeastDialect: '光明受损，韬光养晦。' },
        hexagramText: '利艰贞。', hexagramTranslation: '利于艰难守正。',
        yaoTexts: [
            { position: 1, text: '初九：明夷于飞，垂其翼。', translation: '光明受伤而飞。', interpretation: '处境艰难，隐忍自守。' },
            { position: 2, text: '六二：明夷，夷于左股。', translation: '伤到左腿。', interpretation: '受伤但得救助。' },
            { position: 3, text: '九三：明夷于南狩，得其大首。', translation: '在南方狩猎。', interpretation: '虽有大获，不可急于求成。' },
            { position: 4, text: '六四：入于左腹，获明夷之心。', translation: '进入左腹。', interpretation: '洞悉内情，宜退避。' },
            { position: 5, text: '六五：箕子之明夷，利贞。', translation: '箕子的光明受伤。', interpretation: '隐忍守正。' },
            { position: 6, text: '上六：不明，晦。初登于天，后入于地。', translation: '不光明，昏暗。', interpretation: '盛极而衰，宜知止。' }
        ]
    },
    { id: 37, upper: 5, lower: 3, name: '风火家人', symbol: '䷤',
        summary: { text: '风自火出，君子以言有物而行有恒。', northeastDialect: '家道和睦，修齐治平。' },
        hexagramText: '利女贞。', hexagramTranslation: '利于女子守正。',
        yaoTexts: [
            { position: 1, text: '初九：闲有家，悔亡。', translation: '家中有法度。', interpretation: '家规严明，防患于未然。' },
            { position: 2, text: '六二：无攸遂，在中馈。', translation: '在家主持饮食。', interpretation: '女主内事，守正持家。' },
            { position: 3, text: '九三：家人嗃嗃，悔厉吉。', translation: '家人严厉。', interpretation: '家规严厉虽苦但终吉。' },
            { position: 4, text: '六四：富家，大吉。', translation: '使家庭富裕。', interpretation: '治家有方，家庭富裕。' },
            { position: 5, text: '九五：王假有家，勿恤，吉。', translation: '君王至于家中。', interpretation: '家国同治，以德服人。' },
            { position: 6, text: '上九：有孚威如，终吉。', translation: '有诚信有威严。', interpretation: '诚信威严并重。' }
        ]
    },
    { id: 38, upper: 3, lower: 2, name: '火泽睽', symbol: '䷥',
        summary: { text: '上火下泽，君子以同而异。', northeastDialect: '乖违背离，求同存异。' },
        hexagramText: '小事吉。', hexagramTranslation: '小事吉祥。',
        yaoTexts: [
            { position: 1, text: '初九：悔亡，丧马勿逐。', translation: '丢失马不要追。', interpretation: '失物勿追，自会归来。' },
            { position: 2, text: '九二：遇主于巷，无咎。', translation: '在巷中遇见主人。', interpretation: '不期而遇，无咎。' },
            { position: 3, text: '六三：见舆曳，其牛掣。', translation: '看见车被拖。', interpretation: '起初艰难，最终有成。' },
            { position: 4, text: '九四：睽孤，遇元夫。', translation: '遇见大丈夫。', interpretation: '孤独之中遇知己。' },
            { position: 5, text: '六五：悔亡，厥宗噬肤。', translation: '同宗吃肉。', interpretation: '与亲人共食。' },
            { position: 6, text: '上九：睽孤，见豕负涂。', translation: '看见猪在泥中。', interpretation: '疑心生暗鬼，释疑则吉。' }
        ]
    },
    { id: 39, upper: 6, lower: 7, name: '水山蹇', symbol: '䷦',
        summary: { text: '山上有水，君子以反身修德。', northeastDialect: '艰难险阻，反躬自省。' },
        hexagramText: '利西南，不利东北。', hexagramTranslation: '利于西南行。',
        yaoTexts: [
            { position: 1, text: '初六：往蹇来誉。', translation: '前往艰难，回来有誉。', interpretation: '前进困难，退守可获赞誉。' },
            { position: 2, text: '六二：王臣蹇蹇，匪躬之故。', translation: '王臣艰难重重。', interpretation: '为国事操劳，忠心耿耿。' },
            { position: 3, text: '九三：往蹇来反。', translation: '前往艰难，回来返归。', interpretation: '前进受阻，返回自守。' },
            { position: 4, text: '六四：往蹇来连。', translation: '前往艰难，回来联合。', interpretation: '联合他人共渡难关。' },
            { position: 5, text: '九五：大蹇朋来。', translation: '大难之中朋友来。', interpretation: '朋友相助，共渡难关。' },
            { position: 6, text: '上六：往蹇来硕，吉。', translation: '前往艰难，回来大有收获。', interpretation: '历经艰难，终获大收获。' }
        ]
    },
    { id: 40, upper: 4, lower: 6, name: '雷水解', symbol: '䷧',
        summary: { text: '雷雨作，君子以赦过宥罪。', northeastDialect: '险难消解，宽以待人。' },
        hexagramText: '利西南。无所往，其来复吉。', hexagramTranslation: '利于西南行。',
        yaoTexts: [
            { position: 1, text: '初六：无咎。', translation: '没有过错。', interpretation: '平稳度过。' },
            { position: 2, text: '九二：田获三狐，得黄矢。', translation: '猎获狐狸，得黄铜箭头。', interpretation: '除去隐患，获得宝物。' },
            { position: 3, text: '六三：负且乘，致寇至。', translation: '背着东西乘车。', interpretation: '德不配位，招致祸患。' },
            { position: 4, text: '九四：解而拇，朋至斯孚。', translation: '解开脚趾。', interpretation: '解除束缚，朋友诚信而来。' },
            { position: 5, text: '六五：君子维有解，吉。', translation: '君子有解脱。', interpretation: '君子解脱困境。' },
            { position: 6, text: '上六：公用射隼于高墉之上。', translation: '公侯射隼。', interpretation: '除掉祸害，大功告成。' }
        ]
    },
    { id: 41, upper: 7, lower: 2, name: '山泽损', symbol: '䷨',
        summary: { text: '山下有泽，君子以惩忿窒欲。', northeastDialect: '减损克制，有所舍有所得。' },
        hexagramText: '有孚，元吉，无咎。', hexagramTranslation: '有诚信，大吉。',
        yaoTexts: [
            { position: 1, text: '初九：已事遄往，无咎。', translation: '事已完毕迅速前往。', interpretation: '速去无咎。' },
            { position: 2, text: '九二：利贞，征凶。', translation: '利于守正，出征凶险。', interpretation: '守正则吉，妄动凶险。' },
            { position: 3, text: '六三：三人行，则损一人。', translation: '三人同行，损失一人。', interpretation: '人多则损，独往则得。' },
            { position: 4, text: '六四：损其疾，使遄有喜。', translation: '减损疾病。', interpretation: '除去弊病，迅速康复。' },
            { position: 5, text: '六五：或益之十朋之龟。', translation: '有人送十朋之龟。', interpretation: '意外之福，不可拒绝。' },
            { position: 6, text: '上九：弗损益之，无咎。', translation: '不减损也不增益。', interpretation: '不损不益，守正吉祥。' }
        ]
    },
    { id: 42, upper: 5, lower: 4, name: '风雷益', symbol: '䷩',
        summary: { text: '风雷，君子以见善则迁。', northeastDialect: '损上益下，积极行善。' },
        hexagramText: '利有攸往，利涉大川。', hexagramTranslation: '利于前往，利于渡河。',
        yaoTexts: [
            { position: 1, text: '初九：利用为大作，元吉。', translation: '利于做大事。', interpretation: '初始即吉，利于创业。' },
            { position: 2, text: '六二：或益之十朋之龟。', translation: '受赐十朋之龟。', interpretation: '受赐大宝，永守正道。' },
            { position: 3, text: '六三：益之用凶事，无咎。', translation: '增益用于凶事。', interpretation: '增益用于救灾。' },
            { position: 4, text: '六四：中行告公从。', translation: '中道报告公侯听从。', interpretation: '中道行事，公侯听从。' },
            { position: 5, text: '九五：有孚惠心，勿问元吉。', translation: '有诚信施惠。', interpretation: '诚信施惠，大吉。' },
            { position: 6, text: '上九：莫益之，或击之。', translation: '没有人增益，有人攻击。', interpretation: '贪得无厌，反遭攻击。' }
        ]
    },
    { id: 43, upper: 2, lower: 1, name: '泽天夬', symbol: '䷪',
        summary: { text: '泽上于天，君子以施禄及下。', northeastDialect: '决断去除，果敢行事。' },
        hexagramText: '扬于王庭，孚号有厉。', hexagramTranslation: '在王庭宣扬。',
        yaoTexts: [
            { position: 1, text: '初九：壮于前趾，往不胜为咎。', translation: '脚趾强壮。', interpretation: '贸然前进，不能取胜。' },
            { position: 2, text: '九二：惕号，莫夜有戎。', translation: '警惕号召。', interpretation: '警惕防范。' },
            { position: 3, text: '九三：壮于頄，有凶。', translation: '面颊强壮。', interpretation: '刚强过甚有凶险。' },
            { position: 4, text: '九四：臀无肤，其行次且。', translation: '臀部无皮。', interpretation: '处境艰难，进退两难。' },
            { position: 5, text: '九五：苋陆夬夬，中行无咎。', translation: '果断除草。', interpretation: '果断行事，中道无咎。' },
            { position: 6, text: '上六：无号，终有凶。', translation: '不号召。', interpretation: '独断专行，最终凶险。' }
        ]
    },
    { id: 44, upper: 1, lower: 5, name: '天风姤', symbol: '䷫',
        summary: { text: '天下有风，后以施命诰四方。', northeastDialect: '不期而遇，慎防小人。' },
        hexagramText: '女壮，勿用取女。', hexagramTranslation: '女子强壮，不宜娶。',
        yaoTexts: [
            { position: 1, text: '初六：系于金柅，贞吉。', translation: '系于金制的刹车。', interpretation: '初始相遇，宜守正道。' },
            { position: 2, text: '九二：包有鱼，无咎，不利宾。', translation: '厨房里有鱼。', interpretation: '自食其力，不宜待客。' },
            { position: 3, text: '九三：臀无肤，其行次且。', translation: '臀部无皮，行走困难。', interpretation: '处境艰难，不宜妄动。' },
            { position: 4, text: '九四：包无鱼，起凶。', translation: '厨房里没有鱼。', interpretation: '失去机遇，凶险将至。' },
            { position: 5, text: '九五：以杞包瓜，含章，有陨自天。', translation: '用杞叶包瓜。', interpretation: '内涵文采，天作之合。' },
            { position: 6, text: '上九：姤其角，吝，无咎。', translation: '遇到角落。', interpretation: '相遇于末，虽吝无咎。' }
        ]
    },
    { id: 45, upper: 8, lower: 2, name: '泽地萃', symbol: '䷬',
        summary: { text: '泽上于地，君子以除戎器，戒不虞。', northeastDialect: '聚集汇聚，团结一心。' },
        hexagramText: '亨。王假有庙，利见大人。', hexagramTranslation: '亨通。君王到宗庙祭祀。',
        yaoTexts: [
            { position: 1, text: '初六：有孚不终，乃乱乃萃。', translation: '诚信不能保持至终。', interpretation: '诚信不足，难成大事。' },
            { position: 2, text: '六二：引吉，无咎，孚乃利用禴。', translation: '接引吉祥，无咎。', interpretation: '以诚相待，可获吉祥。' },
            { position: 3, text: '六三：萃如嗟如，无攸利。', translation: '聚集叹息。', interpretation: '勉强聚合，无所利益。' },
            { position: 4, text: '九四：大吉，无咎。', translation: '大吉，无咎。', interpretation: '大吉大利，没有过错。' },
            { position: 5, text: '九五：萃有位，无咎，匪孚。', translation: '聚集而有其位。', interpretation: '得位但未孚众望。' },
            { position: 6, text: '上六：赍咨涕洟，无咎。', translation: '叹息流泪。', interpretation: '忧惧谨慎，可保无咎。' }
        ]
    },
    { id: 46, upper: 2, lower: 8, name: '地风升', symbol: '䷭',
        summary: { text: '地中生木，升。君子以顺德，积小以高大。', northeastDialect: '上升发展，步步高升。' },
        hexagramText: '元亨，用见大人，勿恤，南征吉。', hexagramTranslation: '元始亨通，利于见大人。',
        yaoTexts: [
            { position: 1, text: '初六：允升，大吉。', translation: '进而上升，大吉。', interpretation: '初升即吉，前途光明。' },
            { position: 2, text: '九二：孚乃利用禴，无咎。', translation: '诚信利于祭祀。', interpretation: '以诚相待，可获成功。' },
            { position: 3, text: '九三：升虚邑。', translation: '上升至空虚的城邑。', interpretation: '上升顺利，势如破竹。' },
            { position: 4, text: '六四：王用亨于岐山，吉。', translation: '君王在岐山祭祀。', interpretation: '得道多助，吉祥如意。' },
            { position: 5, text: '六五：贞吉，升阶。', translation: '守正吉祥，拾阶而上。', interpretation: '稳步上升，前程似锦。' },
            { position: 6, text: '上六：冥升，利于不息之贞。', translation: '幽冥中上升。', interpretation: '持续上升，永不停息。' }
        ]
    },
    { id: 47, upper: 6, lower: 2, name: '泽水困', symbol: '䷮',
        summary: { text: '泽无水，困。君子以致命遂志。', northeastDialect: '困境之中，坚守志向。' },
        hexagramText: '亨，贞，大人吉，无咎。', hexagramTranslation: '亨通，守正。',
        yaoTexts: [
            { position: 1, text: '初六：臀困于株木，入于幽谷。', translation: '臀部困于树木。', interpretation: '处境困厄，宜隐忍。' },
            { position: 2, text: '九二：困于酒食，朱绂方来。', translation: '困于酒食。', interpretation: '物质丰盛但精神困顿。' },
            { position: 3, text: '六三：困于石，据于蒺藜。', translation: '困于石头，倚靠蒺藜。', interpretation: '处境险恶，进退维谷。' },
            { position: 4, text: '九四：来徐徐，困于金车。', translation: '缓缓而来，困于金车。', interpretation: '虽有阻滞，终能脱困。' },
            { position: 5, text: '九五：劓刖，困于赤绂。', translation: '受刑困于赤色服饰。', interpretation: '深受困厄，意志坚定。' },
            { position: 6, text: '上六：困于葛藟，于臲卼。', translation: '困于藤蔓之中。', interpretation: '困境已极，动则有悔。' }
        ]
    },
    { id: 48, upper: 2, lower: 6, name: '水风井', symbol: '䷯',
        summary: { text: '木上有水，井。君子以劳民劝相。', northeastDialect: '井水养人，源源不断。' },
        hexagramText: '改邑不改井，无丧无得。', hexagramTranslation: '城邑可改，水井不变。',
        yaoTexts: [
            { position: 1, text: '初六：井泥不食，旧井无禽。', translation: '井底淤泥不能食用。', interpretation: '陈旧无用，宜更新。' },
            { position: 2, text: '九二：井谷射鲋，瓮敝漏。', translation: '井中射小鱼，瓦罐破漏。', interpretation: '才不适所，难有作为。' },
            { position: 3, text: '九三：井渫不食，为我心恻。', translation: '井已淘净却不饮用。', interpretation: '怀才不遇，令人惋惜。' },
            { position: 4, text: '六四：井甃，无咎。', translation: '修砌水井。', interpretation: '修养自身，可保无咎。' },
            { position: 5, text: '九五：井洌，寒泉食。', translation: '井水清澈，寒泉可食。', interpretation: '才德兼备，广济众人。' },
            { position: 6, text: '上六：井收勿幕，有孚元吉。', translation: '井水已收，不加盖。', interpretation: '大功告成，至诚大吉。' }
        ]
    },
    { id: 49, upper: 5, lower: 2, name: '泽火革', symbol: '䷰',
        summary: { text: '泽中有火，革。君子以治历明时。', northeastDialect: '变革创新，除旧布新。' },
        hexagramText: '巳日乃孚，元亨利贞，悔亡。', hexagramTranslation: '变革之日才有诚信。',
        yaoTexts: [
            { position: 1, text: '初九：巩用黄牛之革。', translation: '用黄牛皮革捆绑。', interpretation: '稳固基础，不宜躁动。' },
            { position: 2, text: '六二：巳日乃革之，征吉。', translation: '变革之日进行变革。', interpretation: '时机成熟，往之则吉。' },
            { position: 3, text: '九三：征凶，贞厉，革言三就。', translation: '出征凶险，守正危厉。', interpretation: '变革需谨慎，反复斟酌。' },
            { position: 4, text: '九四：悔亡，有孚改命，吉。', translation: '悔恨消失，改命吉祥。', interpretation: '变革成功，获得信任。' },
            { position: 5, text: '九五：大人虎变，未占有孚。', translation: '大人如虎变革。', interpretation: '大人大变，天下信服。' },
            { position: 6, text: '上六：君子豹变，小人革面。', translation: '君子如豹变革。', interpretation: '变革已成，顺应民心。' }
        ]
    },
    { id: 50, upper: 2, lower: 5, name: '火风鼎', symbol: '䷱',
        summary: { text: '木上有火，鼎。君子以正位凝命。', northeastDialect: '鼎新革故，稳定发展。' },
        hexagramText: '元吉，亨。', hexagramTranslation: '大吉，亨通。',
        yaoTexts: [
            { position: 1, text: '初六：鼎颠趾，利出否。', translation: '鼎翻倒脚趾向上。', interpretation: '破旧立新，利于除弊。' },
            { position: 2, text: '九二：鼎有实，我仇有疾。', translation: '鼎中有实物。', interpretation: '充实自信，不为外界所扰。' },
            { position: 3, text: '九三：鼎耳革，其行塞。', translation: '鼎耳变形，移动困难。', interpretation: '变革受阻，宜守正待时。' },
            { position: 4, text: '九四：鼎折足，覆公餗。', translation: '鼎足折断，食物倾覆。', interpretation: '力不胜任，导致失败。' },
            { position: 5, text: '六五：鼎黄耳金铉，利贞。', translation: '鼎有黄色耳和金铉。', interpretation: '刚柔相济，守正得利。' },
            { position: 6, text: '上九：鼎玉铉，大吉，无不利。', translation: '鼎有玉铉。', interpretation: '变革圆满，大吉大利。' }
        ]
    },
    { id: 51, upper: 4, lower: 4, name: '震为雷', symbol: '䷲',
        summary: { text: '洊雷，震。君子以恐惧修省。', northeastDialect: '雷声震动，警戒反省。' },
        hexagramText: '亨。震来虩虩，笑言哑哑。', hexagramTranslation: '亨通。雷声震动。',
        yaoTexts: [
            { position: 1, text: '初九：震来虩虩，后笑言哑哑。', translation: '雷声震动，后又谈笑。', interpretation: '惊恐之后，归于平静。' },
            { position: 2, text: '六二：震来厉，亿丧贝。', translation: '震动有危险，丧失货贝。', interpretation: '震动之中，有所损失。' },
            { position: 3, text: '六三：震苏苏，震行无眚。', translation: '震动不安。', interpretation: '保持警惕，可无灾祸。' },
            { position: 4, text: '九四：震遂泥。', translation: '震动坠入泥中。', interpretation: '震动之中，陷入困境。' },
            { position: 5, text: '六五：震往来厉，亿无丧有事。', translation: '震动往来都有危险。', interpretation: '虽有危险，没有大损失。' },
            { position: 6, text: '上六：震索索，视矍矍，征凶。', translation: '震恐畏缩，目光不安。', interpretation: '极度惊恐，不宜妄动。' }
        ]
    },
    { id: 52, upper: 7, lower: 7, name: '艮为山', symbol: '䷳',
        summary: { text: '兼山，艮。君子以思不出其位。', northeastDialect: '山山重叠，静止不动。' },
        hexagramText: '艮其背，不获其身。', hexagramTranslation: '止于其背，不见自身。',
        yaoTexts: [
            { position: 1, text: '初六：艮其趾，无咎，利永贞。', translation: '止于脚趾。', interpretation: '初始即止，可保无咎。' },
            { position: 2, text: '六二：艮其腓，不拯其随。', translation: '止于小腿。', interpretation: '止而不动，其心不快。' },
            { position: 3, text: '九三：艮其限，列其夤，厉熏心。', translation: '止于腰部。', interpretation: '止当其所，虽危无咎。' },
            { position: 4, text: '六四：艮其身，无咎。', translation: '止于身体。', interpretation: '修身正己，可保无咎。' },
            { position: 5, text: '六五：艮其辅，言有序，悔亡。', translation: '止于面颊。', interpretation: '言语有序，悔恨消失。' },
            { position: 6, text: '上九：敦艮，吉。', translation: '敦厚而止。', interpretation: '敦厚守正，终获吉祥。' }
        ]
    },
    { id: 53, upper: 7, lower: 5, name: '风山渐', symbol: '䷴',
        summary: { text: '山上有木，渐。君子以居贤德善俗。', northeastDialect: '循序渐进，步步高升。' },
        hexagramText: '女归吉，利贞。', hexagramTranslation: '女子出嫁吉祥，利于守正。',
        yaoTexts: [
            { position: 1, text: '初六：鸿渐于干，小子厉。', translation: '鸿雁渐进于水边。', interpretation: '初始艰难，宜循序渐进。' },
            { position: 2, text: '六二：鸿渐于磐，饮食衎衎。', translation: '鸿雁渐进于磐石。', interpretation: '安稳度日，饮食喜乐。' },
            { position: 3, text: '九三：鸿渐于陆，夫征不复。', translation: '鸿雁渐进于高地。', interpretation: '前进不归，有所失也。' },
            { position: 4, text: '六四：鸿渐于木，或得其桷。', translation: '鸿雁渐进于树木。', interpretation: '循序渐进，终得其所。' },
            { position: 5, text: '九五：鸿渐于陵，妇三岁不孕。', translation: '鸿雁渐进于山陵。', interpretation: '终获成功，不可阻挡。' },
            { position: 6, text: '上九：鸿渐于陆，其羽可用为仪。', translation: '鸿雁羽毛可做装饰。', interpretation: '高洁脱俗，可为楷模。' }
        ]
    },
    { id: 54, upper: 4, lower: 2, name: '雷泽归妹', symbol: '䷵',
        summary: { text: '泽上有雷，归妹。君子以永终知敝。', northeastDialect: '少女出嫁，归宿已定。' },
        hexagramText: '征凶，无攸利。', hexagramTranslation: '出征凶险，无所利。',
        yaoTexts: [
            { position: 1, text: '初九：归妹以娣，跛能履，征吉。', translation: '少女出嫁以妹陪嫁。', interpretation: '初入新境，勤勉为宜。' },
            { position: 2, text: '九二：眇能视，利幽人之贞。', translation: '目盲仍能看。', interpretation: '坚守正道，自得其乐。' },
            { position: 3, text: '六三：归妹以须，反归以娣。', translation: '少女出嫁等待。', interpretation: '时机不当，不如退守。' },
            { position: 4, text: '九四：归妹愆期，迟归有时。', translation: '出嫁延期。', interpretation: '等待时机，终有所归。' },
            { position: 5, text: '六五：帝乙归妹，其君之袂不如其娣之袂良。', translation: '帝乙嫁妹。', interpretation: '贵而不骄，以德服人。' },
            { position: 6, text: '上六：女承筐无实，士刲羊无血。', translation: '女子捧筐无实物。', interpretation: '有名无实，无所成就。' }
        ]
    },
    { id: 55, upper: 4, lower: 5, name: '雷火丰', symbol: '䷶',
        summary: { text: '雷电皆至，丰。君子以折狱致刑。', northeastDialect: '丰盛宏大，光明盛大。' },
        hexagramText: '亨，王假之，勿忧，宜日中。', hexagramTranslation: '亨通，君王亲临。',
        yaoTexts: [
            { position: 1, text: '初九：遇其配主，虽旬无咎。', translation: '遇到匹配的主人。', interpretation: '得遇明主，前途光明。' },
            { position: 2, text: '六二：丰其蔀，日中见斗。', translation: '大的遮蔽，日中见北斗。', interpretation: '光明被遮蔽，宜求明主。' },
            { position: 3, text: '九三：丰其沛，日中见沫。', translation: '大的幡幔，日中见小星。', interpretation: '阴暗已甚，宜速决断。' },
            { position: 4, text: '九四：丰其蔀，日中见斗，遇其夷主。', translation: '大的遮蔽，遇其夷主。', interpretation: '虽处暗境，终遇明主。' },
            { position: 5, text: '六五：来章，有庆誉，吉。', translation: '带来文采，有喜庆荣誉。', interpretation: '光明到来，喜庆吉祥。' },
            { position: 6, text: '上六：丰其屋，蔀其家。', translation: '大其房屋，遮蔽其家。', interpretation: '盛极而衰，宜知进退。' }
        ]
    },
    { id: 56, upper: 7, lower: 5, name: '火山旅', symbol: '䷷',
        summary: { text: '山上有火，旅。君子以明慎用刑而不留狱。', northeastDialect: '行旅在外，谨慎为要。' },
        hexagramText: '小亨，旅贞吉。', hexagramTranslation: '小亨通，行旅守正吉祥。',
        yaoTexts: [
            { position: 1, text: '初六：旅琐琐，斯其所取灾。', translation: '行旅猥琐。', interpretation: '初入异乡，宜低调谨慎。' },
            { position: 2, text: '六二：旅即次，怀其资，得童仆贞。', translation: '行旅到住处，怀有资财。', interpretation: '旅途安稳，得人相助。' },
            { position: 3, text: '九三：旅焚其次，丧其童仆，贞厉。', translation: '行旅焚烧住处。', interpretation: '旅途有变，失去依靠。' },
            { position: 4, text: '九四：旅于处，得其资斧，我心不快。', translation: '行旅暂停，得到资财。', interpretation: '暂得栖身，心中不快。' },
            { position: 5, text: '六五：射雉一矢亡，终以誉命。', translation: '射野鸡，一箭而亡。', interpretation: '先失后得，终获荣誉。' },
            { position: 6, text: '上九：鸟焚其巢，旅人先笑后号啕。', translation: '鸟焚烧其巢。', interpretation: '乐极生悲，终至灾祸。' }
        ]
    },
    { id: 57, upper: 5, lower: 5, name: '巽为风', symbol: '䷸',
        summary: { text: '随风，巽。君子以申命行事。', northeastDialect: '风相随而行，谦逊顺从。' },
        hexagramText: '小亨，利有攸往，利见大人。', hexagramTranslation: '小亨通，利于有所前往。',
        yaoTexts: [
            { position: 1, text: '初六：进退，利武人之贞。', translation: '进退不定。', interpretation: '进退两难，宜坚定立场。' },
            { position: 2, text: '九二：巽在床下，用史巫纷若。', translation: '伏于床下。', interpretation: '过于谦卑，反为不利。' },
            { position: 3, text: '九三：频巽，吝。', translation: '频繁地顺从。', interpretation: '过于顺从，令人遗憾。' },
            { position: 4, text: '六四：悔亡，田获三品。', translation: '悔恨消失，田猎获三品。', interpretation: '顺从得当，有所收获。' },
            { position: 5, text: '九五：贞吉，悔亡，无不利。', translation: '守正吉祥，悔恨消失。', interpretation: '刚健中正，无往不利。' },
            { position: 6, text: '上九：巽在床下，丧其资斧，贞凶。', translation: '伏于床下，丧失资财。', interpretation: '过于谦卑，丧失原则。' }
        ]
    },
    { id: 58, upper: 2, lower: 2, name: '兑为泽', symbol: '䷹',
        summary: { text: '丽泽，兑。君子以朋友讲习。', northeastDialect: '两泽相连，喜悦和谐。' },
        hexagramText: '亨，利贞。', hexagramTranslation: '亨通，利于守正。',
        yaoTexts: [
            { position: 1, text: '初九：和兑，吉。', translation: '和悦。', interpretation: '和悦待人，吉祥如意。' },
            { position: 2, text: '九二：孚兑，吉，悔亡。', translation: '诚信喜悦。', interpretation: '以诚待人，悔恨消失。' },
            { position: 3, text: '六三：来兑，凶。', translation: '前来取悦。', interpretation: '谄媚求悦，必有凶险。' },
            { position: 4, text: '九四：商兑未宁，介疾有喜。', translation: '商议喜悦未定。', interpretation: '喜悦有度，终有喜庆。' },
            { position: 5, text: '九五：孚于剥，有厉。', translation: '诚信被剥夺。', interpretation: '信任受损，需加警惕。' },
            { position: 6, text: '上六：引兑。', translation: '引诱喜悦。', interpretation: '被引诱而悦，宜守正道。' }
        ]
    },
    { id: 59, upper: 5, lower: 6, name: '风水涣', symbol: '䷺',
        summary: { text: '风行水上，涣。先王以享于帝立庙。', northeastDialect: '风吹水面，涣散分离。' },
        hexagramText: '亨。王假有庙，利涉大川。', hexagramTranslation: '亨通。君王到宗庙。',
        yaoTexts: [
            { position: 1, text: '初六：用拯马壮，吉。', translation: '用壮马拯救。', interpretation: '初始涣散，及时补救。' },
            { position: 2, text: '九二：涣奔其机，悔亡。', translation: '涣散奔向几案。', interpretation: '寻得依靠，悔恨消失。' },
            { position: 3, text: '六三：涣其躬，无悔。', translation: '涣散其自身。', interpretation: '牺牲小我，无怨无悔。' },
            { position: 4, text: '六四：涣其群，元吉。', translation: '涣散其群体。', interpretation: '破除小团体，大吉大利。' },
            { position: 5, text: '九五：涣汗其大号，涣王居，无咎。', translation: '如汗般发布大号令。', interpretation: '发布号令，整顿秩序。' },
            { position: 6, text: '上九：涣其血，去逖出，无咎。', translation: '涣散其血。', interpretation: '解除危险，脱离忧患。' }
        ]
    },
    { id: 60, upper: 2, lower: 6, name: '水泽节', symbol: '䷻',
        summary: { text: '泽上有水，节。君子以制数度，议德行。', northeastDialect: '节制有度，适可而止。' },
        hexagramText: '亨。苦节不可贞。', hexagramTranslation: '亨通。苦节不可守正。',
        yaoTexts: [
            { position: 1, text: '初九：不出户庭，无咎。', translation: '不出门户庭院。', interpretation: '节制初始，谨守不出。' },
            { position: 2, text: '九二：不出门庭，凶。', translation: '不出大门庭院。', interpretation: '过度节制，错失良机。' },
            { position: 3, text: '六三：不节若，则嗟若，无咎。', translation: '不节制则叹息。', interpretation: '不知节制，终将后悔。' },
            { position: 4, text: '六四：安节，亨。', translation: '安然节制。', interpretation: '安于节制，亨通顺利。' },
            { position: 5, text: '九五：甘节，吉，往有尚。', translation: '甘美节制。', interpretation: '节制得当，吉祥如意。' },
            { position: 6, text: '上六：苦节，贞凶，悔亡。', translation: '苦于节制。', interpretation: '过度节制，必致凶险。' }
        ]
    },
    { id: 61, upper: 2, lower: 5, name: '风泽中孚', symbol: '䷼',
        summary: { text: '泽上有风，中孚。君子以议狱缓死。', northeastDialect: '诚信中道，感化人心。' },
        hexagramText: '豚鱼吉，利涉大川，利贞。', hexagramTranslation: '小猪小鱼都吉祥。',
        yaoTexts: [
            { position: 1, text: '初九：虞吉，有它不燕。', translation: '安守诚信吉祥。', interpretation: '初始诚信，安守为宜。' },
            { position: 2, text: '九二：鸣鹤在阴，其子和之。', translation: '鹤在树荫鸣叫。', interpretation: '诚信感通，志同道合。' },
            { position: 3, text: '六三：得敌，或鼓或罢。', translation: '遇到敌人。', interpretation: '诚信不足，进退不定。' },
            { position: 4, text: '六四：月几望，马匹亡，无咎。', translation: '月亮接近圆满。', interpretation: '诚信相得，失去也无妨。' },
            { position: 5, text: '九五：有孚挛如，无咎。', translation: '有诚信相连。', interpretation: '诚信相连，可保无咎。' },
            { position: 6, text: '上九：翰音登于天，贞凶。', translation: '鸡鸣声上天。', interpretation: '诚信过甚，有名无实。' }
        ]
    },
    { id: 62, upper: 4, lower: 7, name: '雷山小过', symbol: '䷽',
        summary: { text: '山上有雷，小过。君子以行过乎恭，丧过乎哀。', northeastDialect: '小有所过，适度为宜。' },
        hexagramText: '亨，利贞。可小事，不可大事。', hexagramTranslation: '亨通，利于守正。',
        yaoTexts: [
            { position: 1, text: '初六：飞鸟以凶。', translation: '飞鸟带来凶险。', interpretation: '初始躁动，必有凶险。' },
            { position: 2, text: '六二：过其祖，遇其妣，不及其君。', translation: '超过祖父，遇到祖母。', interpretation: '宜柔守中，不可过刚。' },
            { position: 3, text: '九三：弗过防之，从或戕之，凶。', translation: '不过分防备。', interpretation: '不加防备，易遭伤害。' },
            { position: 4, text: '九四：无咎，弗过遇之。', translation: '无咎，不过分相遇。', interpretation: '守正不偏，可保无咎。' },
            { position: 5, text: '六五：密云不雨，自我西郊。', translation: '密云不雨。', interpretation: '阴盛阳衰，无所作为。' },
            { position: 6, text: '上六：弗遇过之，飞鸟离之，凶。', translation: '不相遇而越过。', interpretation: '过之已甚，灾祸降临。' }
        ]
    },
    { id: 63, upper: 6, lower: 5, name: '水火既济', symbol: '䷾',
        summary: { text: '水在火上，既济。君子以思患而豫防之。', northeastDialect: '已经成功，守成为要。' },
        hexagramText: '亨小，利贞，初吉终乱。', hexagramTranslation: '小亨通，利于守正。',
        yaoTexts: [
            { position: 1, text: '初九：曳其轮，濡其尾，无咎。', translation: '拖拽车轮，浸湿尾巴。', interpretation: '初始谨慎，可保无咎。' },
            { position: 2, text: '六二：妇丧其茀，勿逐，七日得。', translation: '妇人丢失首饰。', interpretation: '不追而得，失而复得。' },
            { position: 3, text: '九三：高宗伐鬼方，三年克之。', translation: '高宗讨伐鬼方。', interpretation: '历经艰难，终获成功。' },
            { position: 4, text: '六四：繻有衣袽，终日戒。', translation: '华美衣服变破旧。', interpretation: '盛极而衰，时刻警惕。' },
            { position: 5, text: '九五：东邻杀牛，不如西邻之禴祭。', translation: '东邻杀牛祭祀。', interpretation: '诚信比物质更重要。' },
            { position: 6, text: '上六：濡其首，厉。', translation: '浸湿头。', interpretation: '成功之后，更需谨慎。' }
        ]
    },
    { id: 64, upper: 5, lower: 6, name: '火水未济', symbol: '䷿',
        summary: { text: '火在水上，未济。君子以慎辨物居方。', northeastDialect: '尚未成功，继续努力。' },
        hexagramText: '亨。小狐汔济，濡其尾，无攸利。', hexagramTranslation: '亨通。小狐将渡未渡。',
        yaoTexts: [
            { position: 1, text: '初六：濡其尾，吝。', translation: '浸湿尾巴。', interpretation: '初始不济，宜谨慎。' },
            { position: 2, text: '九二：曳其轮，贞吉。', translation: '拖拽车轮。', interpretation: '守正待时，终获吉祥。' },
            { position: 3, text: '六三：未济，征凶，利涉大川。', translation: '未渡过，出征凶险。', interpretation: '时机未到，不宜妄动。' },
            { position: 4, text: '九四：贞吉，悔亡，震用伐鬼方。', translation: '守正吉祥，悔恨消失。', interpretation: '振奋有为，终获成功。' },
            { position: 5, text: '六五：贞吉，无悔，君子之光有孚，吉。', translation: '守正吉祥，无悔。', interpretation: '君子之光，诚信吉祥。' },
            { position: 6, text: '上九：有孚于饮酒，无咎。', translation: '有诚信地饮酒。', interpretation: '功成身退，安享太平。' }
        ]
    }
];

