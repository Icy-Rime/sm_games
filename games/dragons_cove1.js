const STAGE_SELECT_TREASURES0 = 0;
const STAGE_SELECT_TREASURES1 = 1;
const STAGE_SELECT_ESCAPE0 = 2;
const STAGE_SELECT_ESCAPE1 = 3;
const STAGE_SELECT_ESCAPE2 = 4;
const STAGE_SELECT_PUBISH0 = 5;
const STAGE_SELECT_WAIT0 = 6;
const STAGE_SELECT_CHANGE0 = 7;
const STAGE_SELECT_MILKING0 = 8;

/**
 * Context Data
 * @typedef {Object} ContextData
 * @property {number} stageTo
 * @property {Array<number>} treasures
 * @property {number} punishment
 */

const TEXT_STAGE_NEW_0 = `请量力而行，贪心的冒险者可是会自食其果的~

本游戏含有一下元素，如感到不适请立刻停止游戏:
　　- 拘束
　　- 后庭插入
　　- 灌肠
　　- 贞操锁
　　- 动物扮演
　　- 憋尿
　　- 尿布
　　- 强迫射精

冒险家需要有个主人或者朋友，来扮演巨龙并主持这个游戏。

需要的道具如下(也可以自行更改添加):
　　- 宝石: 可以使用糖或者凝胶蛋代替
　　- 黄金匕首: 较短的塞子
　　- 勇者之剑: 较大较长的塞子
　　- 盔甲: 贞操锁
　　- 生命之水: 就是普通的水
　　- 龙根: "巨龙"的，或者假棒棒，最好有配套的炮机
　　- 龙的精华: 使用牛奶代替
　　- 尿布或者尿垫，卫生间地板或者防水床单，合适的拘束道具

建议选择温度适宜的环境，不要感冒。游戏之前需要进行深度灌肠，会比较花时间，但是之后游戏就会比较方便。游戏开始时需要将衣服脱干净，一旦游戏开始，就不能随意上厕所了，按照指令推进剧情吧！

之后的内容应该由主持者阅读，冒险家请根据主持者的指示行动~`;

const OPTIONS_STAGE_NEW_0 = [ "继续" ];

const TEXT_STAGE_0_0 = `>～～～～～～～选择宝藏～～～～～～～<

一个没什么名气的冒险家，因为听到了守护有大量财宝的龙的传说，于是决定亲自前往寻找宝藏。

十分幸运，经过一周的仔细搜寻，冒险家找到了龙的巢穴。鉴于冒险家自己与龙的战斗力差距悬殊，冒险家决定悄悄潜入龙巢偷取宝藏。

冒险家的运气不错，当冒险家来到一大堆的财宝前面的时候，并没有发现龙的踪影。抓紧时间，装上冒险家想要带走的财宝吧~

>> 冒险家选择想要带走的“宝藏”。但是带走的财宝越多，逃跑也会变得越困难~
　　- 小型宝石(直径3cm以内)
　　- 大型宝石
　　- 黄金匕首(较短的塞子)
　　- 勇者之剑(较大较长的塞子)
　　- 被诅咒的盔甲(贞操锁，游戏期间不能脱下)
　　- 生命之水(250ml干净的水)

>> 冒险家需要将拿取的“宝藏”全部塞进或者灌进小穴，如果选择了盔甲(贞操锁)也要戴上。

当前拿取的“宝藏”:
`;

const TREASURES_NAMES = [
    "小型宝石",
    "大型宝石",
    "黄金匕首",
    "勇者之剑",
    "被诅咒的盔甲",
    "生命之水",
];

const TREASURES_VALUES = [
    5,
    10,
    10,
    20,
    20,
    20,
];

const TEXT_STAGE_1_0 = `>～～～～～～～逃离巨龙的追击～～～～～～～<

啊咧？冒险家听到了低沉的脚步声正在接近，似乎是巨龙要回来了，什么都别说，赶紧跑路吧！俯下身子，悄悄的溜走吧！

>> 冒险家需要在带着宝藏的情况下，在屋子里爬 {value0} 圈。爬行期间，冒险家所携带的宝藏不能掉或者漏出来，否则就会被巨龙发现。`;

const OPTIONS_STAGE_1_0 = [ "没被巨龙发现", "啊呀，被抓住了……" ];

