const sentenceData = {
  day1: [
    // 1번
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '대나무숲 한 곳',
      chinese: {
        hanzi: ['一', '片', '竹林'],
        pinyin: ['yí', 'piàn', 'zhúlín'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '대나무숲이 한 곳 있다.',
      chinese: {
        hanzi: ['有', '一', '片', '竹林'],
        pinyin: ['yǒu', 'yí', 'piàn', 'zhúlín'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: false,
      korean: '근처에 대나무숲이 한 곳 있다. ',
      chinese: {
        hanzi: ['附近', '有', '一', '片', '竹林'],
        pinyin: ['fùjìn', 'yǒu', 'yí', 'piàn', 'zhúlín'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: true,
      korean: '학교 근처에 대나무숲이 한 곳 있다. ',
      chinese: {
        hanzi: ['学校', '附近', '有', '一', '片', '竹林'],
        pinyin: ['xuéxiào', 'fùjìn', 'yǒu', 'yí', 'piàn', 'zhúlín'],
      },
    },

    // 2번
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '자원봉사자가 있다.',
      chinese: {
        hanzi: ['有', '志愿者'],
        pinyin: ['yǒu', 'zhìyuànzhě'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '자원봉사자 300명이 있다.',
      chinese: {
        hanzi: ['有', '三百', '名', '志愿者'],
        pinyin: ['yǒu', 'sānbǎi', 'míng', 'zhìyuànzhě'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '자원봉사자 300여 명이 있다.',
      chinese: {
        hanzi: ['有', '三百', '多', '名', '志愿者'],
        pinyin: ['yǒu', 'sānbǎi', 'duō', 'míng', 'zhìyuànzhě'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '그 기관에는 자원봉사자 300여 명이 있다.',
      chinese: {
        hanzi: ['那', '个', '机构', '有', '三百', '多', '名', '志愿者'],
        pinyin: [
          'nà',
          'ge',
          'jīgòu',
          'yǒu',
          'sānbǎi',
          'duō',
          'míng',
          'zhìyuànzhě',
        ],
      },
    },

    // 3번
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '협조해주세요.',
      chinese: {
        hanzi: ['请', '配合'],
        pinyin: ['qǐng', 'pèihé'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '일정에 협조해주세요.',
      chinese: {
        hanzi: ['请', '配合', '安排'],
        pinyin: ['qǐng', 'pèihé', 'ānpái'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: true,
      korean: '그들의 일정에 협조해주세요.',
      chinese: {
        hanzi: ['请', '配合', '他们', '的', '安排'],
        pinyin: ['qǐng', 'pèihé', 'tāmen', 'de', 'ānpái'],
      },
    },

    // 4번
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '역사적 가치',
      chinese: {
        hanzi: ['历史', '价值'],
        pinyin: ['lìshǐ', 'jiàzhí'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '매우 높은 역사적 가치',
      chinese: {
        hanzi: ['很高', '的', '历史', '价值'],
        pinyin: ['hěn gāo', 'de', 'lìshǐ', 'jiàzhí'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '매우 높은 역사적 가치를 가지고 있다.',
      chinese: {
        hanzi: ['具有', '很', '高', '的', '历史', '价值'],
        pinyin: ['jùyǒu', 'hěn', 'gāo', 'de', 'lìshǐ', 'jiàzhí'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '그 그림은 매우 높은 역사적 가치를 가지고 있다.',
      chinese: {
        hanzi: ['那', '幅', '画', '具有', '很', '高', '的', '历史', '价值'],
        pinyin: [
          'nà',
          'fú',
          'huà',
          'jùyǒu',
          'hěn',
          'gāo',
          'de',
          'lìshǐ',
          'jiàzhí',
        ],
      },
    },

    // 5번
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '어느 부서',
      chinese: {
        hanzi: ['哪', '个', '部门'],
        pinyin: ['nǎ', 'ge', 'bùmén'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '어느 부서가 출시해요?',
      chinese: {
        hanzi: ['哪', '个', '部门', '推出'],
        pinyin: ['nǎ', 'ge', 'bùmén', 'tuīchū'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '어느 부서가 출시한 것',
      chinese: {
        hanzi: ['哪', '个', '部门', '推出', '的'],
        pinyin: ['nǎ', 'ge', 'bùmén', 'tuīchū', 'de'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '어느 부서가 출시한 건가요?',
      chinese: {
        hanzi: ['是', '哪', '个', '部门', '推出', '的'],
        pinyin: ['shì', 'nǎ', 'ge', 'bùmén', 'tuīchū', 'de'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: true,
      korean: '그 제품은 어느 부서가 출시한 건가요?',
      chinese: {
        hanzi: ['那', '个', '产品', '是', '哪', '个', '部门', '推出', '的'],
        pinyin: [
          'nà',
          'ge',
          'chǎnpǐn',
          'shì',
          'nǎ',
          'ge',
          'bùmén',
          'tuīchū',
          'de',
        ],
      },
    },
    // 6번
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '나는 걱정한다.',
      chinese: {
        hanzi: ['我', '发愁'],
        pinyin: ['wǒ', 'fāchóu'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '나는 걱정하고 있다.',
      chinese: {
        hanzi: ['我', '正', '发愁', '呢'],
        pinyin: ['wǒ', 'zhèng', 'fāchóu', 'ne'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '나는 일정 때문에 걱정하고 있다.',
      chinese: {
        hanzi: ['我', '正', '为', '安排', '发愁', '呢'],
        pinyin: ['wǒ', 'zhèng', 'wèi', 'ānpái', 'fāchóu', 'ne'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '나는 그 일정 때문에 걱정하고 있다.',
      chinese: {
        hanzi: ['我', '正', '为', '那', '个', '安排', '发愁', '呢'],
        pinyin: ['wǒ', 'zhèng', 'wèi', 'nà', 'ge', 'ānpái', 'fāchóu', 'ne'],
      },
    },
    // 7번
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '체험했다, 경험했다',
      chinese: {
        hanzi: ['体验', '到', '了'],
        pinyin: ['tǐyàn', 'dào', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '많은 것을 체험했다.',
      chinese: {
        hanzi: ['体验', '到', '了很多'],
        pinyin: ['tǐyàn', 'dào', 'le hěn duō'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '우리가 많은 것을 체험하게 했다.',
      chinese: {
        hanzi: ['让', '我们', '体验', '到', '了', '很', '多'],
        pinyin: ['ràng', 'wǒmen', 'tǐyàn', 'dào', 'le', 'hěn', 'duō'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: true,
      korean: '이 프로젝트는 우리가 많은 것을 체험하게 했다.',
      chinese: {
        hanzi: [
          '这',
          '个',
          '项目',
          '让',
          '我们',
          '体验',
          '到',
          '了',
          '很',
          '多',
        ],
        pinyin: [
          'zhè',
          'ge',
          'xiàngmù',
          'ràng',
          'wǒmen',
          'tǐyàn',
          'dào',
          'le',
          'hěn',
          'duō',
        ],
      },
    },

    // 8번
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '서랍에 두다.',
      chinese: {
        hanzi: ['放', '在', '抽屉', '里'],
        pinyin: ['fàng', 'zài', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '서랍에 두었다.',
      chinese: {
        hanzi: ['放', '在了', '抽屉', '里'],
        pinyin: ['fàng', 'zài le', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '자료를 서랍에 두었다.',
      chinese: {
        hanzi: ['把', '资料', '放', '在', '了', '抽屉', '里'],
        pinyin: ['bǎ', 'zīliào', 'fàng', 'zài', 'le', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: true,
      korean: '나는 자료를 서랍에 두었다.',
      chinese: {
        hanzi: ['我', '把', '资料', '放', '在', '了', '抽屉', '里'],
        pinyin: ['wǒ', 'bǎ', 'zīliào', 'fàng', 'zài', 'le', 'chōuti', 'lǐ'],
      },
    },
    // 9번
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '부정했다.',
      chinese: {
        hanzi: ['否定', '了'],
        pinyin: ['fǒudìng', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '상사에게 부정되었다. (= 상사에 의해 부정 당했다.)',
      chinese: {
        hanzi: ['被', '领导', '否定', '了'],
        pinyin: ['bèi', 'lǐngdǎo', 'fǒudìng', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '기획이 상사에게 부정되었다. (= 기획이 상사에 의해 부정 당했다.)',
      chinese: {
        hanzi: ['企划', '被', '领导', '否定', '了'],
        pinyin: ['qǐhuà', 'bèi', 'lǐngdǎo', 'fǒudìng', 'le'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: true,
      korean:
        '내 기획이 상사에게 부정되었다. (= 내 기획이 상사에 의해 부정 당했다.)',
      chinese: {
        hanzi: ['我', '的', '企划', '被', '领导', '否定', '了'],
        pinyin: ['wǒ', 'de', 'qǐhuà', 'bèi', 'lǐngdǎo', 'fǒudìng', 'le'],
      },
    },
    // 10번
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '토론 대회',
      chinese: {
        hanzi: ['辩论比赛'],
        pinyin: ['biànlùn bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '토론 대회에 참가하다.',
      chinese: {
        hanzi: ['参加', '辩论', '比赛'],
        pinyin: ['cānjiā', 'biànlùn', 'bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '학교를 대표하여 토론 대회에 참가하다.',
      chinese: {
        hanzi: ['代表', '学校', '参加', '辩论', '比赛'],
        pinyin: ['dàibiǎo', 'xuéxiào', 'cānjiā', 'biànlùn', 'bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '학교를 대표해 토론 대회에 참가할 것이다.',
      chinese: {
        hanzi: ['将', '代表', '学校', '参加', '辩论', '比赛'],
        pinyin: ['jiāng', 'dàibiǎo', 'xuéxiào', 'cānjiā', 'biànlùn', 'bǐsài'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: true,
      korean: '그녀는 학교를 대표해 토론 대회에 참가할 것이다.',
      chinese: {
        hanzi: ['她', '将', '代表', '学校', '参加', '辩论', '比赛'],
        pinyin: [
          'tā',
          'jiāng',
          'dàibiǎo',
          'xuéxiào',
          'cānjiā',
          'biànlùn',
          'bǐsài',
        ],
      },
    },
  ],
  day2: [
    // 11번
    {
      id: 'sentence11',
      level: 1,
      isFinal: false,
      korean: '탁구를 치다.',
      chinese: {
        hanzi: ['打', '乒乓球'],
        pinyin: ['dǎ', 'pīngpāngqiú'],
      },
    },
    {
      id: 'sentence11',
      level: 2,
      isFinal: false,
      korean: '탁구를 칠 줄 안다.',
      chinese: {
        hanzi: ['会', '打', '乒乓球'],
        pinyin: ['huì', 'dǎ', 'pīngpāngqiú'],
      },
    },
    {
      id: 'sentence11',
      level: 3,
      isFinal: false,
      korean: '탁구를 매우 잘 칠 줄 안다.',
      chinese: {
        hanzi: ['很', '会', '打', '乒乓球'],
        pinyin: ['hěn', 'huì', 'dǎ', 'pīngpāngqiú'],
      },
    },
    {
      id: 'sentence11',
      level: 4,
      isFinal: true,
      korean: '내 친구는 탁구를 매우 잘 칠 줄 안다.',
      chinese: {
        hanzi: ['我', '的', '朋友', '很', '会', '打', '乒乓球'],
        pinyin: ['wǒ', 'de', 'péngyou', 'hěn', 'huì', 'dǎ', 'pīngpāngqiú'],
      },
    },

    // 12번
    {
      id: 'sentence12',
      level: 1,
      isFinal: false,
      korean: '교류가 부족하다.',
      chinese: {
        hanzi: ['缺少', '交流'],
        pinyin: ['quēshǎo', 'jiāoliú'],
      },
    },
    {
      id: 'sentence12',
      level: 2,
      isFinal: false,
      korean: '어른들과 교류가 부족하다.',
      chinese: {
        hanzi: ['和', '长辈', '缺少', '交流'],
        pinyin: ['hé', 'zhǎngbèi', 'quēshǎo', 'jiāoliú'],
      },
    },
    {
      id: 'sentence12',
      level: 3,
      isFinal: false,
      korean: '그는 어른들과 교류가 부족하다.',
      chinese: {
        hanzi: ['他', '和', '长辈', '缺少', '交流'],
        pinyin: ['tā', 'hé', 'zhǎngbèi', 'quēshǎo', 'jiāoliú'],
      },
    },
    {
      id: 'sentence12',
      level: 4,
      isFinal: true,
      korean:
        '그는 어른들과 교류가 부족하다. (= 그는 어른들과의 사이에 교류가 부족하다.)',
      chinese: {
        hanzi: ['他', '和', '长辈', '之间', '缺少', '交流'],
        pinyin: ['tā', 'hé', 'zhǎngbèi', 'zhījiān', 'quēshǎo', 'jiāoliú'],
      },
    },

    // 13번
    {
      id: 'sentence13',
      level: 1,
      isFinal: false,
      korean: '매력이 있다, 매력적이다',
      chinese: {
        hanzi: ['有', '魅力'],
        pinyin: ['yǒu', 'mèilì'],
      },
    },
    {
      id: 'sentence13',
      level: 2,
      isFinal: false,
      korean: '매우 매력적이다.',
      chinese: {
        hanzi: ['十分', '有', '魅力'],
        pinyin: ['shífēn', 'yǒu', 'mèilì'],
      },
    },
    {
      id: 'sentence13',
      level: 3,
      isFinal: false,
      korean: '전통 수공예품은 매우 매력적이다.',
      chinese: {
        hanzi: ['传统', '手工艺品', '十分', '有', '魅力'],
        pinyin: ['chuántǒng', 'shǒugōngyìpǐn', 'shífēn', 'yǒu', 'mèilì'],
      },
    },
    {
      id: 'sentence13',
      level: 4,
      isFinal: true,
      korean: '그 전통 수공예품들은 매우 매력적이다.',
      chinese: {
        hanzi: ['那', '些', '传统', '手工艺品', '十分', '有', '魅力'],
        pinyin: [
          'nà',
          'xiē',
          'chuántǒng',
          'shǒugōngyìpǐn',
          'shífēn',
          'yǒu',
          'mèilì',
        ],
      },
    },

    // 14번
    {
      id: 'sentence14',
      level: 1,
      isFinal: false,
      korean: '신경 안 쓰는 태도',
      chinese: {
        hanzi: ['无所谓', '的', '态度'],
        pinyin: ['wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 2,
      isFinal: false,
      korean: '그런 신경 안 쓰는 태도',
      chinese: {
        hanzi: ['那', '种', '无所谓', '的', '态度'],
        pinyin: ['nà', 'zhǒng', 'wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 3,
      isFinal: false,
      korean: '그런 신경 안 쓰는 태도이다.',
      chinese: {
        hanzi: ['是', '那', '种', '无所谓', '的', '态度'],
        pinyin: ['shì', 'nà', 'zhǒng', 'wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 4,
      isFinal: false,
      korean: '여전히 그런 신경 안 쓰는 태도이다.',
      chinese: {
        hanzi: ['依然', '是', '那', '种', '无所谓', '的', '态度'],
        pinyin: ['yīrán', 'shì', 'nà', 'zhǒng', 'wúsuǒwèi', 'de', 'tàidù'],
      },
    },
    {
      id: 'sentence14',
      level: 5,
      isFinal: true,
      korean: '그는 여전히 그런 신경 안 쓰는 태도이다.',
      chinese: {
        hanzi: ['他', '依然', '是', '那', '种', '无所谓', '的', '态度'],
        pinyin: [
          'tā',
          'yīrán',
          'shì',
          'nà',
          'zhǒng',
          'wúsuǒwèi',
          'de',
          'tàidù',
        ],
      },
    },

    // 15번
    {
      id: 'sentence15',
      level: 1,
      isFinal: false,
      korean: '사람들의 건강',
      chinese: {
        hanzi: ['人们', '的', '健康'],
        pinyin: ['rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 2,
      isFinal: false,
      korean: '사람들의 건강을 해치다.',
      chinese: {
        hanzi: ['危害', '人们', '的', '健康'],
        pinyin: ['wēihài', 'rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 3,
      isFinal: false,
      korean: '사람들의 건강을 심각하게 해치다.',
      chinese: {
        hanzi: ['严重', '危害', '人们', '的', '健康'],
        pinyin: ['yánzhòng', 'wēihài', 'rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 4,
      isFinal: false,
      korean: '사람들의 건강을 심각하게 해칠 것이다.',
      chinese: {
        hanzi: ['会', '严重', '危害', '人们', '的', '健康'],
        pinyin: ['huì', 'yánzhòng', 'wēihài', 'rénmen', 'de', 'jiànkāng'],
      },
    },
    {
      id: 'sentence15',
      level: 5,
      isFinal: true,
      korean:
        '오랫동안 오래 앉아 있는 것은 사람들의 건강을 심각하게 해칠 것이다.',
      chinese: {
        hanzi: ['长期', '久坐', '会', '严重', '危害', '人们', '的', '健康'],
        pinyin: [
          'chángqī',
          'jiǔzuò',
          'huì',
          'yánzhòng',
          'wēihài',
          'rénmen',
          'de',
          'jiànkāng',
        ],
      },
    },
    // 16번
    {
      id: 'sentence16',
      level: 1,
      isFinal: false,
      korean: '단점을 고치다.',
      chinese: {
        hanzi: ['改正', '缺点'],
        pinyin: ['gǎizhèng', 'quēdiǎn'],
      },
    },
    {
      id: 'sentence16',
      level: 2,
      isFinal: false,
      korean: '이런 단점들을 고치다.',
      chinese: {
        hanzi: ['改正', '这', '些', '缺点'],
        pinyin: ['gǎizhèng', 'zhè', 'xiē', 'quēdiǎn'],
      },
    },
    {
      id: 'sentence16',
      level: 3,
      isFinal: false,
      korean: '이런 단점들을 고칠 것이다.',
      chinese: {
        hanzi: ['会', '改正', '这', '些', '缺点', '的'],
        pinyin: ['huì', 'gǎizhèng', 'zhè', 'xiē', 'quēdiǎn', 'de'],
      },
    },
    {
      id: 'sentence16',
      level: 4,
      isFinal: false,
      korean: '조만간 이런 단점들을 고칠 것이다.',
      chinese: {
        hanzi: ['迟早', '会', '改正', '这', '些', '缺点', '的'],
        pinyin: ['chízǎo', 'huì', 'gǎizhèng', 'zhè', 'xiē', 'quēdiǎn', 'de'],
      },
    },
    {
      id: 'sentence16',
      level: 5,
      isFinal: false,
      korean: '학생들은 조만간 이런 단점들을 고칠 것이다.',
      chinese: {
        hanzi: ['学生', '迟早', '会', '改正', '这', '些', '缺点', '的'],
        pinyin: [
          'xuéshēng',
          'chízǎo',
          'huì',
          'gǎizhèng',
          'zhè',
          'xiē',
          'quēdiǎn',
          'de',
        ],
      },
    },
    {
      id: 'sentence16',
      level: 6,
      isFinal: true,
      korean: '나는 학생들이 조만간 이런 단점들을 고칠 것이라 믿는다.',
      chinese: {
        hanzi: [
          '我',
          '相信',
          '学生',
          '迟早',
          '会',
          '改正',
          '这',
          '些',
          '缺点',
          '的',
        ],
        pinyin: [
          'wǒ',
          'xiāngxìn',
          'xuéshēng',
          'chízǎo',
          'huì',
          'gǎizhèng',
          'zhè',
          'xiē',
          'quēdiǎn',
          'de',
        ],
      },
    },
    // 17번
    {
      id: 'sentence17',
      level: 1,
      isFinal: false,
      korean: '오류를 수정하다.',
      chinese: {
        hanzi: ['修改', '错误'],
        pinyin: ['xiūgǎi', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 2,
      isFinal: false,
      korean: '문서 안의 오류를 수정하다.',
      chinese: {
        hanzi: ['修改', '文件', '中', '的', '错误'],
        pinyin: ['xiūgǎi', 'wénjiàn', 'zhōng', 'de', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 3,
      isFinal: false,
      korean: '문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: ['修改', '了', '文件', '中', '的', '错误'],
        pinyin: ['xiūgǎi', 'le', 'wénjiàn', 'zhōng', 'de', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 4,
      isFinal: false,
      korean: '제때 문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: ['及时', '修改', '了', '文件', '中', '的', '错误'],
        pinyin: ['jíshí', 'xiūgǎi', 'le', 'wénjiàn', 'zhōng', 'de', 'cuòwù'],
      },
    },
    {
      id: 'sentence17',
      level: 5,
      isFinal: false,
      korean: '조수가 제때 문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: ['助手', '及时', '修改', '了', '文件', '中', '的', '错误'],
        pinyin: [
          'zhùshǒu',
          'jíshí',
          'xiūgǎi',
          'le',
          'wénjiàn',
          'zhōng',
          'de',
          'cuòwù',
        ],
      },
    },
    {
      id: 'sentence17',
      level: 6,
      isFinal: true,
      korean: '다행히 조수가 제때 문서 안의 오류를 수정했다.',
      chinese: {
        hanzi: [
          '幸亏',
          '助手',
          '及时',
          '修改',
          '了',
          '文件',
          '中',
          '的',
          '错误',
        ],
        pinyin: [
          'xìngkuī',
          'zhùshǒu',
          'jíshí',
          'xiūgǎi',
          'le',
          'wénjiàn',
          'zhōng',
          'de',
          'cuòwù',
        ],
      },
    },

    // 18번
    {
      id: 'sentence18',
      level: 1,
      isFinal: false,
      korean: '뒤집어 놓았다, 뒤바꿔 놓았다',
      chinese: {
        hanzi: ['摆反了'],
        pinyin: ['bǎi fǎn le'],
      },
    },
    {
      id: 'sentence18',
      level: 2,
      isFinal: false,
      korean: '위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: ['把', '位置', '摆', '反', '了'],
        pinyin: ['bǎ', 'wèizhì', 'bǎi', 'fǎn', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 3,
      isFinal: false,
      korean: '자료 몇 장의 위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: ['把', '几', '份', '材料', '的', '位置', '摆', '反', '了'],
        pinyin: [
          'bǎ',
          'jǐ',
          'fèn',
          'cáiliào',
          'de',
          'wèizhì',
          'bǎi',
          'fǎn',
          'le',
        ],
      },
    },
    {
      id: 'sentence18',
      level: 4,
      isFinal: false,
      korean: '그 자료 몇 장의 위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: ['把', '那几份', '材料', '的', '位置', '摆', '反', '了'],
        pinyin: [
          'bǎ',
          'nà jǐ fèn',
          'cáiliào',
          'de',
          'wèizhì',
          'bǎi',
          'fǎn',
          'le',
        ],
      },
    },
    {
      id: 'sentence18',
      level: 5,
      isFinal: true,
      korean: '동료가 그 자료 몇 장의 위치를 뒤바꿔 놓았다.',
      chinese: {
        hanzi: [
          '同事',
          '把',
          '那',
          '几',
          '份',
          '材料',
          '的',
          '位置',
          '摆',
          '反',
          '了',
        ],
        pinyin: [
          'tóngshì',
          'bǎ',
          'nà',
          'jǐ',
          'fèn',
          'cáiliào',
          'de',
          'wèizhì',
          'bǎi',
          'fǎn',
          'le',
        ],
      },
    },
    // 19번
    {
      id: 'sentence19',
      level: 1,
      isFinal: false,
      korean: '손님에게 건네다.',
      chinese: {
        hanzi: ['递', '给', '顾客'],
        pinyin: ['dì', 'gěi', 'gùkè'],
      },
    },
    {
      id: 'sentence19',
      level: 2,
      isFinal: false,
      korean: '그 손님에게 건네다.',
      chinese: {
        hanzi: ['递', '给', '那', '位', '顾客'],
        pinyin: ['dì', 'gěi', 'nà', 'wèi', 'gùkè'],
      },
    },
    {
      id: 'sentence19',
      level: 3,
      isFinal: false,
      korean: '장갑을 그 손님에게 건네다.',
      chinese: {
        hanzi: ['把', '手套', '递', '给', '那', '位', '顾客'],
        pinyin: ['bǎ', 'shǒutào', 'dì', 'gěi', 'nà', 'wèi', 'gùkè'],
      },
    },
    {
      id: 'sentence19',
      level: 4,
      isFinal: false,
      korean: '이 장갑을 그 손님에게 건네다.',
      chinese: {
        hanzi: ['把', '这', '副', '手套', '递', '给', '那', '位', '顾客'],
        pinyin: [
          'bǎ',
          'zhè',
          'fù',
          'shǒutào',
          'dì',
          'gěi',
          'nà',
          'wèi',
          'gùkè',
        ],
      },
    },
    {
      id: 'sentence19',
      level: 5,
      isFinal: true,
      korean: '이 장갑을 그 손님에게 건네주세요.',
      chinese: {
        hanzi: ['请', '把', '这', '副', '手套', '递', '给', '那', '位', '顾客'],
        pinyin: [
          'qǐng',
          'bǎ',
          'zhè',
          'fù',
          'shǒutào',
          'dì',
          'gěi',
          'nà',
          'wèi',
          'gùkè',
        ],
      },
    },

    // 20번

    {
      id: 'sentence20',
      level: 1,
      isFinal: false,
      korean: '취소했다.',
      chinese: {
        hanzi: ['取消', '了'],
        pinyin: ['qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 2,
      isFinal: false,
      korean: '갑작스럽게 취소했다, 임시로 취소했다',
      chinese: {
        hanzi: ['临时取消', '了'],
        pinyin: ['línshí qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 3,
      isFinal: false,
      korean: '갑작스럽게 취소되었다.',
      chinese: {
        hanzi: ['被', '临时', '取消', '了'],
        pinyin: ['bèi', 'línshí', 'qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 4,
      isFinal: false,
      korean: '행사가 갑작스럽게 취소되었다.',
      chinese: {
        hanzi: ['活动', '被', '临时', '取消', '了'],
        pinyin: ['huódòng ', 'bèi', 'línshí', 'qǔxiāo', 'le'],
      },
    },
    {
      id: 'sentence20',
      level: 5,
      isFinal: true,
      korean: '그의 행사가 갑작스럽게 취소되었다.',
      chinese: {
        hanzi: ['他', '的', '活动', '被', '临时', '取消', '了'],
        pinyin: ['tā', 'de', 'huódòng ', 'bèi', 'línshí', 'qǔxiāo', 'le'],
      },
    },
  ],
  day3: [
    // 21번
    {
      id: 'sentence21',
      level: 1,
      isFinal: false,
      korean: '본질적인 차이',
      chinese: {
        hanzi: ['本质', '上', '的', '不同'],
        pinyin: ['běnzhì', 'shàng', 'de', 'bùtóng'],
      },
    },
    {
      id: 'sentence21',
      level: 2,
      isFinal: false,
      korean: '본질적인 차이가 없다.',
      chinese: {
        hanzi: ['没有', '本质', '上', '的', '不同'],
        pinyin: ['méiyǒu', 'běnzhì', 'shàng', 'de', 'bùtóng'],
      },
    },
    {
      id: 'sentence21',
      level: 3,
      isFinal: false,
      korean: '본질적인 차이가 전혀 없다.',
      chinese: {
        hanzi: ['并没有', '本质', '上', '的', '不同'],
        pinyin: ['bìng méiyǒu', 'běnzhì', 'shàng', 'de', 'bùtóng'],
      },
    },
    {
      id: 'sentence21',
      level: 4,
      isFinal: false,
      korean: '두 문제는 본질적인 차이가 전혀 없다.',
      chinese: {
        hanzi: ['两', '个', '问题', '并', '没有', '本质', '上', '的', '不同'],
        pinyin: [
          'liǎng',
          'ge',
          'wèntí',
          'bìng',
          'méiyǒu',
          'běnzhì',
          'shàng',
          'de',
          'bùtóng',
        ],
      },
    },
    {
      id: 'sentence21',
      level: 5,
      isFinal: true,
      korean: '그 두 문제는 본질적인 차이가 전혀 없다.',
      chinese: {
        hanzi: [
          '那',
          '两',
          '个',
          '问题',
          '并',
          '没有',
          '本质',
          '上',
          '的',
          '不同',
        ],
        pinyin: [
          'nà',
          'liǎng',
          'ge',
          'wèntí',
          'bìng',
          'méiyǒu',
          'běnzhì',
          'shàng',
          'de',
          'bùtóng',
        ],
      },
    },
    // 22번
    {
      id: 'sentence22',
      level: 1,
      isFinal: false,
      korean: '잘 마무리했다. (준비를 잘) 마쳤다. (결과 완성)',
      chinese: {
        hanzi: ['做好了'],
        pinyin: ['zuòhǎo le'],
      },
    },
    {
      id: 'sentence22',
      level: 2,
      isFinal: false,
      korean: '준비를 마쳤다.',
      chinese: {
        hanzi: ['做好', '准备了'],
        pinyin: ['zuòhǎo', 'zhǔnbèi le'],
      },
    },
    {
      id: 'sentence22',
      level: 3,
      isFinal: false,
      korean: '기회를 맞이할 준비를 마쳤다.',
      chinese: {
        hanzi: ['做好', '迎接机会', '的', '准备', '了'],
        pinyin: ['zuòhǎo', 'yíngjiē jīhuì', 'de', 'zhǔnbèi', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 4,
      isFinal: false,
      korean: '이 기회를 맞이할 준비를 마쳤다.',
      chinese: {
        hanzi: ['做好', '迎接', '这个', '机会', '的', '准备', '了'],
        pinyin: ['zuòhǎo', 'yíngjiē', 'zhè ge', 'jīhuì', 'de', 'zhǔnbèi', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 5,
      isFinal: true,
      korean: '그들은 이 기회를 맞이할 준비를 마쳤다.',
      chinese: {
        hanzi: ['他们', '做好', '迎接', '这', '个', '机会', '的', '准备', '了'],
        pinyin: [
          'tāmen',
          'zuòhǎo',
          'yíngjiē',
          'zhè',
          'ge',
          'jīhuì',
          'de',
          'zhǔnbèi',
          'le',
        ],
      },
    },
    // 23번
    {
      id: 'sentence23',
      level: 1,
      isFinal: false,
      korean:
        '직무를 맡다. (职责：직책에 따른 중요한 임무)(= 직무를 맡기 시작하다, 책임을 적극적으로 떠맡다)',
      chinese: {
        hanzi: ['承担起', '职责'],
        pinyin: ['chéngdān qǐ', 'zhízé'],
      },
    },
    {
      id: 'sentence23',
      level: 2,
      isFinal: false,
      korean: '중요한 직무를 맡다.',
      chinese: {
        hanzi: ['承担', '起', '重要', '的', '职责'],
        pinyin: ['chéngdān', 'qǐ', 'zhòngyào', 'de', 'zhízé'],
      },
    },
    {
      id: 'sentence23',
      level: 3,
      isFinal: false,
      korean: '그 중요한 직무를 맡다.',
      chinese: {
        hanzi: ['承担', '起', '那', '项', '重要', '的', '职责'],
        pinyin: ['chéngdān', 'qǐ', 'nà', 'xiàng', 'zhòngyào', 'de', 'zhízé'],
      },
    },
    {
      id: 'sentence23',
      level: 4,
      isFinal: false,
      korean: '주도적으로 그 중요한 직무를 맡다.',
      chinese: {
        hanzi: ['主动', '承担', '起', '那', '项', '重要', '的', '职责'],
        pinyin: [
          'zhǔdòng',
          'chéngdān',
          'qǐ',
          'nà',
          'xiàng',
          'zhòngyào',
          'de',
          'zhízé',
        ],
      },
    },
    {
      id: 'sentence23',
      level: 5,
      isFinal: true,
      korean: '매니저는 주도적으로 그 중요한 직무를 맡았다.',
      chinese: {
        hanzi: ['经理', '主动', '承担', '起', '那', '项', '重要', '的', '职责'],
        pinyin: [
          'jīnglǐ',
          'zhǔdòng',
          'chéngdān',
          'qǐ',
          'nà',
          'xiàng',
          'zhòngyào',
          'de',
          'zhízé',
        ],
      },
    },
    // 24번
    {
      id: 'sentence24',
      level: 1,
      isFinal: false,
      korean: '계획의 세부 내용(디테일)',
      chinese: {
        hanzi: ['计划', '的', '细节'],
        pinyin: ['jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 2,
      isFinal: false,
      korean: '계획의 세부 내용을 완벽하게 하다.',
      chinese: {
        hanzi: ['完善', '计划', '的', '细节'],
        pinyin: ['wánshàn', 'jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 3,
      isFinal: false,
      korean: '계획의 세부 내용을 노력하여 완벽하게 하다.',
      chinese: {
        hanzi: ['努力', '完善', '计划', '的', '细节'],
        pinyin: ['nǔlì', 'wánshàn', 'jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 4,
      isFinal: false,
      korean: '계획의 세부 내용을 노력하여 완벽하게 하고 있다.',
      chinese: {
        hanzi: ['正在', '努力', '完善', '计划', '的', '细节'],
        pinyin: ['zhèngzài', 'nǔlì', 'wánshàn', 'jìhuà', 'de', 'xìjié'],
      },
    },
    {
      id: 'sentence24',
      level: 5,
      isFinal: true,
      korean:
        '연구원은 계획의 세부 내용을 노력하여 완벽하게 하고 있다. (= 연구원은 계획의 세부 내용을 완벽하게 하기 위해 노력하고 있다.)',
      chinese: {
        hanzi: ['研究院', '正在', '努力', '完善', '计划', '的', '细节'],
        pinyin: [
          'yánjiūyuàn',
          'zhèngzài',
          'nǔlì',
          'wánshàn',
          'jìhuà',
          'de',
          'xìjié',
        ],
      },
    },
    // 25번
    {
      id: 'sentence25',
      level: 1,
      isFinal: false,
      korean: '인상을 남기다.',
      chinese: {
        hanzi: ['留下印象'],
        pinyin: ['liúxià yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 2,
      isFinal: false,
      korean: '인상을 남겼다.',
      chinese: {
        hanzi: ['留下了', '印象'],
        pinyin: ['liúxià le', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 3,
      isFinal: false,
      korean: '깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['留下了', '深刻', '的', '印象'],
        pinyin: ['liúxià le', 'shēnkè', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 4,
      isFinal: false,
      korean: '나에게 깊은 인상을 남겼다.',
      chinese: {
        hanzi: ['给', '我', '留下', '了', '深刻', '的', '印象'],
        pinyin: ['gěi', 'wǒ', 'liúxià', 'le', 'shēnkè', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence25',
      level: 5,
      isFinal: true,
      korean: '그 교류는 나에게 깊은 인상을 남겼다.',
      chinese: {
        hanzi: [
          '那',
          '次',
          '交流',
          '给',
          '我',
          '留下',
          '了',
          '深刻',
          '的',
          '印象',
        ],
        pinyin: [
          'nà',
          'cì',
          'jiāoliú',
          'gěi',
          'wǒ',
          'liúxià',
          'le',
          'shēnkè',
          'de',
          'yìnxiàng',
        ],
      },
    },

    // 26번
    {
      id: 'sentence26',
      level: 1,
      isFinal: false,
      korean: '엎었다.',
      chinese: {
        hanzi: ['打翻了'],
        pinyin: ['dǎfān le'],
      },
    },
    {
      id: 'sentence26',
      level: 2,
      isFinal: false,
      korean: '컵을 엎었다.',
      chinese: {
        hanzi: ['把', '杯子', '打翻', '了'],
        pinyin: ['bǎ', 'bēizi', 'dǎfān', 'le'],
      },
    },
    {
      id: 'sentence26',
      level: 3,
      isFinal: false,
      korean: '부주의하게 컵을 엎었다.',
      chinese: {
        hanzi: ['不小心把', '杯子', '打翻', '了'],
        pinyin: ['bù xiǎoxīn bǎ', 'bēizi', 'dǎfān', 'le'],
      },
    },
    {
      id: 'sentence26',
      level: 4,
      isFinal: true,
      korean: '친구가 부주의하게 컵을 엎었다.',
      chinese: {
        hanzi: ['朋友', '不', '小心', '把', '杯子', '打翻', '了'],
        pinyin: ['péngyǒu', 'bù', 'xiǎoxīn', 'bǎ', 'bēizi', 'dǎfān', 'le'],
      },
    },
    // 27번
    {
      id: 'sentence27',
      level: 1,
      isFinal: false,
      korean: '우리에게 배분했다.',
      chinese: {
        hanzi: ['分配给了', '我们'],
        pinyin: ['fēnpèi gěi le', 'wǒmen'],
      },
    },
    {
      id: 'sentence27',
      level: 2,
      isFinal: false,
      korean: '숙제를 우리에게 배분했다.',
      chinese: {
        hanzi: ['把', '作业', '分配', '给了', '我们'],
        pinyin: ['bǎ', 'zuòyè', 'fēnpèi', 'gěi le', 'wǒmen'],
      },
    },
    {
      id: 'sentence27',
      level: 3,
      isFinal: false,
      korean: '이번 주 숙제를 우리에게 배분했다.',
      chinese: {
        hanzi: [
          '把',
          '这',
          '个',
          '星期',
          '的',
          '作业',
          '分配',
          '给',
          '了',
          '我们',
        ],
        pinyin: [
          'bǎ',
          'zhè',
          'ge',
          'xīngqī',
          'de',
          'zuòyè',
          'fēnpèi',
          'gěi',
          'le',
          'wǒmen',
        ],
      },
    },
    {
      id: 'sentence27',
      level: 4,
      isFinal: true,
      korean: '선생님이 이번 주 숙제를 우리에게 배분했다.',
      chinese: {
        hanzi: [
          '老师',
          '把',
          '这',
          '个',
          '星期',
          '的',
          '作业',
          '分配',
          '给',
          '了',
          '我们',
        ],
        pinyin: [
          'lǎoshī',
          'bǎ',
          'zhè',
          'ge',
          'xīngqī',
          'de',
          'zuòyè',
          'fēnpèi',
          'gěi',
          'le',
          'wǒmen',
        ],
      },
    },
    // 28번
    {
      id: 'sentence28',
      level: 1,
      isFinal: false,
      korean: '합격했다.',
      chinese: {
        hanzi: ['录取了'],
        pinyin: ['lùqǔ le'],
      },
    },
    {
      id: 'sentence28',
      level: 2,
      isFinal: false,
      korean: '상하이 교통대학교에 합격되었다(합격했다).',
      chinese: {
        hanzi: ['被', '上海交通大学', '录取', '了'],
        pinyin: ['bèi', 'Shànghǎi Jiāotōng Dàxué', 'lùqǔ', 'le'],
      },
    },
    {
      id: 'sentence28',
      level: 3,
      isFinal: false,
      korean: '너는 상하이 교통대학교에 합격되었어(합격했어).',
      chinese: {
        hanzi: ['你', '被', '上海交通大学', '录取', '了'],
        pinyin: ['nǐ', 'bèi', 'Shànghǎi Jiāotōng Dàxué', 'lùqǔ', 'le'],
      },
    },
    {
      id: 'sentence28',
      level: 4,
      isFinal: true,
      korean: '축하해, 너는 상하이 교통대학교에 합격되었어(합격했어).',
      chinese: {
        hanzi: ['恭喜', '你', '被', '上海交通大学', '录取', '了'],
        pinyin: [
          'gōngxǐ',
          'nǐ',
          'bèi',
          'Shànghǎi Jiāotōng Dàxué',
          'lùqǔ',
          'le',
        ],
      },
    },
    //  29번

    {
      id: 'sentence29',
      level: 1,
      isFinal: false,
      korean: '홀로 돌아가다.',
      chinese: {
        hanzi: ['回到', '大厅'],
        pinyin: ['huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 2,
      isFinal: false,
      korean: '즉시 홀로 돌아가다.',
      chinese: {
        hanzi: ['立刻', '回到', '大厅'],
        pinyin: ['lìkè', 'huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 3,
      isFinal: false,
      korean: '팀원들은 즉시 홀로 돌아간다.',
      chinese: {
        hanzi: ['队员们', '立刻', '回到', '大厅'],
        pinyin: ['duìyuánmen', 'lìkè', 'huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 4,
      isFinal: false,
      korean: '팀원들에게 즉시 홀로 돌아가라고 명령한다.',
      chinese: {
        hanzi: ['命令', '队员们', '立刻', '回到', '大厅'],
        pinyin: ['mìnglìng', 'duìyuánmen', 'lìkè', 'huídào', 'dàtīng'],
      },
    },
    {
      id: 'sentence29',
      level: 5,
      isFinal: true,
      korean: '코치는 팀원들에게 즉시 홀로 돌아가라고 명령한다.',
      chinese: {
        hanzi: ['教练', '命令', '队员们', '立刻', '回到', '大厅'],
        pinyin: [
          'jiàoliàn',
          'mìnglìng',
          'duìyuánmen',
          'lìkè',
          'huídào',
          'dàtīng',
        ],
      },
    },
    // 30 번
    {
      id: 'sentence30',
      level: 1,
      isFinal: false,
      korean: '팀의 규정',
      chinese: {
        hanzi: ['团队的规定'],
        pinyin: ['Tuánduì de guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 2,
      isFinal: false,
      korean: '팀의 규정을 준수하다.',
      chinese: {
        hanzi: ['遵守', '团队', '的', '规定'],
        pinyin: ['zūnshǒu', 'tuánduì', 'de', 'guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 3,
      isFinal: false,
      korean: '자발적으로 팀의 규정을 준수하다.',
      chinese: {
        hanzi: ['自觉', '遵守', '团队', '的', '规定'],
        pinyin: ['zìjué', 'zūnshǒu', 'tuánduì', 'de', 'guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 4,
      isFinal: false,
      korean: '모두가 자발적으로 팀의 규정을 준수하다.',
      chinese: {
        hanzi: ['大家', '自觉', '遵守', '团队', '的', '规定'],
        pinyin: ['dàjiā', 'zìjué', 'zūnshǒu', 'tuánduì', 'de', 'guīdìng'],
      },
    },
    {
      id: 'sentence30',
      level: 5,
      isFinal: true,
      korean: '모두 팀의 규정을 자발적으로 준수해 주세요.',
      chinese: {
        hanzi: ['请', '自觉', '遵守', '团队', '的', '规定'],
        pinyin: [
          'qǐng',
          'dàjiā',
          'zìjué',
          'zūnshǒu',
          'tuánduì',
          'de',
          'guīdìng',
        ],
      },
    },
  ],
  day4: [
    // 31번
    {
      id: 'sentence31',
      level: 1,
      isFinal: false,
      korean: '양초 세 개.',
      chinese: {
        hanzi: ['三根蜡烛'],
        pinyin: ['sān gēn làzhú'],
      },
    },
    {
      id: 'sentence31',
      level: 2,
      isFinal: false,
      korean: '양초 세 개가 있다.',
      chinese: {
        hanzi: ['有', '三', '根', '蜡烛'],
        pinyin: ['yǒu', 'sān', 'gēn', 'làzhú'],
      },
    },
    {
      id: 'sentence31',
      level: 3,
      isFinal: false,
      korean: '상자 안에 양초 세 개가 있다.',
      chinese: {
        hanzi: ['盒子', '里', '有', '三', '根', '蜡烛'],
        pinyin: ['hézi', 'lǐ', 'yǒu', 'sān', 'gēn', 'làzhú'],
      },
    },
    {
      id: 'sentence31',
      level: 4,
      isFinal: true,
      korean: '그 상자 안에 양초 세 개가 있다.',
      chinese: {
        hanzi: ['那', '个', '盒子', '里', '有', '三', '根', '蜡烛'],
        pinyin: ['nà', 'ge', 'hézi', 'lǐ', 'yǒu', 'sān', 'gēn', 'làzhú'],
      },
    },
    // 32번
    {
      id: 'sentence32',
      level: 1,
      isFinal: false,
      korean: '몰래 먹다.',
      chinese: {
        hanzi: ['偷吃'],
        pinyin: ['tōu chī'],
      },
    },
    {
      id: 'sentence32',
      level: 2,
      isFinal: false,
      korean: '몰래 먹었다.',
      chinese: {
        hanzi: ['偷', '吃', '了'],
        pinyin: ['tōu', 'chī', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 3,
      isFinal: false,
      korean: '아이에게 몰래 먹혔다.',
      chinese: {
        hanzi: ['被', '孩子', '偷', '吃', '了'],
        pinyin: ['bèi', 'háizi', 'tōu', 'chī', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 4,
      isFinal: true,
      korean: '간식은 아이가 몰래 먹었다. (= 간식이 아이에게 몰래 먹혔다.)',
      chinese: {
        hanzi: ['点心', '被', '孩子', '偷吃', '了'],
        pinyin: ['diǎnxīn', 'bèi', 'háizi', 'tōuchī', 'le'],
      },
    },
    // 33번
    {
      id: 'sentence33',
      level: 1,
      isFinal: false,
      korean: '사람들에게 칭찬받다.',
      chinese: {
        hanzi: ['被', '人们', '称赞'],
        pinyin: ['bèi', 'rénmen', 'chēngzàn'],
      },
    },
    {
      id: 'sentence33',
      level: 2,
      isFinal: false,
      korean: '여전히 사람들에게 칭찬받다.',
      chinese: {
        hanzi: ['仍', '被', '人们', '称赞'],
        pinyin: ['réng', 'bèi', 'rénmen', 'chēngzàn'],
      },
    },
    {
      id: 'sentence33',
      level: 3,
      isFinal: false,
      korean: '지금까지 여전히 사람들에게 칭찬받는다.',
      chinese: {
        hanzi: ['至今', '仍', '被', '人们', '称赞'],
        pinyin: ['zhìjīn', 'réng', 'bèi', 'rénmen', 'chēngzàn'],
      },
    },
    {
      id: 'sentence33',
      level: 4,
      isFinal: true,
      korean: '그의 작품은 지금까지 여전히 사람들에게 칭찬받는다.',
      chinese: {
        hanzi: ['他', '的', '作品', '至今', '仍', '被', '人们', '称赞'],
        pinyin: [
          'tā',
          'de',
          'zuòpǐn',
          'zhìjīn',
          'réng',
          'bèi',
          'rénmen',
          'chēngzàn',
        ],
      },
    },
    //34 번
    {
      id: 'sentence34',
      level: 1,
      isFinal: false,
      korean: '꽤 이상적이다.',
      chinese: {
        hanzi: ['挺', '理想', '的'],
        pinyin: ['tǐng', 'lǐxiǎng', 'de'],
      },
    },
    {
      id: 'sentence34',
      level: 2,
      isFinal: false,
      korean: '조건이 꽤 이상적이다.',
      chinese: {
        hanzi: ['条件', '挺', '理想', '的'],
        pinyin: ['tiáojiàn', 'tǐng', 'lǐxiǎng', 'de'],
      },
    },
    {
      id: 'sentence34',
      level: 3,
      isFinal: false,
      korean: '회사의 조건이 꽤 이상적이다.',
      chinese: {
        hanzi: ['公司', '的', '条件', '挺', '理想', '的'],
        pinyin: ['gōngsī', 'de', 'tiáojiàn', 'tǐng', 'lǐxiǎng', 'de'],
      },
    },
    {
      id: 'sentence34',
      level: 4,
      isFinal: true,
      korean: '이 회사의 조건은 꽤 이상적이다.',
      chinese: {
        hanzi: ['这', '家', '公司', '的', '条件', '挺', '理想', '的'],
        pinyin: [
          'zhè',
          'jiā',
          'gōngsī',
          'de',
          'tiáojiàn',
          'tǐng',
          'lǐxiǎng',
          'de',
        ],
      },
    },

    // 35번
    {
      id: 'sentence35',
      level: 1,
      isFinal: false,
      korean: '무지개 한 줄',
      chinese: {
        hanzi: ['一条彩虹'],
        pinyin: ['yì tiáo cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 2,
      isFinal: false,
      korean: '아름다운 무지개 한 줄',
      chinese: {
        hanzi: ['一', '条', '美丽', '的', '彩虹'],
        pinyin: ['yì', 'tiáo', 'měilì', 'de', 'cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 3,
      isFinal: false,
      korean: '아름다운 무지개 하나가 나타났다.',
      chinese: {
        hanzi: ['出现了', '一', '条', '美丽', '的', '彩虹'],
        pinyin: ['chūxiàn le', 'yì', 'tiáo', 'měilì', 'de', 'cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 4,
      isFinal: false,
      korean: '갑자기 아름다운 무지개 하나가 나타났다.',
      chinese: {
        hanzi: ['忽然', '出现了', '一', '条', '美丽', '的', '彩虹'],
        pinyin: ['hūrán', 'chūxiàn le', 'yì', 'tiáo', 'měilì', 'de', 'cǎihóng'],
      },
    },
    {
      id: 'sentence35',
      level: 5,
      isFinal: true,
      korean: '하늘에 갑자기 아름다운 무지개 하나가 나타났다.',
      chinese: {
        hanzi: [
          '天空',
          '中',
          '忽然',
          '出现',
          '了',
          '一',
          '条',
          '美丽',
          '的',
          '彩虹',
        ],
        pinyin: [
          'tiānkōng',
          'zhōng',
          'hūrán',
          'chūxiàn',
          'le',
          'yì',
          'tiáo',
          'měilì',
          'de',
          'cǎihóng',
        ],
      },
    },
    // 36번
    {
      id: 'sentence36',
      level: 1,
      isFinal: false,
      korean: '매우 온화하다.',
      chinese: {
        hanzi: ['十分', '温柔'],
        pinyin: ['shífēn', 'wēnróu'],
      },
    },
    {
      id: 'sentence36',
      level: 2,
      isFinal: false,
      korean: '보기에 매우 온화하다. (= 매우 온화해 보인다)',
      chinese: {
        hanzi: ['看起来', '十分', '温柔'],
        pinyin: ['kànqǐlái', 'shífēn', 'wēnróu'],
      },
    },
    {
      id: 'sentence36',
      level: 3,
      isFinal: false,
      korean: '눈빛이 매우 온화해 보인다.',
      chinese: {
        hanzi: ['眼神', '看起来', '十分', '温柔'],
        pinyin: ['yǎnshén', 'kànqǐlái', 'shífēn', 'wēnróu'],
      },
    },
    {
      id: 'sentence36',
      level: 4,
      isFinal: true,
      korean: '선생님의 눈빛은 매우 온화해 보인다.',
      chinese: {
        hanzi: ['老师', '的', '眼神', '看起来', '十分', '温柔'],
        pinyin: ['lǎoshī', 'de', 'yǎnshén', 'kànqǐlái', 'shífēn', 'wēnróu'],
      },
    },
    // 37번
    {
      id: 'sentence37',
      level: 1,
      isFinal: false,
      korean: '가치가 있다.',
      chinese: {
        hanzi: ['有', '价值'],
        pinyin: ['yǒu', 'jiàzhí'],
      },
    },
    {
      id: 'sentence37',
      level: 2,
      isFinal: false,
      korean: '더 가치 있게 변하다. (= 더 가치 있게 만들다)',
      chinese: {
        hanzi: ['变得', '更', '有', '价值'],
        pinyin: ['biànde', 'gèng', 'yǒu', 'jiàzhí'],
      },
    },
    {
      id: 'sentence37',
      level: 3,
      isFinal: false,
      korean: '주말 시간을 더 가치 있게 만들다.',
      chinese: {
        hanzi: ['把', '周末', '时间', '变得', '更', '有', '价值'],
        pinyin: ['bǎ', 'zhōumò', 'shíjiān', 'biànde', 'gèng', 'yǒu', 'jiàzhí'],
      },
    },
    {
      id: 'sentence37',
      level: 4,
      isFinal: true,
      korean: '어떻게 하면 주말 시간을 더 가치 있게 만들 수 있을까?',
      chinese: {
        hanzi: ['如何', '把', '周末', '时间', '变得', '更', '有', '价值'],
        pinyin: [
          'rúhé',
          'bǎ',
          'zhōumò',
          'shíjiān',
          'biànde',
          'gèng',
          'yǒu',
          'jiàzhí',
        ],
      },
    },

    // 38번
    {
      id: 'sentence38',
      level: 1,
      isFinal: false,
      korean: '수리를 진행하다.',
      chinese: {
        hanzi: ['进行', '维修'],
        pinyin: ['jìnxíng', 'wéixiū'],
      },
    },
    {
      id: 'sentence38',
      level: 2,
      isFinal: false,
      korean: '장비를 수리하다. (= 장비에 대해 수리를 진행하다)',
      chinese: {
        hanzi: ['对', '设备', '进行', '维修'],
        pinyin: ['duì', 'shèbèi', 'jìnxíng', 'wéixiū'],
      },
    },
    {
      id: 'sentence38',
      level: 3,
      isFinal: false,
      korean: '장비를 수리하고 있다.',
      chinese: {
        hanzi: ['正在', '对', '设备', '进行', '维修'],
        pinyin: ['zhèngzài', 'duì', 'shèbèi', 'jìnxíng', 'wéixiū'],
      },
    },
    {
      id: 'sentence38',
      level: 4,
      isFinal: true,
      korean: '기술자들이 장비를 수리하고 있다.',
      chinese: {
        hanzi: ['技术员们', '正在', '对', '设备', '进行', '维修'],
        pinyin: [
          'jìshùyuánmen',
          'zhèngzài',
          'duì',
          'shèbèi',
          'jìnxíng',
          'wéixiū',
        ],
      },
    },
    // 39번
    {
      id: 'sentence39',
      level: 1,
      isFinal: false,
      korean: '담배를 피우세요.',
      chinese: {
        hanzi: ['请', '抽烟'],
        pinyin: ['qǐng', 'chōuyān'],
      },
    },
    {
      id: 'sentence39',
      level: 2,
      isFinal: false,
      korean: '담배를 피우지 마세요.',
      chinese: {
        hanzi: ['请', '勿', '抽烟'],
        pinyin: ['qǐng', 'wù', 'chōuyān'],
      },
    },
    {
      id: 'sentence39',
      level: 3,
      isFinal: true,
      korean: '실험실 내에서는 담배를 피우지 마세요.',
      chinese: {
        hanzi: ['请', '勿', '在', '实验室', '内', '抽烟'],
        pinyin: ['qǐng', 'wù', 'zài', 'shíyànshì', 'nèi', 'chōuyān'],
      },
    },
    // 40번
    {
      id: 'sentence40',
      level: 1,
      isFinal: false,
      korean: '그녀의 생각',
      chinese: {
        hanzi: ['她', '的', '想法'],
        pinyin: ['tā', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence40',
      level: 2,
      isFinal: false,
      korean: '(단지) 그녀의 생각일 뿐이다.',
      chinese: {
        hanzi: ['只是', '她', '的', '想法'],
        pinyin: ['zhǐshì', 'tā', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence40',
      level: 3,
      isFinal: false,
      korean: '그건 (단지) 그녀의 생각일 뿐이다.',
      chinese: {
        hanzi: ['那', '只是', '她', '的', '想法'],
        pinyin: ['nà', 'zhǐshì', 'tā', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence40',
      level: 4,
      isFinal: true,
      korean: '어쩌면 그건 (단지) 그녀의 생각일 뿐이다.',
      chinese: {
        hanzi: ['说不定', '那', '只是', '她', '的', '想法'],
        pinyin: ['shuōbudìng', 'nà', 'zhǐshì', 'tā', 'de', 'xiǎngfǎ'],
      },
    },
  ],
  day5: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '풍습이 있다.',
      chinese: {
        hanzi: ['有', '风俗', '习惯'],
        pinyin: ['yǒu', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: false,
      korean: '독특한 풍습이 있다.',
      chinese: {
        hanzi: ['有', '独特', '的', '风俗', '习惯'],
        pinyin: ['yǒu', 'dútè', 'de', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence41',
      level: 3,
      isFinal: false,
      korean: '모두 독특한 풍습이 있다.',
      chinese: {
        hanzi: ['都', '有', '独特', '的', '风俗', '习惯'],
        pinyin: ['dōu', 'yǒu', 'dútè', 'de', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence41',
      level: 4,
      isFinal: true,
      korean: '각 지역마다 (모두) 독특한 풍습이 있다.',
      chinese: {
        hanzi: ['每', '个', '地区', '都', '有', '独特', '的', '风俗', '习惯'],
        pinyin: [
          'měi',
          'ge',
          'dìqū',
          'dōu',
          'yǒu',
          'dútè',
          'de',
          'fēngsú',
          'xíguàn',
        ],
      },
    },
    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '좋은 평가를 받다.',
      chinese: {
        hanzi: ['得到', '好评'],
        pinyin: ['dédào', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean: '좋은 평가를 받았다.',
      chinese: {
        hanzi: ['得到了', '好评'],
        pinyin: ['dédào le', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: false,
      korean: '한결같은 호평을 받았다.',
      chinese: {
        hanzi: ['得到了', '一致', '好评'],
        pinyin: ['dédào le', 'yízhì', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 4,
      isFinal: false,
      korean: '고객들의 한결같은 호평을 받았다.',
      chinese: {
        hanzi: ['得到了', '顾客的', '一致', '好评'],
        pinyin: ['dédào le', 'gùkè de', 'yízhì', 'hǎopíng'],
      },
    },
    {
      id: 'sentence42',
      level: 5,
      isFinal: true,
      korean: '그는 고객들의 한결같은 호평을 받았다.',
      chinese: {
        hanzi: ['他', '得到了', '顾客', '的', '一致', '好评'],
        pinyin: ['tā', 'dédào le', 'gùkè', 'de', 'yízhì', 'hǎopíng'],
      },
    },

    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '모두가 바라다.',
      chinese: {
        hanzi: ['大家', '希望'],
        pinyin: ['dàjiā', 'xīwàng'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean: '모두가 협조하여 처리하기를 바란다.',
      chinese: {
        hanzi: ['大家', '希望', '配合', '处理'],
        pinyin: ['dàjiā', 'xīwàng', 'pèihé', 'chǔlǐ'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: false,
      korean: '모두가 자발적으로 협조하여 처리하기를 바란다.',
      chinese: {
        hanzi: ['大家', '希望', '自觉', '配合', '处理'],
        pinyin: ['dàjiā', 'xīwàng', 'zìjué', 'pèihé', 'chǔlǐ'],
      },
    },
    {
      id: 'sentence43',
      level: 4,
      isFinal: true,
      korean: '모두들 당신이 알아서(자발적으로) 협조하여 처리하기를 바란다.',
      chinese: {
        hanzi: ['大家', '希望', '你', '能', '自觉', '配合', '处理'],
        pinyin: ['dàjiā', 'xīwàng', 'nǐ', 'néng', 'zìjué', 'pèihé', 'chǔlǐ'],
      },
    },
    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '결과를 초래하다.',
      chinese: {
        hanzi: ['造成', '后果'],
        pinyin: ['zàochéng', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '결과를 초래했다.',
      chinese: {
        hanzi: ['造成了', '后果'],
        pinyin: ['zàochéng le', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: false,
      korean: '심각한 결과를 초래했다.',
      chinese: {
        hanzi: ['造成', '了', '严重', '的', '后果'],
        pinyin: ['zàochéng', 'le', 'yánzhòng', 'de', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 4,
      isFinal: false,
      korean: '매우 심각한 결과를 초래했다.',
      chinese: {
        hanzi: ['造成', '了', '极其', '严重', '的', '后果'],
        pinyin: ['zàochéng', 'le', 'jíqí', 'yánzhòng', 'de', 'hòuguǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 5,
      isFinal: true,
      korean: '이번 지진은 매우 심각한 결과를 초래했다.',
      chinese: {
        hanzi: ['这', '次', '地震', '造成', '了', '极其', '严重', '的', '后果'],
        pinyin: [
          'zhè',
          'cì',
          'dìzhèn',
          'zàochéng',
          'le',
          'jíqí',
          'yánzhòng',
          'de',
          'hòuguǒ',
        ],
      },
    },
    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '회의에 참석하다.',
      chinese: {
        hanzi: ['出席', '会议'],
        pinyin: ['chūxí', 'huìyì'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean: '의견을 발표하다.',
      chinese: {
        hanzi: ['发表', '意见'],
        pinyin: ['fābiǎo', 'yìjiàn'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: false,
      korean: '회의에 참석하고 의견을 발표하다.',
      chinese: {
        hanzi: ['出席', '会议', '并', '发表', '意见'],
        pinyin: ['chūxí', 'huìyì', 'bìng', 'fābiǎo', 'yìjiàn'],
      },
    },
    {
      id: 'sentence45',
      level: 4,
      isFinal: false,
      korean: '회의에 참석하고 의견을 발표할 것이다.',
      chinese: {
        hanzi: ['将', '出席', '会议', '并', '发表', '意见'],
        pinyin: ['jiāng', 'chūxí', 'huìyì', 'bìng', 'fābiǎo', 'yìjiàn'],
      },
    },
    {
      id: 'sentence45',
      level: 5,
      isFinal: true,
      korean: '대표가 회의에 참석하여 의견을 발표할 것이다.',
      chinese: {
        hanzi: ['代表', '将', '出席', '会议', '并', '发表', '意见'],
        pinyin: [
          'dàibiǎo',
          'jiāng',
          'chūxí',
          'huìyì',
          'bìng',
          'fābiǎo',
          'yìjiàn',
        ],
      },
    },
    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '차이가 존재한다.',
      chinese: {
        hanzi: ['存在', '差异'],
        pinyin: ['cúnzài', 'chāyì'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '용도에 차이가 존재한다.',
      chinese: {
        hanzi: ['用途', '存在', '差异'],
        pinyin: ['yòngtú', 'cúnzài', 'chāyì'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: 'A와 B의 용도에 차이가 존재한다.',
      chinese: {
        hanzi: ['A和B', '的', '用途', '存在', '差异'],
        pinyin: ['A hé B', 'de', 'yòngtú', 'cúnzài', 'chāyì'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: true,
      korean: '공식 영수증와 일반 영수증의 용도에 차이가 존재한다.',
      chinese: {
        hanzi: ['发票', '和', '收据', '的', '用途', '存在', '差异'],
        pinyin: ['fāpiào', 'hé', 'shōujù', 'de', 'yòngtú', 'cúnzài', 'chāyì'],
      },
    },
    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '토론하기 시작하다.',
      chinese: {
        hanzi: ['讨论', '起来'],
        pinyin: ['tǎolùn', 'qǐlái'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '잇따라 토론하기 시작하다.',
      chinese: {
        hanzi: ['纷纷', '讨论', '起来'],
        pinyin: ['fēnfēn', 'tǎolùn', 'qǐlái'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '사람들이 잇따라 토론하기 시작한다.',
      chinese: {
        hanzi: ['人们', '纷纷', '讨论', '起来'],
        pinyin: ['rénmen', 'fēnfēn', 'tǎolùn', 'qǐlái'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: true,
      korean: '주변 사람들이 잇따라 토론하기 시작한다.',
      chinese: {
        hanzi: ['周边', '的', '人们', '纷纷', '讨论', '起来'],
        pinyin: ['zhōubiān', 'de', 'rénmen', 'fēnfēn', 'tǎolùn', 'qǐlái'],
      },
    },
    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '분해했다.',
      chinese: {
        hanzi: ['拆开了'],
        pinyin: ['chāi kāi le'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '모두 분해했다.',
      chinese: {
        hanzi: ['都', '拆开', '了'],
        pinyin: ['dōu', 'chāi kāi', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '부품을 모두 분해했다.',
      chinese: {
        hanzi: ['把', '零件', '都拆开', '了'],
        pinyin: ['bǎ', 'língjiàn', 'dōu chāi kāi', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: false,
      korean: '이 기계의 부품을 모두 분해했다.',
      chinese: {
        hanzi: ['把', '这', '台', '机器', '的', '零件', '都', '拆开', '了'],
        pinyin: [
          'bǎ',
          'zhè',
          'tái',
          'jīqì',
          'de',
          'língjiàn',
          'dōu',
          'chāi kāi',
          'le',
        ],
      },
    },
    {
      id: 'sentence48',
      level: 5,
      isFinal: true,
      korean: '라오왕은 이 기계의 부품을 모두 분해했다.',
      chinese: {
        hanzi: [
          '老王',
          '把',
          '这',
          '台',
          '机器',
          '的',
          '零件',
          '都',
          '拆',
          '开',
          '了',
        ],
        pinyin: [
          'Lǎo Wáng',
          'bǎ',
          'zhè',
          'tái',
          'jīqì',
          'de',
          'língjiàn',
          'dōu',
          'chāi',
          'kāi',
          'le',
        ],
      },
    },
    // 49번
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '아쉬움을 남기다.',
      chinese: {
        hanzi: ['留下', '遗憾'],
        pinyin: ['liúxià', 'yíhàn'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '자신의 삶(생활)에 아쉬움을 남기다.',
      chinese: {
        hanzi: ['给', '自己', '的', '生活', '留下', '遗憾'],
        pinyin: ['gěi', 'zìjǐ', 'de', 'shēnghuó', 'liúxià', 'yíhàn'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '자신의 삶(생활)에 아쉬움을 남기지 마라.',
      chinese: {
        hanzi: ['不要', '给', '自己', '的', '生活', '留下', '遗憾'],
        pinyin: ['búyào', 'gěi', 'zìjǐ', 'de', 'shēnghuó', 'liúxià', 'yíhàn'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: true,
      korean: '최대한 자신의 삶(생활)에 아쉬움을 남기지 마라.',
      chinese: {
        hanzi: ['尽量', '不要', '给', '自己', '的', '生活', '留下', '遗憾'],
        pinyin: [
          'jǐnliàng',
          'búyào',
          'gěi',
          'zìjǐ',
          'de',
          'shēnghuó',
          'liúxià',
          'yíhàn',
        ],
      },
    },
    //50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean: '흥정을 하다.',
      chinese: {
        hanzi: ['讨价', '还价'],
        pinyin: ['tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '흥정하려고 한다.',
      chinese: {
        hanzi: ['要', '讨价', '还价'],
        pinyin: ['yào', 'tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '참지 못하고 흥정하려 한다.',
      chinese: {
        hanzi: ['忍不住', '要', '讨价', '还价'],
        pinyin: ['rěn bu zhù', 'yào', 'tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: false,
      korean: '늘 참지 못하고 흥정하려 한다.',
      chinese: {
        hanzi: ['总', '忍', '不', '住', '要', '讨价', '还价'],
        pinyin: ['zǒng', 'rěn', 'bu', 'zhù', 'yào', 'tǎojià', 'huánjià'],
      },
    },
    {
      id: 'sentence50',
      level: 5,
      isFinal: true,
      korean: '그녀는 쇼핑할 때 늘 참지 못하고 흥정을 한다.',
      chinese: {
        hanzi: [
          '她',
          '购物',
          '时',
          '总',
          '忍',
          '不',
          '住',
          '要',
          '讨价',
          '还价',
        ],
        pinyin: [
          'tā',
          'gòuwù',
          'shí',
          'zǒng',
          'rěn',
          'bu',
          'zhù',
          'yào',
          'tǎojià',
          'huánjià',
        ],
      },
    },
  ],
  day6: [
    // 51번
    {
      id: 'sentence51',
      level: 1,
      isFinal: false,
      korean: '기념할 만한 의미가 있다.',
      chinese: {
        hanzi: ['有', '纪念', '意义'],
        pinyin: ['yǒu', 'jìniàn', 'yìyì'],
      },
    },
    {
      id: 'sentence51',
      level: 2,
      isFinal: false,
      korean: '매우 기념할 만한 의미가 있다.',
      chinese: {
        hanzi: ['非常', '有', '纪念', '意义'],
        pinyin: ['fēicháng', 'yǒu', 'jìniàn', 'yìyì'],
      },
    },
    {
      id: 'sentence51',
      level: 3,
      isFinal: false,
      korean: '이 단체 사진은 매우 기념할 만한 의미가 있다.',
      chinese: {
        hanzi: ['这张', '合影', '非常', '有', '纪念', '意义'],
        pinyin: ['zhè zhāng', 'héyǐng', 'fēicháng', 'yǒu', 'jìniàn', 'yìyì'],
      },
    },
    {
      id: 'sentence51',
      level: 4,
      isFinal: true,
      korean: '이 몇 장의 단체 사진은 매우 기념할 만한 의미가 있다.',
      chinese: {
        hanzi: ['这', '几', '张', '合影', '非常', '有', '纪念', '意义'],
        pinyin: [
          'zhè',
          'jǐ',
          'zhāng',
          'héyǐng',
          'fēicháng',
          'yǒu',
          'jìniàn',
          'yìyì',
        ],
      },
    },
    // 52번
    {
      id: 'sentence52',
      level: 1,
      isFinal: false,
      korean: '문제가 존재한다.',
      chinese: {
        hanzi: ['存在', '问题'],
        pinyin: ['cúnzài', 'wèntí'],
      },
    },
    {
      id: 'sentence52',
      level: 2,
      isFinal: false,
      korean: '몇 가지 문제가 존재한다.',
      chinese: {
        hanzi: ['存在', '一些', '问题'],
        pinyin: ['cúnzài', 'yìxiē', 'wèntí'],
      },
    },
    {
      id: 'sentence52',
      level: 3,
      isFinal: false,
      korean: '몇 가지 논리적인 문제가 존재한다.',
      chinese: {
        hanzi: ['存在', '一些', '逻辑', '问题'],
        pinyin: ['cúnzài', 'yìxiē', 'luójí', 'wèntí'],
      },
    },
    {
      id: 'sentence52',
      level: 4,
      isFinal: true,
      korean: '그의 발언에는 몇 가지 논리적인 문제가 있다.',
      chinese: {
        hanzi: ['他', '的', '发言', '存在', '一些', '逻辑', '问题'],
        pinyin: ['tā', 'de', 'fāyán', 'cúnzài', 'yìxiē', 'luójí', 'wèntí'],
      },
    },
    // 53번
    {
      id: 'sentence53',
      level: 1,
      isFinal: false,
      korean: '유난히 아름답다.',
      chinese: {
        hanzi: ['格外', '美丽'],
        pinyin: ['géwài', 'měilì'],
      },
    },
    {
      id: 'sentence53',
      level: 2,
      isFinal: false,
      korean: '식물이 유난히 아름답다.',
      chinese: {
        hanzi: ['植物', '格外', '美丽'],
        pinyin: ['zhíwù', 'géwài', 'měilì'],
      },
    },
    {
      id: 'sentence53',
      level: 3,
      isFinal: false,
      korean: '그 화분의 식물은 유난히 아름답다.',
      chinese: {
        hanzi: ['那盆', '植物', '格外', '美丽'],
        pinyin: ['nà pén', 'zhíwù', 'géwài', 'měilì'],
      },
    },
    {
      id: 'sentence53',
      level: 4,
      isFinal: true,
      korean: '그 분홍색 화분의 식물은 유난히 아름답다.',
      chinese: {
        hanzi: ['那', '盆', '粉色', '的', '植物', '格外', '美丽'],
        pinyin: ['nà', 'pén', 'fěnsè', 'de', 'zhíwù', 'géwài', 'měilì'],
      },
    },
    // 54번
    {
      id: 'sentence54',
      level: 1,
      isFinal: false,
      korean: '존중을 받다.',
      chinese: {
        hanzi: ['受到', '尊重'],
        pinyin: ['shòudào', 'zūnzhòng'],
      },
    },
    {
      id: 'sentence54',
      level: 2,
      isFinal: false,
      korean: '존중을 받아야 한다.',
      chinese: {
        hanzi: ['应该', '受到', '尊重'],
        pinyin: ['yīnggāi', 'shòudào', 'zūnzhòng'],
      },
    },
    {
      id: 'sentence54',
      level: 3,
      isFinal: false,
      korean: '업무 성과는 존중받아야 한다.',
      chinese: {
        hanzi: ['工作', '成果', '应该', '受到', '尊重'],
        pinyin: ['gōngzuò', 'chéngguǒ', 'yīnggāi', 'shòudào', 'zūnzhòng'],
      },
    },
    {
      id: 'sentence54',
      level: 4,
      isFinal: true,
      korean: '모두의 업무 성과는 존중받아야 한다.',
      chinese: {
        hanzi: ['大家', '的', '工作', '成果', '应该', '受到', '尊重'],
        pinyin: [
          'Dàjiā',
          'de',
          'gōngzuò',
          'chéngguǒ',
          'yīnggāi',
          'shòudào',
          'zūnzhòng',
        ],
      },
    },

    // 55번
    {
      id: 'sentence55',
      level: 1,
      isFinal: false,
      korean: '견해를 설명하다.',
      chinese: {
        hanzi: ['阐述', '看法'],
        pinyin: ['chǎnshù', 'kànfǎ'],
      },
    },
    {
      id: 'sentence55',
      level: 2,
      isFinal: false,
      korean: '견해를 설명해 주세요.',
      chinese: {
        hanzi: ['请', '阐述', '看法'],
        pinyin: ['qǐng', 'chǎnshù', 'kànfǎ'],
      },
    },
    {
      id: 'sentence55',
      level: 3,
      isFinal: false,
      korean: '견해를 한 번 설명해 주세요.',
      chinese: {
        hanzi: ['请', '阐述', '一下', '看法'],
        pinyin: ['qǐng', 'chǎnshù', 'yíxià', 'kànfǎ'],
      },
    },
    {
      id: 'sentence55',
      level: 4,
      isFinal: true,
      korean: '당신의 견해를 설명해 주세요.',
      chinese: {
        hanzi: ['请', '阐述', '一下', '你', '的', '看法'],
        pinyin: ['qǐng', 'chǎnshù', 'yíxià', 'nǐ', 'de', 'kànfǎ'],
      },
    },
    // 56번
    {
      id: 'sentence56',
      level: 1,
      isFinal: false,
      korean: '특별히 조심하다.',
      chinese: {
        hanzi: ['特别', '小心'],
        pinyin: ['tèbié', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence56',
      level: 2,
      isFinal: false,
      korean: '운전할 때 특히 조심하다.',
      chinese: {
        hanzi: ['开车', '特别', '小心'],
        pinyin: ['kāichē', 'tèbié', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence56',
      level: 3,
      isFinal: false,
      korean:
        '비 오는 날 운전할 때 특히 조심한다. (= 비가 올 때 운전은 특히 조심한다)',
      chinese: {
        hanzi: ['在', '下', '雨', '时', '开车', '特别', '小心'],
        pinyin: ['zài', 'xià', 'yǔ', 'shí', 'kāichē', 'tèbié', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence56',
      level: 4,
      isFinal: true,
      korean: '(그) 친구는 비 오는 날 운전할 때 특히 조심한다.',
      chinese: {
        hanzi: ['朋友', '在', '下', '雨', '时', '开车', '特别', '小心'],
        pinyin: [
          'péngyou',
          'zài',
          'xià',
          'yǔ',
          'shí',
          'kāichē',
          'tèbié',
          'xiǎoxīn',
        ],
      },
    },
    // 57번
    {
      id: 'sentence57',
      level: 1,
      isFinal: false,
      korean: '누가 깨뜨렸어?',
      chinese: {
        hanzi: ['谁', '弄碎'],
        pinyin: ['shéi', 'nòngsuì'],
      },
    },
    {
      id: 'sentence57',
      level: 2,
      isFinal: false,
      korean: '누가 깨뜨린 것?',
      chinese: {
        hanzi: ['谁', '弄碎', '的'],
        pinyin: ['shéi', 'nòngsuì', 'de'],
      },
    },
    {
      id: 'sentence57',
      level: 3,
      isFinal: false,
      korean: '누가 깨뜨린 거야?',
      chinese: {
        hanzi: ['是', '谁', '弄碎', '的'],
        pinyin: ['shì', 'shéi', 'nòngsuì', 'de'],
      },
    },
    {
      id: 'sentence57',
      level: 4,
      isFinal: true,
      korean: '엄마의 물컵은 누가 깨뜨린 거야?',
      chinese: {
        hanzi: ['妈妈', '的', '水杯', '是', '谁', '弄碎', '的'],
        pinyin: ['māma', 'de', 'shuǐbēi', 'shì', 'shéi', 'nòngsuì', 'de'],
      },
    },
    // 58번
    {
      id: 'sentence58',
      level: 1,
      isFinal: false,
      korean: '매니저에게 전달하다.',
      chinese: {
        hanzi: ['转达给', '经理'],
        pinyin: ['zhuǎndá gěi', 'jīnglǐ'],
      },
    },
    {
      id: 'sentence58',
      level: 2,
      isFinal: false,
      korean: '일을 매니저에게 전달하다.',
      chinese: {
        hanzi: ['把', '事情', '转达', '给', '经理'],
        pinyin: ['bǎ', 'shìqíng', 'zhuǎndá', 'gěi', 'jīnglǐ'],
      },
    },
    {
      id: 'sentence58',
      level: 3,
      isFinal: false,
      korean: '그 일을 매니저에게 전달하다.',
      chinese: {
        hanzi: ['把', '那', '件', '事情', '转达', '给', '经理'],
        pinyin: ['bǎ', 'nà', 'jiàn', 'shìqíng', 'zhuǎndá', 'gěi', 'jīnglǐ'],
      },
    },
    {
      id: 'sentence58',
      level: 4,
      isFinal: false,
      korean: '너는 그 일을 매니저에게 전달해.',
      chinese: {
        hanzi: ['你', '把', '那', '件', '事情', '转达', '给', '经理'],
        pinyin: [
          'nǐ',
          'bǎ',
          'nà',
          'jiàn',
          'shìqíng',
          'zhuǎndá',
          'gěi',
          'jīnglǐ',
        ],
      },
    },
    {
      id: 'sentence58',
      level: 5,
      isFinal: true,
      korean: '번거롭겠지만 너가 그 일을 매니저에게 전달해 줘.',
      chinese: {
        hanzi: ['麻烦', '你', '把', '那', '件', '事情', '转达', '给', '经理'],
        pinyin: [
          'máfan',
          'nǐ',
          'bǎ',
          'nà',
          'jiàn',
          'shìqíng',
          'zhuǎndá',
          'gěi',
          'jīnglǐ',
        ],
      },
    },

    // 59번
    {
      id: 'sentence59',
      level: 1,
      isFinal: false,
      korean: '발견했다.',
      chinese: {
        hanzi: ['发现了'],
        pinyin: ['fāxiàn le'],
      },
    },
    {
      id: 'sentence59',
      level: 2,
      isFinal: false,
      korean: '연구진에 의해 발견되었다.',
      chinese: {
        hanzi: ['被', '研究', '人员', '发现', '了'],
        pinyin: ['bèi', 'yánjiū', 'rényuán', 'fāxiàn', 'le'],
      },
    },
    {
      id: 'sentence59',
      level: 3,
      isFinal: false,
      korean: '섬이 연구진에 의해 발견되었다.',
      chinese: {
        hanzi: ['岛屿', '被', '研究', '人员', '发现', '了'],
        pinyin: ['dǎoyǔ', 'bèi', 'yánjiū', 'rényuán', 'fāxiàn', 'le'],
      },
    },
    {
      id: 'sentence59',
      level: 4,
      isFinal: true,
      korean: '그 섬은 연구진에 의해 발견되었다.',
      chinese: {
        hanzi: ['那', '座', '岛屿', '被', '研究', '人员', '发现', '了'],
        pinyin: [
          'nà',
          'zuò',
          'dǎoyǔ',
          'bèi',
          'yánjiū',
          'rényuán',
          'fāxiàn',
          'le',
        ],
      },
    },
    //60번
    {
      id: 'sentence60',
      level: 1,
      isFinal: false,
      korean: '보증금을 내다.',
      chinese: {
        hanzi: ['交', '押金'],
        pinyin: ['jiāo', 'yājīn'],
      },
    },
    {
      id: 'sentence60',
      level: 2,
      isFinal: false,
      korean: '보증금을 얼마 내? (= 얼마의 보증금을 내?)',
      chinese: {
        hanzi: ['交', '多少押金'],
        pinyin: ['jiāo', 'duōshǎo yājīn'],
      },
    },
    {
      id: 'sentence60',
      level: 3,
      isFinal: false,
      korean: '보증금 얼마를 내야 해? (= 얼마의 보증금이 필요해?)',
      chinese: {
        hanzi: ['需要', '交', '多少', '押金'],
        pinyin: ['xūyào', 'jiāo', 'duōshǎo', 'yājīn'],
      },
    },
    {
      id: 'sentence60',
      level: 4,
      isFinal: false,
      korean: '보증금을 얼마 내야 하는지 한번 문의하다.',
      chinese: {
        hanzi: ['询问', '一下', '需要', '交', '多少', '押金'],
        pinyin: ['xúnwèn', 'yíxià', 'xūyào', 'jiāo', 'duōshǎo', 'yājīn'],
      },
    },
    {
      id: 'sentence60',
      level: 5,
      isFinal: false,
      korean:
        '제 동급생을 위해 보증금을 얼마 내야 하는지 한번 문의해 주세요. (= 제 동급생을 도와 보증금을 얼마 내야 하는지 한번 문의해 주세요)',
      chinese: {
        hanzi: [
          '帮',
          '我的',
          '同学',
          '询问',
          '一下',
          '需要',
          '交',
          '多少',
          '押金',
        ],
        pinyin: [
          'bāng',
          'wǒ de',
          'tóngxué',
          'xúnwèn',
          'yíxià',
          'xūyào',
          'jiāo',
          'duōshǎo',
          'yājīn',
        ],
      },
    },
    {
      id: 'sentence60',
      level: 6,
      isFinal: false,
      korean:
        '제 동급생을 위해 보증금을 얼마 내야 하는지 한번 문의해 줄 수 있으세요?',
      chinese: {
        hanzi: [
          '能',
          '帮',
          '我',
          '的',
          '同学',
          '询问',
          '一下',
          '需要',
          '交',
          '多少',
          '押金',
          '吗',
        ],
        pinyin: [
          'néng',
          'bāng',
          'wǒ',
          'de',
          'tóngxué',
          'xúnwèn',
          'yíxià',
          'xūyào',
          'jiāo',
          'duōshǎo',
          'yājīn',
          'ma',
        ],
      },
    },
    {
      id: 'sentence60',
      level: 7,
      isFinal: true,
      korean:
        '당신은 제 동급생을 위해 보증금을 얼마 내야 하는지 한번 문의해 줄 수 있으세요?',
      chinese: {
        hanzi: [
          '你',
          '能',
          '帮',
          '我',
          '的',
          '同学',
          '询问',
          '一下',
          '需要',
          '交',
          '多少',
          '押金',
          '吗',
        ],
        pinyin: [
          'Nǐ',
          'néng',
          'bāng',
          'wǒ',
          'de',
          'tóngxué',
          'xúnwèn',
          'yíxià',
          'xūyào',
          'jiāo',
          'duōshǎo',
          'yājīn',
          'ma',
        ],
      },
    },
  ],
  day7: [
    // 61번
    {
      id: 'sentence61',
      level: 1,
      isFinal: false,
      korean: '조금 흐릿하다.',
      chinese: {
        hanzi: ['有点儿', '模糊'],
        pinyin: ['yǒudiǎnr', 'móhu'],
      },
    },
    {
      id: 'sentence61',
      level: 2,
      isFinal: false,
      korean: '날짜가 조금 흐릿하다.',
      chinese: {
        hanzi: ['日期', '有点儿', '模糊'],
        pinyin: ['rìqī', 'yǒudiǎnr', 'móhu'],
      },
    },
    {
      id: 'sentence61',
      level: 3,
      isFinal: true,
      korean: '상자에 (적힌) 날짜가 조금 흐릿하다.',
      chinese: {
        hanzi: ['盒子', '上', '的', '日期', '有点儿', '模糊'],
        pinyin: ['hézi', 'shàng', 'de', 'rìqī', 'yǒudiǎnr', 'móhu'],
      },
    },

    // 62번
    {
      id: 'sentence62',
      level: 1,
      isFinal: false,
      korean: '할머니를 찾아뵙다.',
      chinese: {
        hanzi: ['看望', '奶奶'],
        pinyin: ['kànwàng', 'nǎinai'],
      },
    },
    {
      id: 'sentence62',
      level: 2,
      isFinal: false,
      korean: '할머니를 찾아뵈러 가다.',
      chinese: {
        hanzi: ['去', '看望', '奶奶'],
        pinyin: ['qù', 'kànwàng', 'nǎinai'],
      },
    },
    {
      id: 'sentence62',
      level: 3,
      isFinal: false,
      korean: '할머니를 찾아뵈러 가자.',
      chinese: {
        hanzi: ['去', '看望', '奶奶', '吧'],
        pinyin: ['qù', 'kànwàng', 'nǎinai', 'ba'],
      },
    },
    {
      id: 'sentence62',
      level: 4,
      isFinal: false,
      korean: '다음 주에 할머니를 찾아뵈러 가자.',
      chinese: {
        hanzi: ['下', '个', '星期', '去', '看望', '奶奶', '吧'],
        pinyin: ['xià', 'ge', 'xīngqī', 'qù', 'kànwàng', 'nǎinai', 'ba'],
      },
    },
    {
      id: 'sentence62',
      level: 5,
      isFinal: true,
      korean: '우리 다음 주에 할머니를 찾아뵈러 가자.',
      chinese: {
        hanzi: ['咱们', '下', '个', '星期', '去', '看望', '奶奶', '吧'],
        pinyin: [
          'zánmen',
          'xià',
          'ge',
          'xīngqī',
          'qù',
          'kànwàng',
          'nǎinai',
          'ba',
        ],
      },
    },
    // 63번
    {
      id: 'sentence63',
      level: 1,
      isFinal: false,
      korean: '유통기한이 지났다.',
      chinese: {
        hanzi: ['过期了'],
        pinyin: ['guòqī le'],
      },
    },
    {
      id: 'sentence63',
      level: 2,
      isFinal: false,
      korean: '이미 유통기한이 지났다.',
      chinese: {
        hanzi: ['已经', '过期', '了'],
        pinyin: ['yǐjīng', 'guòqī', 'le'],
      },
    },
    {
      id: 'sentence63',
      level: 3,
      isFinal: false,
      korean: '우유는 이미 유통기한이 지났다.',
      chinese: {
        hanzi: ['牛奶', '已经', '过期', '了'],
        pinyin: ['niúnǎi', 'yǐjīng', 'guòqī', 'le'],
      },
    },
    {
      id: 'sentence63',
      level: 4,
      isFinal: true,
      korean: '냉장고 안의 우유는 이미 유통기한이 지났다.',
      chinese: {
        hanzi: ['冰箱', '里', '的', '牛奶', '已经', '过期', '了'],
        pinyin: ['bīngxiāng', 'lǐ', 'de', 'niúnǎi', 'yǐjīng', 'guòqī', 'le'],
      },
    },
    // 74번
    {
      id: 'sentence64',
      level: 1,
      isFinal: false,
      korean: '파산한 일',
      chinese: {
        hanzi: ['破产', '的', '事情'],
        pinyin: ['pòchǎn', 'de', 'shìqing'],
      },
    },
    {
      id: 'sentence64',
      level: 2,
      isFinal: false,
      korean: '자신이 파산한 일',
      chinese: {
        hanzi: ['自己', '破产', '的', '事情'],
        pinyin: ['zìjǐ', 'pòchǎn', 'de', 'shìqing'],
      },
    },
    {
      id: 'sentence64',
      level: 3,
      isFinal: false,
      korean: '자신이 파산한 일을 드러내다.',
      chinese: {
        hanzi: ['暴露', '自己', '破产', '的', '事情'],
        pinyin: ['bàolù', 'zìjǐ', 'pòchǎn', 'de', 'shìqing'],
      },
    },
    {
      id: 'sentence64',
      level: 4,
      isFinal: false,
      korean: '자신이 파산한 일을 드러내고 싶지 않다.',
      chinese: {
        hanzi: ['不', '想', '暴露', '自己', '破产', '的', '事情'],
        pinyin: ['bù', 'xiǎng', 'bàolù', 'zìjǐ', 'pòchǎn', 'de', 'shìqing'],
      },
    },
    {
      id: 'sentence64',
      level: 5,
      isFinal: true,
      korean: '그녀는 자신이 파산한 일을 드러내고 싶지 않다.',
      chinese: {
        hanzi: ['她', '不', '想', '暴露', '自己', '破产', '的', '事情'],
        pinyin: [
          'tā',
          'bù',
          'xiǎng',
          'bàolù',
          'zìjǐ',
          'pòchǎn',
          'de',
          'shìqing',
        ],
      },
    },
    // 75번
    {
      id: 'sentence65',
      level: 1,
      isFinal: false,
      korean: '계속 수정하다.',
      chinese: {
        hanzi: ['继续', '调整'],
        pinyin: ['jìxù', 'tiáozhěng'],
      },
    },
    {
      id: 'sentence65',
      level: 2,
      isFinal: false,
      korean: '계속 수정할 필요가 있다.',
      chinese: {
        hanzi: ['需要', '继续', '调整'],
        pinyin: ['xūyào', 'jìxù', 'tiáozhěng'],
      },
    },
    {
      id: 'sentence65',
      level: 3,
      isFinal: false,
      korean: '아직 계속 수정해야 한다.',
      chinese: {
        hanzi: ['还', '需要', '继续', '调整'],
        pinyin: ['hái', 'xūyào', 'jìxù', 'tiáozhěng'],
      },
    },
    {
      id: 'sentence65',
      level: 4,
      isFinal: true,
      korean: '이 보고서는 아직 계속 수정이 필요하다.',
      chinese: {
        hanzi: ['这', '篇', '报告', '还', '需要', '继续', '调整'],
        pinyin: ['zhè', 'piān', 'bàogào', 'hái', 'xūyào', 'jìxù', 'tiáozhěng'],
      },
    },
    // 76번
    {
      id: 'sentence66',
      level: 1,
      isFinal: false,
      korean: '책상 위에 놓다.',
      chinese: {
        hanzi: ['放到', '桌子', '上'],
        pinyin: ['fàng dào', 'zhuōzi', 'shàng'],
      },
    },
    {
      id: 'sentence66',
      level: 2,
      isFinal: false,
      korean: '서류를 책상 위에 놓다.',
      chinese: {
        hanzi: ['把', '文件', '放', '到', '桌子', '上'],
        pinyin: ['bǎ', 'wénjiàn', 'fàng', 'dào', 'zhuōzi', 'shàng'],
      },
    },
    {
      id: 'sentence66',
      level: 3,
      isFinal: false,
      korean: '그를 도와 서류를 책상 위에 놓다.',
      chinese: {
        hanzi: ['帮', '他', '把', '文件', '放', '到', '桌子', '上'],
        pinyin: [
          'bāng',
          'tā',
          'bǎ',
          'wénjiàn',
          'fàng',
          'dào',
          'zhuōzi',
          'shàng',
        ],
      },
    },
    {
      id: 'sentence66',
      level: 4,
      isFinal: true,
      korean: '그를 도와 서류를 책상 위에 놓아 주세요.',
      chinese: {
        hanzi: ['请', '帮', '他', '把', '文件', '放', '到', '桌子', '上'],
        pinyin: [
          'qǐng',
          'bāng',
          'tā',
          'bǎ',
          'wénjiàn',
          'fàng',
          'dào',
          'zhuōzi',
          'shàng',
        ],
      },
    },
    // 77번
    {
      id: 'sentence67',
      level: 1,
      isFinal: false,
      korean: '빼앗아 갔다.',
      chinese: {
        hanzi: ['抢走了'],
        pinyin: ['qiǎng zǒu le'],
      },
    },
    {
      id: 'sentence67',
      level: 2,
      isFinal: false,
      korean: '아이에게 빼앗겼다.',
      chinese: {
        hanzi: ['被', '孩子', '抢', '走', '了'],
        pinyin: ['bèi', 'háizi', 'qiǎng', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence67',
      level: 3,
      isFinal: false,
      korean: '장난꾸러기 아이에게 빼앗겼다.',
      chinese: {
        hanzi: ['被', '调皮', '的', '孩子', '抢', '走', '了'],
        pinyin: ['bèi', 'tiáopí', 'de', 'háizi', 'qiǎng', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence67',
      level: 4,
      isFinal: true,
      korean: '과일이 장난꾸러기 아이에게 빼앗겼다.',
      chinese: {
        hanzi: ['水果', '被', '调皮', '的', '孩子', '抢', '走', '了'],
        pinyin: [
          'shuǐguǒ',
          'bèi',
          'tiáopí',
          'de',
          'háizi',
          'qiǎng',
          'zǒu',
          'le',
        ],
      },
    },
    // 78번
    {
      id: 'sentence68',
      level: 1,
      isFinal: false,
      korean: '영업을 시작하다.',
      chinese: {
        hanzi: ['开始', '营业'],
        pinyin: ['kāishǐ', 'yíngyè'],
      },
    },
    {
      id: 'sentence68',
      level: 2,
      isFinal: false,
      korean: '영업을 시작하지 않았다.',
      chinese: {
        hanzi: ['没有', '开始', '营业'],
        pinyin: ['méiyǒu', 'kāishǐ', 'yíngyè'],
      },
    },
    {
      id: 'sentence68',
      level: 3,
      isFinal: false,
      korean: '아직 영업을 시작하지 않았다.',
      chinese: {
        hanzi: ['还', '没有', '开始', '营业'],
        pinyin: ['hái', 'méiyǒu', 'kāishǐ', 'yíngyè'],
      },
    },
    {
      id: 'sentence68',
      level: 4,
      isFinal: false,
      korean: '빵집은 아직 영업을 시작하지 않았다.',
      chinese: {
        hanzi: ['面包店', '还', '没有', '开始', '营业'],
        pinyin: ['miànbāodiàn', 'hái', 'méiyǒu', 'kāishǐ', 'yíngyè'],
      },
    },
    {
      id: 'sentence68',
      level: 5,
      isFinal: true,
      korean: '학교 근처의 빵집은 아직 영업을 시작하지 않았다.',
      chinese: {
        hanzi: ['学校', '附近', '的', '面包店', '还', '没有', '开始', '营业'],
        pinyin: [
          'xuéxiào',
          'fùjìn',
          'de',
          'miànbāodiàn',
          'hái',
          'méiyǒu',
          'kāishǐ',
          'yíngyè',
        ],
      },
    },

    // 79번
    {
      id: 'sentence69',
      level: 1,
      isFinal: false,
      korean: '산책하는 시간',
      chinese: {
        hanzi: ['散步', '的', '时间'],
        pinyin: ['sànbù', 'de', 'shíjiān'],
      },
    },
    {
      id: 'sentence69',
      level: 2,
      isFinal: false,
      korean: '혼자 산책하는 시간',
      chinese: {
        hanzi: ['一', '个', '人', '散步', '的', '时间'],
        pinyin: ['yí', 'ge', 'rén', 'sànbù', 'de', 'shíjiān'],
      },
    },
    {
      id: 'sentence69',
      level: 3,
      isFinal: false,
      korean: '혼자 산책하는 시간을 즐기다.',
      chinese: {
        hanzi: ['享受', '一', '个', '人', '散步', '的', '时间'],
        pinyin: ['xiǎngshòu', 'yí', 'ge', 'rén', 'sànbù', 'de', 'shíjiān'],
      },
    },
    {
      id: 'sentence69',
      level: 4,
      isFinal: false,
      korean: '혼자 산책하는 시간을 매우 즐긴다.',
      chinese: {
        hanzi: ['很', '享受', '一', '个', '人', '散步', '的', '时间'],
        pinyin: [
          'hěn',
          'xiǎngshòu',
          'yí',
          'ge',
          'rén',
          'sànbù',
          'de',
          'shíjiān',
        ],
      },
    },
    {
      id: 'sentence69',
      level: 5,
      isFinal: true,
      korean: '할아버지는 혼자 산책하는 시간을 매우 즐기신다.',
      chinese: {
        hanzi: ['爷爷', '很', '享受', '一', '个', '人', '散步', '的', '时间'],
        pinyin: [
          'yéye',
          'hěn',
          'xiǎngshòu',
          'yí',
          'ge',
          'rén',
          'sànbù',
          'de',
          'shíjiān',
        ],
      },
    },
    // 80번
    {
      id: 'sentence70',
      level: 1,
      isFinal: false,
      korean: '강조했다.',
      chinese: {
        hanzi: ['强调了'],
        pinyin: ['qiángdiào le'],
      },
    },
    {
      id: 'sentence70',
      level: 2,
      isFinal: false,
      korean: '의미를 강조했다.',
      chinese: {
        hanzi: ['强调了', '意义'],
        pinyin: ['qiángdiào le', 'yìyì'],
      },
    },
    {
      id: 'sentence70',
      level: 3,
      isFinal: false,
      korean: '협력의 의미를 강조했다.',
      chinese: {
        hanzi: ['强调', '了', '合作', '的', '意义'],
        pinyin: ['qiángdiào', 'le', 'hézuò', 'de', 'yìyì'],
      },
    },
    {
      id: 'sentence70',
      level: 4,
      isFinal: false,
      korean: '거듭 협력의 의미를 강조했다.',
      chinese: {
        hanzi: ['再三', '强调', '了', '合作', '的', '意义'],
        pinyin: ['zàisān', 'qiángdiào', 'le', 'hézuò', 'de', 'yìyì'],
      },
    },
    {
      id: 'sentence70',
      level: 5,
      isFinal: true,
      korean: '총재는 협력의 의미를 거듭 강조했다.',
      chinese: {
        hanzi: ['总裁', '再三', '强调', '了', '合作', '的', '意义'],
        pinyin: ['zǒngcái', 'zàisān', 'qiángdiào', 'le', 'hézuò', 'de', 'yìyì'],
      },
    },
  ],
  day8: [
    // 71번
    {
      id: 'sentence71',
      level: 1,
      isFinal: false,
      korean: '프로그램을 방송하다.',
      chinese: {
        hanzi: ['播放', '节目'],
        pinyin: ['bōfàng', 'jiémù'],
      },
    },
    {
      id: 'sentence71',
      level: 2,
      isFinal: false,
      korean: '프로그램을 방송하는 중이다.',
      chinese: {
        hanzi: ['正在', '播放', '节目'],
        pinyin: ['zhèngzài', 'bōfàng', 'jiémù'],
      },
    },
    {
      id: 'sentence71',
      level: 3,
      isFinal: true,
      korean: '라디오 방송국에서 프로그램을 방송하는 중이다.',
      chinese: {
        hanzi: ['广播', '电台', '里', '正在', '播放', '节目'],
        pinyin: ['guǎngbō', 'diàntái', 'lǐ', 'zhèngzài', 'bōfàng', 'jiémù'],
      },
    },

    // 72번
    {
      id: 'sentence72',
      level: 1,
      isFinal: false,
      korean: '강가에 가다.',
      chinese: {
        hanzi: ['去', '河边'],
        pinyin: ['qù', 'hébiān'],
      },
    },
    {
      id: 'sentence72',
      level: 2,
      isFinal: false,
      korean: '낚시하러 강가에 가다.',
      chinese: {
        hanzi: ['去', '河边', '钓', '鱼'],
        pinyin: ['qù', 'hébiān', 'diào', 'yú'],
      },
    },
    {
      id: 'sentence72',
      level: 3,
      isFinal: false,
      korean: '낚시하러 강가에 가는 것이다.',
      chinese: {
        hanzi: ['是', '去', '河边', '钓', '鱼'],
        pinyin: ['shì', 'qù', 'hébiān', 'diào', 'yú'],
      },
    },
    {
      id: 'sentence72',
      level: 4,
      isFinal: false,
      korean: '아빠가 가장 좋아한다.',
      chinese: {
        hanzi: ['爸爸', '最', '喜欢'],
        pinyin: ['bàba', 'zuì', 'xǐhuan'],
      },
    },
    {
      id: 'sentence72',
      level: 5,
      isFinal: false,
      korean: '아빠가 가장 좋아하는 일',
      chinese: {
        hanzi: ['爸爸', '最', '喜欢', '的', '事'],
        pinyin: ['bàba', 'zuì', 'xǐhuan', 'de', 'shì'],
      },
    },
    {
      id: 'sentence72',
      level: 6,
      isFinal: true,
      korean: '아빠가 가장 좋아하는 일은 낚시하러 강가에 가는 것이다.',
      chinese: {
        hanzi: [
          '爸爸',
          '最',
          '喜欢',
          '的',
          '事',
          '是',
          '去',
          '河边',
          '钓',
          '鱼',
        ],
        pinyin: [
          'bàba',
          'zuì',
          'xǐhuan',
          'de',
          'shì',
          'shì',
          'qù',
          'hébiān',
          'diào',
          'yú',
        ],
      },
    },

    // 73번
    {
      id: 'sentence73',
      level: 1,
      isFinal: false,
      korean: '접촉이 필요하다.',
      chinese: {
        hanzi: ['需要', '接触'],
        pinyin: ['xūyào', 'jiēchù'],
      },
    },
    {
      id: 'sentence73',
      level: 2,
      isFinal: false,
      korean: '더 깊은 접촉이 필요하다.',
      chinese: {
        hanzi: ['需要', '进一步的', '接触'],
        pinyin: ['xūyào', 'jìnyíbù de', 'jiēchù'],
      },
    },
    {
      id: 'sentence73',
      level: 3,
      isFinal: false,
      korean: '아직 더 깊은 접촉이 필요하다.',
      chinese: {
        hanzi: ['还', '需要', '进一步', '的', '接触'],
        pinyin: ['hái', 'xūyào', 'jìnyíbù', 'de', 'jiēchù'],
      },
    },
    {
      id: 'sentence73',
      level: 4,
      isFinal: true,
      korean: '쌍방은 아직 더 깊은 접촉이 필요하다.',
      chinese: {
        hanzi: ['双方', '还', '需要', '进一步', '的', '接触'],
        pinyin: ['shuāngfāng', 'hái', 'xūyào', 'jìnyíbù', 'de', 'jiēchù'],
      },
    },
    // 74번
    {
      id: 'sentence74',
      level: 1,
      isFinal: false,
      korean: '일치하지 않다.',
      chinese: {
        hanzi: ['不一致'],
        pinyin: ['bù yízhì'],
      },
    },
    {
      id: 'sentence74',
      level: 2,
      isFinal: false,
      korean: '전혀 일치하지 않다.',
      chinese: {
        hanzi: ['并', '不', '一致'],
        pinyin: ['bìng', 'bù', 'yízhì'],
      },
    },
    {
      id: 'sentence74',
      level: 3,
      isFinal: false,
      korean: '관점이 전혀 일치하지 않다.',
      chinese: {
        hanzi: ['观点', '并', '不', '一致'],
        pinyin: ['guāndiǎn', 'bìng', 'bù', 'yízhì'],
      },
    },
    {
      id: 'sentence74',
      level: 4,
      isFinal: true,
      korean: '쌍방의 관점이 전혀 일치하지 않는다.',
      chinese: {
        hanzi: ['双方', '的', '观点', '并', '不', '一致'],
        pinyin: ['shuāngfāng', 'de', 'guāndiǎn', 'bìng', 'bù', 'yízhì'],
      },
    },
    // 75번
    {
      id: 'sentence75',
      level: 1,
      isFinal: false,
      korean: '기대로 가득 차다.',
      chinese: {
        hanzi: ['充满', '期待'],
        pinyin: ['chōngmǎn', 'qīdài'],
      },
    },
    {
      id: 'sentence75',
      level: 2,
      isFinal: false,
      korean: '기대로 가득 차 있다.',
      chinese: {
        hanzi: ['充满', '着', '期待'],
        pinyin: ['chōngmǎn', 'zhe', 'qīdài'],
      },
    },
    {
      id: 'sentence75',
      level: 3,
      isFinal: false,
      korean: '여름 캠프에 대해 기대로 가득 차 있다.',
      chinese: {
        hanzi: ['对', '夏令营', '充满', '着', '期待'],
        pinyin: ['duì', 'xiàlìngyíng', 'chōngmǎn', 'zhe', 'qīdài'],
      },
    },
    {
      id: 'sentence75',
      level: 4,
      isFinal: true,
      korean:
        '딸은 여름 캠프에 대해 기대로 가득 차 있다. (= 여름 캠프를 매우 기대하고 있다.)',
      chinese: {
        hanzi: ['女儿', '对', '夏令营', '充满', '着', '期待'],
        pinyin: ['nǚ’ér', 'duì', 'xiàlìngyíng', 'chōngmǎn', 'zhe', 'qīdài'],
      },
    },

    // 76번
    {
      id: 'sentence76',
      level: 1,
      isFinal: false,
      korean: '선생님께 제출하다.',
      chinese: {
        hanzi: ['交给', '老师'],
        pinyin: ['jiāo gěi', 'lǎoshī'],
      },
    },
    {
      id: 'sentence76',
      level: 2,
      isFinal: false,
      korean: '연구 보고서를 선생님께 제출하다.',
      chinese: {
        hanzi: ['把', '研究', '报告', '交', '给', '老师'],
        pinyin: ['bǎ', 'yánjiū', 'bàogào', 'jiāo', 'gěi', 'lǎoshī'],
      },
    },
    {
      id: 'sentence76',
      level: 3,
      isFinal: true,
      korean: '연구 보고서를 선생님께 제출해 주세요.',
      chinese: {
        hanzi: ['请', '把', '研究', '报告', '交', '给', '老师'],
        pinyin: ['qǐng', 'bǎ', 'yánjiū', 'bàogào', 'jiāo', 'gěi', 'lǎoshī'],
      },
    },
    // 77번
    {
      id: 'sentence77',
      level: 1,
      isFinal: false,
      korean: '우수 직원으로 평가하다.',
      chinese: {
        hanzi: ['评为', '优秀', '员工'],
        pinyin: ['píngwéi', 'yōuxiù', 'yuángōng'],
      },
    },
    {
      id: 'sentence77',
      level: 2,
      isFinal: false,
      korean: '우수 직원으로 평가받다.',
      chinese: {
        hanzi: ['被', '评为', '优秀', '员工'],
        pinyin: ['bèi', 'píngwéi', 'yōuxiù', 'yuángōng'],
      },
    },
    {
      id: 'sentence77',
      level: 3,
      isFinal: false,
      korean: '2년 연속 우수 직원으로 평가받다.',
      chinese: {
        hanzi: ['连续', '两', '年', '被', '评为', '优秀', '员工'],
        pinyin: [
          'liánxù',
          'liǎng',
          'nián',
          'bèi',
          'píngwéi',
          'yōuxiù',
          'yuángōng',
        ],
      },
    },
    {
      id: 'sentence77',
      level: 4,
      isFinal: true,
      korean: '여동생은 2년 연속 우수 직원으로 평가받았다.',
      chinese: {
        hanzi: ['妹妹', '连续', '两', '年', '被', '评为', '优秀', '员工'],
        pinyin: [
          'mèimei',
          'liánxù',
          'liǎng',
          'nián',
          'bèi',
          'píngwéi',
          'yōuxiù',
          'yuángōng',
        ],
      },
    },
    // 78번
    {
      id: 'sentence78',
      level: 1,
      isFinal: false,
      korean: '증명서를 찾다.',
      chinese: {
        hanzi: ['取证件'],
        pinyin: ['qǔ zhèngjiàn'],
      },
    },
    {
      id: 'sentence78',
      level: 2,
      isFinal: false,
      korean: '이 영수증으로 증명서를 찾다.',
      chinese: {
        hanzi: ['凭', '这', '张', '单据', '来', '取', '证件'],
        pinyin: ['píng', 'zhè', 'zhāng', 'dānjù', 'lái', 'qǔ', 'zhèngjiàn'],
      },
    },
    {
      id: 'sentence78',
      level: 3,
      isFinal: false,
      korean: '당신은 이 영수증으로 증명서를 찾으세요.',
      chinese: {
        hanzi: ['您', '凭', '这', '张', '单据', '来', '取', '证件'],
        pinyin: [
          'nín',
          'píng',
          'zhè',
          'zhāng',
          'dānjù',
          'lái',
          'qǔ',
          'zhèngjiàn',
        ],
      },
    },
    {
      id: 'sentence78',
      level: 4,
      isFinal: true,
      korean: '당신은 이 영수증으로 증명서를 찾아가 주세요.',
      chinese: {
        hanzi: ['请', '您', '凭', '这', '张', '单据', '来', '取', '证件'],
        pinyin: [
          'qǐng',
          'nín',
          'píng',
          'zhè',
          'zhāng',
          'dānjù',
          'lái',
          'qǔ',
          'zhèngjiàn',
        ],
      },
    },
    // 79번
    {
      id: 'sentence79',
      level: 1,
      isFinal: false,
      korean: '비자 수속',
      chinese: {
        hanzi: ['签证手续'],
        pinyin: ['qiānzhèng shǒuxù'],
      },
    },
    {
      id: 'sentence79',
      level: 2,
      isFinal: false,
      korean: '비자 수속을 밟다.',
      chinese: {
        hanzi: ['办理', '签证', '手续'],
        pinyin: ['bànlǐ', 'qiānzhèng', 'shǒuxù'],
      },
    },
    {
      id: 'sentence79',
      level: 3,
      isFinal: false,
      korean: '비자 수속을 더 빨리 밟다.',
      chinese: {
        hanzi: ['更', '快', '地', '办理', '签证', '手续'],
        pinyin: ['gèng', 'kuài', 'de', 'bànlǐ', 'qiānzhèng', 'shǒuxù'],
      },
    },
    {
      id: 'sentence79',
      level: 4,
      isFinal: true,
      korean: '어떻게 하면 더 빨리 비자 수속을 밟을 수 있을까?',
      chinese: {
        hanzi: ['如何', '更', '快', '地', '办理', '签证', '手续'],
        pinyin: ['rúhé', 'gèng', 'kuài', 'de', 'bànlǐ', 'qiānzhèng', 'shǒuxù'],
      },
    },
    // 80번
    {
      id: 'sentence80',
      level: 1,
      isFinal: false,
      korean: '매력을 느끼다.',
      chinese: {
        hanzi: ['感受', '到', '魅力'],
        pinyin: ['gǎnshòu', 'dào', 'mèilì'],
      },
    },
    {
      id: 'sentence80',
      level: 2,
      isFinal: false,
      korean: '다른 문화의 매력을 느끼다.',
      chinese: {
        hanzi: ['感受', '到', '不同', '文化', '的', '魅力'],
        pinyin: ['gǎnshòu', 'dào', 'bùtóng', 'wénhuà', 'de', 'mèilì'],
      },
    },
    {
      id: 'sentence80',
      level: 3,
      isFinal: false,
      korean: '나에게 다른 문화의 매력을 느끼게 한다.',
      chinese: {
        hanzi: ['让', '我', '感受', '到', '不同', '文化', '的', '魅力'],
        pinyin: [
          'ràng',
          'wǒ',
          'gǎnshòu',
          'dào',
          'bùtóng',
          'wénhuà',
          'de',
          'mèilì',
        ],
      },
    },
    {
      id: 'sentence80',
      level: 4,
      isFinal: true,
      korean: '여행은 나에게 다른 문화의 매력을 느끼게 한다.',
      chinese: {
        hanzi: ['旅行', '让', '我', '感受', '到', '不同', '文化', '的', '魅力'],
        pinyin: [
          'Lǚxíng',
          'ràng',
          'wǒ',
          'gǎnshòu',
          'dào',
          'bùtóng',
          'wénhuà',
          'de',
          'mèilì',
        ],
      },
    },
  ],
  day9: [
    // 81번
    {
      id: 'sentence81',
      level: 1,
      isFinal: false,
      korean: '튀긴 땅콩을 먹다.',
      chinese: {
        hanzi: ['吃', '炸', '花生'],
        pinyin: ['chī', 'zhá', 'huāshēng'],
      },
    },
    {
      id: 'sentence81',
      level: 2,
      isFinal: false,
      korean: '튀긴 땅콩을 먹는 걸 좋아한다.',
      chinese: {
        hanzi: ['爱', '吃', '炸', '花生'],
        pinyin: ['ài', 'chī', 'zhá', 'huāshēng'],
      },
    },
    {
      id: 'sentence81',
      level: 3,
      isFinal: false,
      korean: '튀긴 땅콩을 먹는 걸 가장 좋아한다.',
      chinese: {
        hanzi: ['最', '爱', '吃', '炸', '花生'],
        pinyin: ['zuì', 'ài', 'chī', 'zhá', 'huāshēng'],
      },
    },
    {
      id: 'sentence81',
      level: 4,
      isFinal: true,
      korean: '우리 손자는 튀긴 땅콩을 먹는 걸 가장 좋아한다.',
      chinese: {
        hanzi: ['我', '孙儿', '最', '爱', '吃', '炸', '花生'],
        pinyin: ['wǒ', 'sūn’ér', 'zuì', 'ài', 'chī', 'zhá', 'huāshēng'],
      },
    },
    // 82번
    {
      id: 'sentence82',
      level: 1,
      isFinal: false,
      korean: '풍습이 있다.',
      chinese: {
        hanzi: ['有', '风俗', '习惯'],
        pinyin: ['yǒu', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence82',
      level: 2,
      isFinal: false,
      korean: '독특한 풍습이 있다.',
      chinese: {
        hanzi: ['有', '独特', '的', '风俗', '习惯'],
        pinyin: ['yǒu', 'dútè', 'de', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence82',
      level: 3,
      isFinal: false,
      korean: '모두 독특한 풍습이 있다.',
      chinese: {
        hanzi: ['都', '有', '独特', '的', '风俗', '习惯'],
        pinyin: ['dōu', 'yǒu', 'dútè', 'de', 'fēngsú', 'xíguàn'],
      },
    },
    {
      id: 'sentence82',
      level: 4,
      isFinal: true,
      korean: '모든 지역에는 (모두) 독특한 풍습이 있다.',
      chinese: {
        hanzi: ['每', '个', '地方', '都', '有', '独特', '的', '风俗', '习惯'],
        pinyin: [
          'měi',
          'ge',
          'dìfang',
          'dōu',
          'yǒu',
          'dútè',
          'de',
          'fēngsú',
          'xíguàn',
        ],
      },
    },
    // 83번
    {
      id: 'sentence83',
      level: 1,
      isFinal: false,
      korean: '가격이 상승한다.',
      chinese: {
        hanzi: ['价格', '上涨'],
        pinyin: ['jiàgé', 'shàngzhǎng'],
      },
    },
    {
      id: 'sentence83',
      level: 2,
      isFinal: false,
      korean: '가격이 오르고 있다.',
      chinese: {
        hanzi: ['价格', '在', '上涨'],
        pinyin: ['jiàgé', 'zài', 'shàngzhǎng'],
      },
    },
    {
      id: 'sentence83',
      level: 3,
      isFinal: false,
      korean: '가격이 계속 오르고 있다.',
      chinese: {
        hanzi: ['价格', '一直', '在', '上涨'],
        pinyin: ['jiàgé', 'yìzhí', 'zài', 'shàngzhǎng'],
      },
    },
    {
      id: 'sentence83',
      level: 4,
      isFinal: true,
      korean: '금 가격이 계속 오르고 있다.',
      chinese: {
        hanzi: ['黄金的', '价格', '一直', '在', '上涨'],
        pinyin: ['huángjīn de', 'jiàgé', 'yìzhí', 'zài', 'shàngzhǎng'],
      },
    },
    // 84번
    {
      id: 'sentence84',
      level: 1,
      isFinal: false,
      korean: '집안일을 하다.',
      chinese: {
        hanzi: ['干家务'],
        pinyin: ['gàn jiāwù'],
      },
    },
    {
      id: 'sentence84',
      level: 2,
      isFinal: false,
      korean: '앞다투어 집안일을 하다.',
      chinese: {
        hanzi: ['抢着', '干', '家务'],
        pinyin: ['qiǎngzhe', 'gàn', 'jiāwù'],
      },
    },
    {
      id: 'sentence84',
      level: 3,
      isFinal: false,
      korean: '항상 앞다투어 집안일을 하다.',
      chinese: {
        hanzi: ['总是', '抢着', '干', '家务'],
        pinyin: ['zǒngshì', 'qiǎngzhe', 'gàn', 'jiāwù'],
      },
    },
    {
      id: 'sentence84',
      level: 4,
      isFinal: true,
      korean: '그들은 항상 앞다투어 집안일을 한다.',
      chinese: {
        hanzi: ['他们', '总是', '抢着', '干', '家务'],
        pinyin: ['tāmen', 'zǒngshì', 'qiǎngzhe', 'gàn', 'jiāwù'],
      },
    },
    // 85번
    {
      id: 'sentence85',
      level: 1,
      isFinal: false,
      korean: '높아졌다.',
      chinese: {
        hanzi: ['高了'],
        pinyin: ['gāo le'],
      },
    },
    {
      id: 'sentence85',
      level: 2,
      isFinal: false,
      korean: '점점 높아졌다.',
      chinese: {
        hanzi: ['越来越', '高', '了'],
        pinyin: ['yuèláiyuè', 'gāo', 'le'],
      },
    },
    {
      id: 'sentence85',
      level: 3,
      isFinal: false,
      korean: '이자가 점점 높아졌다.',
      chinese: {
        hanzi: ['利息', '越来越', '高', '了'],
        pinyin: ['lìxī', 'yuèláiyuè', 'gāo', 'le'],
      },
    },
    {
      id: 'sentence85',
      level: 4,
      isFinal: true,
      korean: '주택담보대출의 이자가 점점 높아졌다.',
      chinese: {
        hanzi: ['房贷', '的', '利息', '越来越', '高', '了'],
        pinyin: ['fángdài', 'de', 'lìxī', 'yuèláiyuè', 'gāo', 'le'],
      },
    },
    // 86번
    {
      id: 'sentence86',
      level: 1,
      isFinal: false,
      korean: '스트레스를 견디다.',
      chinese: {
        hanzi: ['承受', '压力'],
        pinyin: ['chéngshòu', 'yālì'],
      },
    },
    {
      id: 'sentence86',
      level: 2,
      isFinal: false,
      korean: '엄청난 스트레스를 견디다.',
      chinese: {
        hanzi: ['承受', '巨大', '的', '压力'],
        pinyin: ['chéngshòu', 'jùdà', 'de', 'yālì'],
      },
    },
    {
      id: 'sentence86',
      level: 3,
      isFinal: false,
      korean: '엄청난 스트레스를 견디고 있다.',
      chinese: {
        hanzi: ['承受', '着', '巨大', '的', '压力'],
        pinyin: ['chéngshòu', 'zhe', 'jùdà', 'de', 'yālì'],
      },
    },
    {
      id: 'sentence86',
      level: 4,
      isFinal: false,
      korean: '어쩔 수 없이 엄청난 스트레스를 견디고 있다.',
      chinese: {
        hanzi: ['不得不', '承受', '着', '巨大', '的', '压力'],
        pinyin: ['bùdébù', 'chéngshòu', 'zhe', 'jùdà', 'de', 'yālì'],
      },
    },
    {
      id: 'sentence86',
      level: 5,
      isFinal: true,
      korean: '그는 어쩔 수 없이 엄청난 스트레스를 견디고 있다.',
      chinese: {
        hanzi: ['他', '不得不', '承受', '着', '巨大', '的', '压力'],
        pinyin: ['tā', 'bùdébù', 'chéngshòu', 'zhe', 'jùdà', 'de', 'yālì'],
      },
    },

    // 87번
    {
      id: 'sentence87',
      level: 1,
      isFinal: false,
      korean: '집합해 주세요.',
      chinese: {
        hanzi: ['请', '集合'],
        pinyin: ['qǐng', 'jíhé'],
      },
    },
    {
      id: 'sentence87',
      level: 2,
      isFinal: false,
      korean: '회의장으로 집합해 주세요.',
      chinese: {
        hanzi: ['请', '到', '会场', '集合'],
        pinyin: ['qǐng', 'dào', 'huìchǎng', 'jíhé'],
      },
    },
    {
      id: 'sentence87',
      level: 3,
      isFinal: true,
      korean: '교육받는 직원들은 회의장으로 집합해 주세요.',
      chinese: {
        hanzi: ['请', '培训', '的', '员工', '到', '会场', '集合'],
        pinyin: ['qǐng', 'péixùn', 'de', 'yuángōng', 'dào', 'huìchǎng', 'jíhé'],
      },
    },
    // 88번
    {
      id: 'sentence88',
      level: 1,
      isFinal: false,
      korean: '에너지를 쏟다.',
      chinese: {
        hanzi: ['投入', '精力'],
        pinyin: ['tóurù', 'jīnglì'],
      },
    },
    {
      id: 'sentence88',
      level: 2,
      isFinal: false,
      korean: '에너지를 쏟았다.',
      chinese: {
        hanzi: ['投入了', '精力'],
        pinyin: ['tóurù le', 'jīnglì'],
      },
    },
    {
      id: 'sentence88',
      level: 3,
      isFinal: false,
      korean: '많은 에너지를 쏟았다.',
      chinese: {
        hanzi: ['投入了', '大量', '精力'],
        pinyin: ['tóurù le', 'dàliàng', 'jīnglì'],
      },
    },
    {
      id: 'sentence88',
      level: 4,
      isFinal: false,
      korean: '이 실험에 많은 에너지를 쏟았다.',
      chinese: {
        hanzi: ['对', '这', '项', '实验', '投入了', '大量', '精力'],
        pinyin: [
          'duì',
          'zhè',
          'xiàng',
          'shíyàn',
          'tóurù le',
          'dàliàng',
          'jīnglì',
        ],
      },
    },
    {
      id: 'sentence88',
      level: 5,
      isFinal: true,
      korean: '그는 이 실험에 많은 에너지를 쏟았다.',
      chinese: {
        hanzi: ['他', '对', '这', '项', '实验', '投入', '了', '大量', '精力'],
        pinyin: [
          'tā',
          'duì',
          'zhè',
          'xiàng',
          'shíyàn',
          'tóurù',
          'le',
          'dàliàng',
          'jīnglì',
        ],
      },
    },
    // 89번

    {
      id: 'sentence89',
      level: 1,
      isFinal: false,
      korean: '지워 버려.',
      chinese: {
        hanzi: ['删掉吧'],
        pinyin: ['shāndiào ba'],
      },
    },
    {
      id: 'sentence89',
      level: 2,
      isFinal: false,
      korean: '이 문장을 지워 버려.',
      chinese: {
        hanzi: ['把', '这', '个', '句子', '删掉', '吧'],
        pinyin: ['bǎ', 'zhè', 'ge', 'jùzi', 'shāndiào', 'ba'],
      },
    },
    {
      id: 'sentence89',
      level: 3,
      isFinal: false,
      korean: '차라리 이 문장을 지워 버려.',
      chinese: {
        hanzi: ['干脆', '把', '这', '个', '句子', '删掉', '吧'],
        pinyin: ['gāncuì', 'bǎ', 'zhè', 'ge', 'jùzi', 'shāndiào', 'ba'],
      },
    },
    {
      id: 'sentence89',
      level: 4,
      isFinal: true,
      korean: '너는 차라리 이 문장을 지워 버려.',
      chinese: {
        hanzi: ['你', '干脆', '把', '这', '个', '句子', '删掉', '吧'],
        pinyin: ['nǐ', 'gāncuì', 'bǎ', 'zhè', 'ge', 'jùzi', 'shāndiào', 'ba'],
      },
    },
    // 90번
    {
      id: 'sentence90',
      level: 1,
      isFinal: false,
      korean: '개선되다.',
      chinese: {
        hanzi: ['得到', '改善'],
        pinyin: ['dédào', 'gǎishàn'],
      },
    },
    {
      id: 'sentence90',
      level: 2,
      isFinal: false,
      korean: '개선되지 않았다.',
      chinese: {
        hanzi: ['没有', '得到', '改善'],
        pinyin: ['méiyǒu', 'dédào', 'gǎishàn'],
      },
    },
    {
      id: 'sentence90',
      level: 3,
      isFinal: false,
      korean: '계속 개선되지 않았다.',
      chinese: {
        hanzi: ['一直', '没有', '得到', '改善'],
        pinyin: ['yìzhí', 'méiyǒu', 'dédào', 'gǎishàn'],
      },
    },
    {
      id: 'sentence90',
      level: 4,
      isFinal: false,
      korean: '경제 상황이 계속 개선되지 않았다.',
      chinese: {
        hanzi: ['经济情况', '一直', '没有', '得到', '改善'],
        pinyin: ['jīngjì qíngkuàng', 'yìzhí', 'méiyǒu', 'dédào', 'gǎishàn'],
      },
    },
    {
      id: 'sentence90',
      level: 5,
      isFinal: true,
      korean: '형의 경제 상황은 계속 개선되지 않았다.',
      chinese: {
        hanzi: ['哥哥', '的', '经济情况', '一直', '没有', '得到', '改善'],
        pinyin: [
          'gēge',
          'de',
          'jīngjì qíngkuàng',
          'yìzhí',
          'méiyǒu',
          'dédào',
          'gǎishàn',
        ],
      },
    },
  ],
  day10: [
    // 91번
    {
      id: 'sentence91',
      level: 1,
      isFinal: false,
      korean: '장 안에 두다.',
      chinese: {
        hanzi: ['放在', '柜子', '里'],
        pinyin: ['fàng zài', 'guìzi', 'lǐ'],
      },
    },
    {
      id: 'sentence91',
      level: 2,
      isFinal: false,
      korean: '장 안에 두었다.',
      chinese: {
        hanzi: ['放', '在', '柜子里了'],
        pinyin: ['fàng', 'zài', 'guìzi lǐ le'],
      },
    },
    {
      id: 'sentence91',
      level: 3,
      isFinal: false,
      korean: '부채를 장 안에 두었다.',
      chinese: {
        hanzi: ['把', '扇子', '放', '在', '柜子里了'],
        pinyin: ['bǎ', 'shànzi', 'fàng', 'zài', 'guìzi lǐ le'],
      },
    },
    {
      id: 'sentence91',
      level: 4,
      isFinal: true,
      korean: '그는 부채를 장 안에 두었다.',
      chinese: {
        hanzi: ['他', '把', '扇子', '放', '在', '柜子', '里', '了'],
        pinyin: ['tā', 'bǎ', 'shànzi', 'fàng', 'zài', 'guìzi', 'lǐ', 'le'],
      },
    },

    //92번
    {
      id: 'sentence92',
      level: 1,
      isFinal: false,
      korean: '규정을 지키다.',
      chinese: {
        hanzi: ['遵守', '规定'],
        pinyin: ['zūnshǒu', 'guīdìng'],
      },
    },
    {
      id: 'sentence92',
      level: 2,
      isFinal: false,
      korean: '자발적으로 규정을 지키다.',
      chinese: {
        hanzi: ['自觉', '遵守', '规定'],
        pinyin: ['zìjué', 'zūnshǒu', 'guīdìng'],
      },
    },
    {
      id: 'sentence92',
      level: 3,
      isFinal: false,
      korean: '관람할 때 자발적으로 규정을 지키다.',
      chinese: {
        hanzi: ['在', '观看', '时', '自觉', '遵守', '规定'],
        pinyin: ['zài', 'guānkàn', 'shí', 'zìjué', 'zūnshǒu', 'guīdìng'],
      },
    },
    {
      id: 'sentence92',
      level: 4,
      isFinal: false,
      korean: '모두 관람할 때 자발적으로 규정을 지킨다.',
      chinese: {
        hanzi: ['大家', '在', '观看', '时', '自觉', '遵守', '规定'],
        pinyin: [
          'dàjiā',
          'zài',
          'guānkàn',
          'shí',
          'zìjué',
          'zūnshǒu',
          'guīdìng',
        ],
      },
    },
    {
      id: 'sentence92',
      level: 5,
      isFinal: true,
      korean: '모두 관람 시 자발적으로 규정을 지켜 주세요.',
      chinese: {
        hanzi: ['请', '大家', '在', '观看', '时', '自觉', '遵守', '规定'],
        pinyin: [
          'qǐng',
          'dàjiā',
          'zài',
          'guānkàn',
          'shí',
          'zìjué',
          'zūnshǒu',
          'guīdìng',
        ],
      },
    },
    //93번
    {
      id: 'sentence93',
      level: 1,
      isFinal: false,
      korean: '상황을 설명하다.',
      chinese: {
        hanzi: ['说明', '情况'],
        pinyin: ['shuōmíng', 'qíngkuàng'],
      },
    },
    {
      id: 'sentence93',
      level: 2,
      isFinal: false,
      korean: '학부모들에게 상황을 설명하다.',
      chinese: {
        hanzi: ['向', '家长们', '说明', '情况'],
        pinyin: ['xiàng', 'jiāzhǎngmen', 'shuōmíng', 'qíngkuàng'],
      },
    },
    {
      id: 'sentence93',
      level: 3,
      isFinal: false,
      korean: '학교를 대표해 학부모들에게 상황을 설명하다.',
      chinese: {
        hanzi: ['代表', '学校', '向', '家长们', '说明', '情况'],
        pinyin: [
          'dàibiǎo',
          'xuéxiào',
          'xiàng',
          'jiāzhǎngmen',
          'shuōmíng',
          'qíngkuàng',
        ],
      },
    },
    {
      id: 'sentence93',
      level: 4,
      isFinal: true,
      korean: '선생님이 학교를 대표해 학부모들에게 상황을 설명하다.',
      chinese: {
        hanzi: ['老师', '代表', '学校', '向', '家长们', '说明', '情况'],
        pinyin: [
          'lǎoshī',
          'dàibiǎo',
          'xuéxiào',
          'xiàng',
          'jiāzhǎngmen',
          'shuōmíng',
          'qíngkuàng',
        ],
      },
    },

    // 94번
    {
      id: 'sentence94',
      level: 1,
      isFinal: false,
      korean: '인터뷰를 받다.',
      chinese: {
        hanzi: ['接受', '采访'],
        pinyin: ['jiēshòu', 'cǎifǎng'],
      },
    },
    {
      id: 'sentence94',
      level: 2,
      isFinal: false,
      korean: '인터뷰를 받았다.',
      chinese: {
        hanzi: ['接受了', '采访'],
        pinyin: ['jiēshòu le', 'cǎifǎng'],
      },
    },
    {
      id: 'sentence94',
      level: 3,
      isFinal: false,
      korean: '기자의 인터뷰를 받았다.',
      chinese: {
        hanzi: ['接受了', '记者', '的', '采访'],
        pinyin: ['jiēshòu le', 'jìzhě', 'de', 'cǎifǎng'],
      },
    },
    {
      id: 'sentence94',
      level: 4,
      isFinal: true,
      korean: '배우가 기자의 인터뷰를 받았다.',
      chinese: {
        hanzi: ['演员', '接受', '了', '记者', '的', '采访'],
        pinyin: ['yǎnyuán', 'jiēshòu', 'le', 'jìzhě', 'de', 'cǎifǎng'],
      },
    },

    //95번
    {
      id: 'sentence95',
      level: 1,
      isFinal: false,
      korean: '촬영 스타일',
      chinese: {
        hanzi: ['拍摄风格'],
        pinyin: ['pāishè fēnggé'],
      },
    },
    {
      id: 'sentence95',
      level: 2,
      isFinal: false,
      korean: '자신의 촬영 스타일',
      chinese: {
        hanzi: ['自己', '的', '拍摄', '风格'],
        pinyin: ['zìjǐ', 'de', 'pāishè', 'fēnggé'],
      },
    },
    {
      id: 'sentence95',
      level: 3,
      isFinal: false,
      korean: '자신의 촬영 스타일을 확정했다.',
      chinese: {
        hanzi: ['确定了', '自己', '的', '拍摄', '风格'],
        pinyin: ['quèdìng le', 'zìjǐ', 'de', 'pāishè', 'fēnggé'],
      },
    },
    {
      id: 'sentence95',
      level: 4,
      isFinal: false,
      korean: '이미 자신의 촬영 스타일을 확정했다.',
      chinese: {
        hanzi: ['已经', '确定了', '自己', '的', '拍摄', '风格'],
        pinyin: ['yǐjing', 'quèdìng le', 'zìjǐ', 'de', 'pāishè', 'fēnggé'],
      },
    },
    {
      id: 'sentence95',
      level: 4,
      isFinal: true,
      korean: '그는 이미 자신의 촬영 스타일을 확정했다.',
      chinese: {
        hanzi: ['他', '已经', '确定', '了', '自己', '的', '拍摄', '风格'],
        pinyin: [
          'tā',
          'yǐjing',
          'quèdìng',
          'le',
          'zìjǐ',
          'de',
          'pāishè',
          'fēnggé',
        ],
      },
    },
    //96번
    {
      id: 'sentence96',
      level: 1,
      isFinal: false,
      korean: '반성할 생각',
      chinese: {
        hanzi: ['反省的意思'],
        pinyin: ['Fǎnxǐng de yìsi'],
      },
    },
    {
      id: 'sentence96',
      level: 2,
      isFinal: false,
      korean: '반성할 생각이 없다.',
      chinese: {
        hanzi: ['没有', '反省', '的', '意思'],
        pinyin: ['méiyǒu', 'fǎnxǐng', 'de', 'yìsi'],
      },
    },
    {
      id: 'sentence96',
      level: 3,
      isFinal: false,
      korean: '반성하려는 생각이 없다.',
      chinese: {
        hanzi: ['没有', '要反省', '的', '意思'],
        pinyin: ['méiyǒu', 'yào fǎnxǐng', 'de', 'yìsi'],
      },
    },
    {
      id: 'sentence96',
      level: 4,
      isFinal: false,
      korean: '조금도 반성하려는 생각이 없다.',
      chinese: {
        hanzi: ['丝毫', '没有', '要', '反省', '的', '意思'],
        pinyin: ['sīháo', 'méiyǒu', 'yào', 'fǎnxǐng', 'de', 'yìsi'],
      },
    },
    {
      id: 'sentence96',
      level: 5,
      isFinal: true,
      korean: '그는 조금도 반성하려는 생각이 없다.',
      chinese: {
        hanzi: ['他', '丝毫', '没有', '要', '反省', '的', '意思'],
        pinyin: ['tā', 'sīháo', 'méiyǒu', 'yào', 'fǎnxǐng', 'de', 'yìsi'],
      },
    },

    // 97번
    {
      id: 'sentence97',
      level: 1,
      isFinal: false,
      korean: '사람을 걱정하게 만들다(신경 쓰게 하다).',
      chinese: {
        hanzi: ['令', '人', '操心'],
        pinyin: ['lìng', 'rén', 'cāoxīn'],
      },
    },
    {
      id: 'sentence97',
      level: 2,
      isFinal: false,
      korean: '그렇게 사람을 걱정하게 만들다.',
      chinese: {
        hanzi: ['那么', '令', '人', '操心'],
        pinyin: ['nàme', 'lìng', 'rén', 'cāoxīn'],
      },
    },
    {
      id: 'sentence97',
      level: 3,
      isFinal: false,
      korean: '아이를 키우는 것은 그렇게 사람을 걱정하게 만들다.',
      chinese: {
        hanzi: ['养', '小孩儿', '那么', '令', '人', '操心'],
        pinyin: ['yǎng', 'xiǎoháir', 'nàme', 'lìng', 'rén', 'cāoxīn'],
      },
    },
    {
      id: 'sentence97',
      level: 4,
      isFinal: false,
      korean: '아이를 키우는 게 그렇게 사람을 걱정하게 만들 줄 몰랐다.',
      chinese: {
        hanzi: ['没', '想到', '养', '小孩儿', '那么', '令', '人', '操心'],
        pinyin: [
          'méi',
          'xiǎngdào',
          'yǎng',
          'xiǎoháir',
          'nàme',
          'lìng',
          'rén',
          'cāoxīn',
        ],
      },
    },
    {
      id: 'sentence97',
      level: 5,
      isFinal: true,
      korean: '나는 아이를 키우는 게 그렇게 사람을 걱정하게 만들 줄 몰랐다.',
      chinese: {
        hanzi: ['我', '没', '想到', '养', '小孩儿', '那么', '令', '人', '操心'],
        pinyin: [
          'wǒ',
          'méi',
          'xiǎngdào',
          'yǎng',
          'xiǎoháir',
          'nàme',
          'lìng',
          'rén',
          'cāoxīn',
        ],
      },
    },

    //98번
    {
      id: 'sentence98',
      level: 1,
      isFinal: false,
      korean: '하나의 기적이다.',
      chinese: {
        hanzi: ['是', '个', '奇迹'],
        pinyin: ['shì', 'ge', 'qíjì'],
      },
    },
    {
      id: 'sentence98',
      level: 2,
      isFinal: false,
      korean: '정말로 하나의 기적이다.',
      chinese: {
        hanzi: ['简直', '是', '个', '奇迹'],
        pinyin: ['jiǎnzhí', 'shì', 'ge', 'qíjì'],
      },
    },
    {
      id: 'sentence98',
      level: 3,
      isFinal: true,
      korean: '그 작품은 정말 하나의 기적과 같다.',
      chinese: {
        hanzi: ['那', '件', '创作', '简直', '是', '个', '奇迹'],
        pinyin: ['nà', 'jiàn', 'chuàngzuò', 'jiǎnzhí', 'shì', 'ge', 'qíjì'],
      },
    },
    //99번
    {
      id: 'sentence99',
      level: 1,
      isFinal: false,
      korean: '문화센터가 있다.',
      chinese: {
        hanzi: ['有', '文化', '中心'],
        pinyin: ['yǒu', 'wénhuà', 'zhōngxīn'],
      },
    },
    {
      id: 'sentence99',
      level: 2,
      isFinal: false,
      korean: '문화센터 한 곳이 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '文化', '中心'],
        pinyin: ['yǒu', 'yì', 'jiā', 'wénhuà', 'zhōngxīn'],
      },
    },
    {
      id: 'sentence99',
      level: 3,
      isFinal: false,
      korean: '상당히 큰 문화센터 한 곳이 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '相当大', '的', '文化', '中心'],
        pinyin: [
          'yǒu',
          'yì',
          'jiā',
          'xiāngdāng dà',
          'de',
          'wénhuà',
          'zhōngxīn',
        ],
      },
    },
    {
      id: 'sentence99',
      level: 4,
      isFinal: false,
      korean: '규모가 상당히 큰 문화센터 한 곳이 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '规模', '相当', '大', '的', '文化', '中心'],
        pinyin: [
          'yǒu',
          'yì',
          'jiā',
          'guīmó',
          'xiāngdāng',
          'dà',
          'de',
          'wénhuà',
          'zhōngxīn',
        ],
      },
    },
    {
      id: 'sentence99',
      level: 5,
      isFinal: true,
      korean: '그 지역에는 규모가 상당히 큰 문화센터 한 곳이 있다.',
      chinese: {
        hanzi: [
          '当地',
          '有',
          '一',
          '家',
          '规模',
          '相当',
          '大',
          '的',
          '文化',
          '中心',
        ],
        pinyin: [
          'dāngdì',
          'yǒu',
          'yì',
          'jiā',
          'guīmó',
          'xiāngdāng',
          'dà',
          'de',
          'wénhuà',
          'zhōngxīn',
        ],
      },
    },

    // 100번
    {
      id: 'sentence100',
      level: 1,
      isFinal: false,
      korean: '손을 붙잡다.',
      chinese: {
        hanzi: ['握住', '手'],
        pinyin: ['wòzhù', 'shǒu'],
      },
    },
    {
      id: 'sentence100',
      level: 2,
      isFinal: false,
      korean: '상대방의 손을 붙잡다.',
      chinese: {
        hanzi: ['握住', '对方', '的', '手'],
        pinyin: ['wòzhù', 'duìfāng', 'de', 'shǒu'],
      },
    },
    {
      id: 'sentence100',
      level: 3,
      isFinal: false,
      korean: '급히 상대방의 손을 붙잡다.',
      chinese: {
        hanzi: ['连忙', '握住', '对方', '的', '手'],
        pinyin: ['liánmáng', 'wòzhù', 'duìfāng', 'de', 'shǒu'],
      },
    },
    {
      id: 'sentence100',
      level: 4,
      isFinal: true,
      korean: '코치는 급히 상대방의 손을 붙잡다.',
      chinese: {
        hanzi: ['教练', '连忙', '握住', '对方', '的', '手'],
        pinyin: ['jiàoliàn', 'liánmáng', 'wòzhù', 'duìfāng', 'de', 'shǒu'],
      },
    },
  ],
};

// 전역 변수로 내보내기
window.sentenceData = sentenceData;
