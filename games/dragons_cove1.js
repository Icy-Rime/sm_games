const STAGE_SELECT_TREASURES0 = 0;
const STAGE_SELECT_TREASURES1 = 1;
const STAGE_SELECT_ESCAPE0 = 2;
const STAGE_SELECT_ESCAPE1 = 3;

/**
 * Context Data
 * @typedef {Object} ContextData
 * @property {number} stage
 * @property {Array<number>} treasures
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

你需要有个主人或者朋友，来主持这个游戏，并对你进行调教。

需要的道具如下(也可以自行更改添加):
　　- 宝石: 可以使用糖或者凝胶蛋代替
　　- 黄金匕首: 较短的塞子
　　- 勇者之剑: 较大较长的塞子
　　- 盔甲: 贞操锁
　　- 生命之水: 就是普通的水
　　- 龙根: 可以用有挑战性的假棒棒代替，最好有配套的炮机
　　- 龙的精华: 使用牛奶代替
　　- 尿布或者尿垫，卫生间地板或者防水床单，合适的拘束道具

建议选择温度适宜的环境，不要感冒。游戏之前需要进行深度灌肠，会比较花时间，但是之后游戏就会比较方便。游戏开始时需要将衣服脱干净，一旦游戏开始，就不能随意上厕所了，按照指令推进剧情吧~`;

const TEXT_STAGE_0_0 = `>～～～～～～～选择你的宝藏～～～～～～～<

你是一个没什么名气的冒险家，因为听到了守护有大量财宝的龙的传说，于是决定亲自前往寻找宝藏。

十分幸运，经过一周的仔细搜寻，你找到了龙的巢穴。鉴于你自己与龙的战斗力差距悬殊，你决定悄悄潜入龙巢偷取宝藏。

你的运气不错，当你来到一大堆的财宝前面的时候，并没有发现龙的踪影。抓紧时间，装上你想要带走的财宝吧~

>> 选择你要带走的“宝藏”但是你带走的财宝越多，逃跑也会变得越困难~
　　- 小型宝石(直径3cm以内)
　　- 大型宝石
　　- 黄金匕首(较短的塞子)
　　- 勇者之剑(较大较长的塞子)
　　- 被诅咒的盔甲(贞操锁，游戏期间不能脱下)
　　- 生命之水(250ml干净的水)

>> 你需要将你拿取的“宝藏”全部塞进或者灌进小穴，如果选择了盔甲(贞操锁)也要戴上。

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

/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageNew = (resp) => {
    /** @type {ContextData} */
    const data = resp.data;
    data.stage = STAGE_SELECT_TREASURES0;
    data.treasures = [];
    resp.message = TEXT_STAGE_NEW_0;
    resp.options.push("继续");
};
/**
 * @param {import("../types/game_context.d.ts").GameContextRecive} resp 
 */
const stageTreasures = (resp, action) => {
    /** @type {ContextData} */
    const data = resp.data;
    if (data.stage == STAGE_SELECT_TREASURES1) {
        if (action < TREASURES_NAMES.length) {
            // 拿取宝藏
            data.treasures.push(action);
        } else {
            // 确认拿取，继续冒险
            data.stage = STAGE_SELECT_ESCAPE0;
            return;
        }
    }
    data.stage = STAGE_SELECT_TREASURES1;
    resp.message = TEXT_STAGE_0_0;
    resp.message += data.treasures.map((tid) => "- " + TREASURES_NAMES[ tid ]).join("\n");
    TREASURES_NAMES.forEach((tname) => {
        resp.options.push("拿取 " + tname);
    });
    resp.options.push("就要这么多了，继续冒险");
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
    switch (ctx.data.stage) {
        case STAGE_SELECT_TREASURES0:
        case STAGE_SELECT_TREASURES1:
            stageTreasures(resp, ctx.action);
            break;

        default:
            break;
    }
    return resp;
};

export default run;