const TEXT_STAGE_1_1 = `>～～～～～～～逃离巨龙的追击～～～～～～～<

但是，十分不幸，冒险家在下一个转角听到了越来越近的巨龙的脚步声，冒险家急中生智，瞬间摆出一副乖狗狗的样子，假装自己是一座装饰品，并祈祷这能够瞒过即将到来的巨龙。

>> 冒险家需要跪着坐好，两只爪子举在胸口，做出乖狗狗的样子，闭上眼睛，等待巨龙的离去。
>> 由主持人扮演巨龙，巨龙要停留 {value0} 分钟(这个时间对冒险家保密)来观察这座装饰品，在这期间，巨龙可能会舔一舔或者挠一挠冒险家，冒险家需要忍住保持住姿势不要动或者睁开眼睛。
>> 时间到了冒险家不会收到提醒，需要自己判断。当冒险家觉得巨龙应该已经离开的时候，可以自行睁开眼睛了。
>> 如果冒险家在巨龙还没离开(时间到)之前，没保持住姿势、宝藏掉出来或者睁开了眼睛，则会被巨龙发现。`;

const OPTIONS_STAGE_1_1 = [ "没被巨龙发现", "哎呀，被发现了……" ];

const TEXT_STAGE_1_2 = `>～～～～～～～逃离巨龙的追击～～～～～～～<

逃到了龙穴的出口，却发现洞口被未知的魔法结界挡住了去路，冒险家决定无论怎样还是要挣扎一下的。

>> 对着门口蛙跳 {value0} 次，要确保冒险家的宝藏不会漏出来，否则被巨龙追上`;

const OPTIONS_STAGE_1_2 = [ "但是结界还是没有打开", "哎呀，被追上了……" ];

const TEXT_STAGE_2_0 = `>～～～～～～～巨龙的惩罚～～～～～～～<

冒险家被巨龙发现并抓住了。偷取巨龙宝藏的冒险家，将会受到巨龙的惩罚。

看起来冒险家并不是一个无可救药的小偷，巨龙决定稍微惩罚一下冒险家。

>> 含住巨龙的龙根至少 {value0} 秒钟，最后被迫喝下一肚子(400ml)龙精。`;

const TEXT_STAGE_2_1 = `>～～～～～～～巨龙的惩罚～～～～～～～<

冒险家还是被巨龙发现并抓住了。偷取巨龙宝藏的冒险家，将会受到巨龙的惩罚。

巨龙对冒险家的行为感到愤怒，冒险家需要承受巨龙的怒火。

>> 冒险家的照明道具被巨龙没收，洞穴里一片漆黑(遮住冒险家的眼睛)。
>> 冒险家被巨龙按在爪下动弹不得(捆绑起来确保冒险家无法逃过惩罚)
>> 冒险家的小穴被龙根无情地侵犯了，这将是漫长的 {value0} 分钟…… 冒险家无法得知这是多长时间，只有巨龙觉得满意了，侵犯才会结束
>> 冒险家的小穴中被灌入了 {value1}ml 的龙精。塞子会在惩罚结束重新被塞回去，此时冒险家的体内应该装满了宝藏吧~

(如果没有炮机，那冒险家还是很幸运的，巨龙累了也可以稍微休息一下，不需要暂停计时)`;

const OPTIONS_STAGE_2_0 = [ "惩罚完成，继续" ];

const TEXT_STAGE_3_0 = `>～～～～～～～动弹不得～～～～～～～<

>> 巨龙在享用过冒险家之后，心满意足地离开了，只留下冒险家趴在冰冷的洞穴里(转移到卫生间的地板上或者防水床单上面)

>> 在龙精毒性的作用下，冒险家控制不住地蜷成一团，动弹不得(蜷起双腿，双手从两腿之间伸出去，和脚踝束缚在一起)

>> 冒险家渐渐地感觉到身体越来越涨，十分难受。但是只能努力忍着这种感觉，因为冒险家有预感，一旦忍不住，会有糟糕的事情发生(没憋住会尿自己一身，时间结束前都不能清理)。

>> 龙精的毒性会持续 {value0} 分钟。冒险家无法得知龙毒会持续多久，只能动弹不得地呆着`;

const OPTIONS_STAGE_3_0 = [ "恢复知觉了，继续" ];

const TEXT_STAGE_4_0 = `>～～～～～～～改变～～～～～～～<

也不知道过了多久，等冒险家意识到身体恢复知觉的时候，总感觉有些地方不对劲。冒险家试着想站起来，却发现四肢已经不允许冒险家两只脚站立了，冒险家似乎变成了一只小龙？

巨龙也在这个时候重新出现在了冒险家的视线里。它检查了一下冒险家的身下。

>> 如果冒险家没有忍住，地面一滩尿液的话，那冒险家就还是没有长大的龙宝宝，需要穿上尿布，此后要一直穿着尿布，只能尿在尿布里，只有尿布溢出来了才允许更换

>> 如果冒险家忍住了，巨龙会允许冒险家趴着尿到盆子里。并且要求冒险家以后每次尿尿前请示，用同样的姿势，在巨龙的注视下才能尿尿

>> 冒险家此后只能爬行跪坐或者躺着，无法站起来

>> 冒险家失去了说话的能力，只能嗷嗷叫表达自己的意思(只有被允许才能说话)

>> 冒险家只能像龙龙那样喝水进食，趴着舔水和吃东西`;

const OPTIONS_STAGE_4_0 = [ "变成小龙了~" ];

const TEXT_STAGE_5_0 = `>～～～～～～～做一只小龙～～～～～～～<

好吧，既然变成了小龙，那也得学习怎么生活下去。冒险家需要习惯四肢着地的行走方式，像龙龙那样进食，嗷嗷叫来表达自己的意思。

在日复一日的生活中，冒险家了解到了龙穴出口的封印需要巨龙的魔力配合精液才能解除。由于冒险家只是一只小龙，并没有拥有巨龙的魔力，所以需要巨龙的帮助。

>> 冒险家需要尽力讨好巨龙，让它帮自己射精，使冒险家的精液混合进巨龙的魔力，最后涂在冒险家的身上，保留至少一个小时，才算获得一枚魔纹。

>> (什么？冒险家穿着被诅咒的盔甲(贞操锁)脱不下来？那得学会如何在穿着盔甲的情况下射精了~)

冒险家需要 {value0} 个魔纹才能解除龙穴出口的封印，加油吧~

(这个剧情会持续多久，取决于冒险家的"产量"以及巨龙是否愿意放冒险家离开~)`;

const OPTIONS_STAGE_5_0 = [ "收集到了足够的魔纹" ];

const TEXT_STAGE_6_0 = `>～～～～～～～结束？～～～～～～～<

终于，在又一次榨干了自己的精华以后，冒险家收集到了足够的魔纹。冒险家悄悄地穿过了龙穴出口的结界，很顺利。

就在龙穴出口的不远处，正站着冒险家之前的好友们，他们是寻找失踪的冒险家才来到这里的。

冒险家惊喜地嗷嗷叫着跑过去，只看到他们当中的魔法师亮出了法杖，随着一颗白色的魔法砸中它的小脑袋，冒险家的世界再次陷入了黑暗……

再次醒来，冒险家感觉到脖子上沉甸甸的，而且在试图移动的时候，四肢扯得锁链哗啦啦地响。

冒险家想要呼叫好友，却没办法说出哪怕一个完整的词语，急得它嗷嗷乱叫，却看到朋友正拿着一张魔宠强制契约向它走来……

>～～～～～～～待续 魔宠生涯开始了～～～～～～～<`;

/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageNew = (resp) => {
    /** @type {ContextData} */
    const data = resp.data;
    data.stageTo = STAGE_SELECT_TREASURES0;
    data.treasures = [];
    resp.message = TEXT_STAGE_NEW_0;
    resp.options = OPTIONS_STAGE_NEW_0;
};
/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageTreasures = (resp, action) => {
    /** @type {ContextData} */
    const data = resp.data;
    if (data.stageTo === STAGE_SELECT_TREASURES1) {
        if (action < TREASURES_NAMES.length) {
            // 拿取宝藏
            data.treasures.push(action);
        } else {
            // 确认拿取，继续冒险
            const points = data.treasures.reduce((last, value) => last + TREASURES_VALUES[ value ], 0);
            data.stageTo = STAGE_SELECT_ESCAPE0;
            data.punishment = points;
            resp.message = TEXT_STAGE_1_0.replace("{value0}", Math.ceil(points / 10).toString());
            resp.options = OPTIONS_STAGE_1_0;
            return;
        }
    }
    data.stageTo = STAGE_SELECT_TREASURES1;
    resp.message = TEXT_STAGE_0_0;
    resp.message += data.treasures.map((tid) => "- " + TREASURES_NAMES[ tid ]).join("\n");
    TREASURES_NAMES.forEach((tname) => {
        resp.options.push("拿取 " + tname);
    });
    resp.options.push("就要这么多了，继续冒险");
};
/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageEscape = (resp, action) => {
    /** @type {ContextData} */
    const data = resp.data;
    if (data.stageTo === STAGE_SELECT_ESCAPE0) {
        if (action === 0) {
            // 逃跑成功
            data.stageTo = STAGE_SELECT_ESCAPE1;
            resp.message = TEXT_STAGE_1_1.replace("{value0}", (Math.ceil(7 * Math.random()) + 3).toString());
            resp.options = OPTIONS_STAGE_1_1;
        } else {
            // 逃跑失败
            data.punishment += 60;
            return stagePunish(resp, -1);
        }
    } else if (data.stageTo === STAGE_SELECT_ESCAPE1) {
        if (action === 0) {
            // 逃跑成功
            data.stageTo = STAGE_SELECT_ESCAPE2;
            resp.message = TEXT_STAGE_1_2.replace("{value0}", (Math.ceil(10 * Math.random()) + 5).toString());
            resp.options = OPTIONS_STAGE_1_2;
        } else {
            // 逃跑失败
            data.punishment += 40;
            return stagePunish(resp, -1);
        }
    } else {
        // } else if (data.stageTo === STAGE_SELECT_ESCAPE2) {
        if (action === 0) {
            // 逃跑成功
            return stagePunish(resp, -1);
        } else {
            // 逃跑失败
            data.punishment += 20;
            return stagePunish(resp, -1);
        }
    }
};
/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stagePunish = (resp, action) => {
    /** @type {ContextData} */
    const data = resp.data;
    if (action >= 0) {
        // 惩罚完成
        stageWait(resp, -1);
    } else {
        // 显示惩罚内容
        data.stageTo = STAGE_SELECT_PUBISH0;
        resp.options = OPTIONS_STAGE_2_0;
        if (data.punishment <= 50) {
            const value0 = 300 + (Math.ceil(Math.random() * 6) * data.punishment);
            resp.message = TEXT_STAGE_2_0.replace("{value0}", value0.toString());
        } else {
            const value0 = Math.ceil(data.punishment / 2) + Math.ceil(Math.random() * 60);
            const value1 = 400 + (data.punishment * 4);
            resp.message = TEXT_STAGE_2_1.replace("{value0}", value0.toString()).replace("{value1}", value1.toString());
        }
    }
};
/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageWait = (resp, action) => {
    /** @type {ContextData} */
    const data = resp.data;
    if (action >= 0) {
        // 完成
        stageChange(resp, -1);
    } else {
        // 显示内容
        data.stageTo = STAGE_SELECT_WAIT0;
        resp.options = OPTIONS_STAGE_3_0;
        let value0 = Math.ceil(data.punishment * ((Math.random() * 0.5) + 0.5));
        if (data.punishment > 100) {
            value0 = value0 * 1.5;
        }
        resp.message = TEXT_STAGE_3_0.replace("{value0}", value0.toString());
    }
};
/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageChange = (resp, action) => {
    /** @type {ContextData} */
    const data = resp.data;
    if (action >= 0) {
        // 完成
        stageMilking(resp, -1);
    } else {
        // 显示内容
        data.stageTo = STAGE_SELECT_CHANGE0;
        resp.options = OPTIONS_STAGE_4_0;
        resp.message = TEXT_STAGE_4_0;
    }
};
/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageMilking = (resp, action) => {
    /** @type {ContextData} */
    const data = resp.data;
    if (action >= 0) {
        // 完成
        resp.options = [];
        resp.message = TEXT_STAGE_6_0;
    } else {
        // 显示内容
        data.stageTo = STAGE_SELECT_MILKING0;
        resp.options = OPTIONS_STAGE_5_0;
        const value0 = Math.ceil(data.punishment / 10);
        resp.message = TEXT_STAGE_5_0.replace("{value0}", value0.toString());
    }
};

/**
 * @param {import("../types/game_context.d.ts").GameContextSend} ctx
 * @returns {import("../types/game_context.d.ts").GameContextRecive}
 */
const run = (ctx) => {
    /** @type {import("../types/game_context.d.ts").GameContextRecive} */
    const resp = {
        title: "龙穴冒险",
        message: "",
        options: [],
        data: ctx.data,
    };
    if (ctx.action < 0) {
        stageNew(resp);
        return resp;
    }
    switch (ctx.data.stageTo) {
        case STAGE_SELECT_TREASURES0:
        case STAGE_SELECT_TREASURES1:
            stageTreasures(resp, ctx.action);
            break;
        case STAGE_SELECT_ESCAPE0:
        case STAGE_SELECT_ESCAPE1:
        case STAGE_SELECT_ESCAPE2:
            stageEscape(resp, ctx.action);
            break;
        case STAGE_SELECT_PUBISH0:
            stagePunish(resp, ctx.action);
            break;
        case STAGE_SELECT_WAIT0:
            stageWait(resp, ctx.action);
            break;
        case STAGE_SELECT_CHANGE0:
            stageChange(resp, ctx.action);
            break;
        case STAGE_SELECT_MILKING0:
            stageMilking(resp, ctx.action);
            break;

        default:
            break;
    }
    return resp;
};

export default run;
