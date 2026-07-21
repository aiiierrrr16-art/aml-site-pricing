const services = [
  { name: "网站诊断报告", price: "699", fit: "适合已有网站，但不确定问题在哪里", items: ["首页、产品页与移动端体验检查", "购买路径与基础转化问题梳理", "基础 SEO、速度与信任感检查", "交付一份问题清单及优化优先级", "诊断费可在后续任意优化 / 建站服务中全额抵扣"] },
  { name: "首页优化", price: "1,500", fit: "适合网站已上线，但首页缺少品牌感与重点", image: "./service-shots/home-optimization.png", mobileImage: "./service-shots/home-optimization-mobile.png", items: ["首屏卖点与内容顺序重新梳理", "版式、字体、色彩与视觉层级优化", "核心模块与行动按钮调整", "桌面端及移动端适配"] },
  { name: "首页 + 产品页优化", price: "3,000", fit: "适合有流量，但访问后加购和购买偏低", image: "./service-shots/home-product.png", mobileImage: "./service-shots/home-product-mobile.png", items: ["首页内容结构与品牌视觉升级", "产品页信息、卖点与购买区优化", "信任背书、FAQ 与关联推荐规划", "核心购买路径及移动端整体检查"] },
  { name: "AI 视觉素材（项目加购）", price: "", fit: "建站 / 优化项目可加购品牌视觉素材，按需报价。", items: ["独立需求：产品 / 场景图 ¥800 起 / 10 张", "原创模特形象 ¥1,500 起 / 组"] },
  { name: "基础品牌站搭建", price: "6,000", fit: "适合首次启动 Shopify、产品与素材较完整", items: ["基础需求梳理与网站结构规划", "首页、产品页及必要基础页面搭建", "支付、域名、物流与基础 SEO 配置", "移动端适配、上线检查与后台交接"] },
  { name: "完整品牌站", price: "10,000", fit: "适合希望从品牌表达开始系统搭建独立站", image: "./service-shots/full-brand-site.png", mobileImage: "./service-shots/full-brand-site-mobile.png", items: ["品牌定位、页面策略与视觉方向", "首页、集合页、产品页及内容页面", "AI 视觉素材与转化模块设计", "支付物流、SEO、上线测试及操作说明"] },
];

const cases = [
  { name: "Zuofun Maison", market: "法式香氛 · 美国市场", image: "./work/zuofun-home.webp", note: "以大幅氛围视觉建立高级感，重构首页动线、系列入口与产品购买路径。", tags: ["品牌视觉", "首页搭建", "产品页"] },
  { name: "Fantine Beauty", market: "韩系护肤 · 美国市场", image: "./work/fantine-home.webp", note: "用成分功效与柔和视觉建立专业感，兼顾商品信息密度和移动端阅读。", tags: ["功效表达", "移动端", "转化结构"] },
  { name: "Smellology", market: "阿拉伯小众香氛 · 美国市场", image: "./work/smellology-home.webp", note: "从首页到产品页统一香调、故事与场景化视觉，形成完整品牌叙事。", tags: ["站点规划", "品牌叙事", "视觉系统"] },
];

const rules = [
  ["01", "首款到账后排期", "项目确认后支付启动款，到账后正式排期并进入需求梳理。"],
  ["02", "每页包含 2 轮修改", "修改针对已确认方案的优化，不包含整体方向重新设计。"],
  ["03", "新增需求另行报价", "新增页面、功能、插件、文案、图片或推翻已确认方向，需重新评估。"],
  ["04", "第三方费用客户承担", "Shopify 套餐、域名、主题、App、邮箱、版权素材及广告费用不代垫。"],
  ["05", "资料延迟，工期顺延", "因客户资料或确认延迟导致的项目延期，交付日期相应顺延。"],
  ["06", "交付后 7 天基础修复", "处理原交付范围内的基础问题，不包含任何新增需求。"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top">AML <span>独立站服务</span></a>
        <div className="navLinks">
          <a href="#services">服务</a><a href="#cases">案例</a><a href="#payment">付款</a><a href="#rules">规则</a>
          <a className="navCta" href="#contact">咨询合作</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow">SHOPIFY DESIGN & DEVELOPMENT</p>
        <h1>让你的独立站，<br /><em>更专业，也更能转化。</em></h1>
        <p className="identity">独立设计师一对一接单，不外包、不转手，全程直接对接。</p>
        <div className="heroBottom">
          <p>从页面优化、AI 视觉到完整品牌站搭建。按阶段确认、按节点付款，让预算、进度和交付都清清楚楚。</p>
          <a className="button dark" href="#services">查看服务报价 <span>↓</span></a>
        </div>
      </section>

      <div className="promise"><div className="shell"><span>先收款，再排期</span><span>分阶段确认与付款</span><span>需求变更必须加价</span></div></div>

      <section className="section shell" id="services">
        <header className="sectionHead"><p>01 / 服务报价</p><h2>选择适合你的起点</h2><span>以下为常见项目参考价，最终费用根据页面数量、功能复杂度、素材与交付周期确认。</span></header>
        <div className="services">
          {services.map((service, index) => (
            <article className={index === 2 ? "featured" : ""} key={service.name}>
              <span className="number">0{index + 1}</span>
              <h3>{service.name}</h3>
              <p className="serviceFit">{service.fit}</p>
              {service.image && <figure className="serviceShot">
                <img className="desktopShot" src={service.image} alt={`${service.name}桌面端代表项目截图，品牌信息已隐去`} />
                {service.mobileImage && <img className="mobileShot" src={service.mobileImage} alt={`${service.name}手机端代表项目截图，品牌信息已隐去`} />}
                <figcaption>DESKTOP + MOBILE</figcaption>
              </figure>}
              <ul>{service.items.map((item, itemIndex) => <li className={index === 0 && itemIndex === service.items.length - 1 ? "benefit" : ""} key={item}>{item}</li>)}</ul>
              {index >= 4 && <p className="trustBuffer">可先从诊断或单页优化开始合作，满意后再推进。</p>}
              <div className={`price ${index === 3 ? "addonPrice" : ""}`}>{index === 3 ? "按需报价" : <><small>¥</small>{service.price}<small> 起</small></>}</div>
              <a href="#contact">咨询此服务 ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="caseSection" id="cases">
        <div className="shell">
          <header className="sectionHead caseHead"><p>02 / 精选案例</p><h2>做过什么，<br />比说什么更重要</h2><span>独立完成品牌站从结构、视觉到上线的完整落地，覆盖香氛、护肤与跨境零售场景。</span></header>
          <div className="caseGrid">
            {cases.map((item, index) => (
              <article key={item.name}>
                <div className="caseImage"><img src={item.image} alt={`${item.name} 独立站首页案例`} /></div>
                <div className="caseMeta"><span>0{index + 1}</span><span>{item.market}</span></div>
                <h3>{item.name}</h3><p>{item.note}</p>
                <div className="caseTags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="caseResults">
            <article><strong>3</strong><span>个品牌站从 0 到 1<br />独立规划并上线</span></article>
            <article><strong>≈100</strong><span>个累计上架 SKU<br />覆盖多品类内容</span></article>
            <article><strong>≈100</strong><span>张 AI 视觉素材<br />无拍摄预算完成</span></article>
            <figure><img src="./case-data.png" alt="广告投放数据记录案例" /><figcaption>投放数据记录与漏斗诊断</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="payment" id="payment">
        <div className="shell paymentInner">
          <header><p>03 / 付款方式</p><h2>每一笔付款，<br />都对应明确进度。</h2><span>首款未到账不开工，尾款未结清不交付完整源码、管理员权限和可编辑源文件。</span></header>
          <div className="paymentCards">
            <article>
              <div className="paymentTitle"><span>小型项目</span><strong>50 / 50</strong></div>
              <ol><li><b>50%</b><p>确认需求、排期前<small>项目启动</small></p></li><li><b>50%</b><p>最终版本交付前<small>结清尾款</small></p></li></ol>
            </article>
            <article>
              <div className="paymentTitle"><span>¥8,000 以上建站</span><strong>40 / 40 / 20</strong></div>
              <ol><li><b>40%</b><p>签约排期<small>需求梳理与启动</small></p></li><li><b>40%</b><p>核心页面确认<small>进入正式开发</small></p></li><li><b>20%</b><p>上线验收前<small>后台、源码与说明交接</small></p></li></ol>
            </article>
          </div>
        </div>
      </section>

      <section className="example shell">
        <div className="exampleIntro"><p>04 / 费用构成示例</p><h2>¥8,000 品牌站<br />不是“只做几个页面”</h2><span>你购买的是从需求梳理、设计开发到上线交接的一套完整服务。</span></div>
        <dl>
          <div><dt>需求与品牌梳理</dt><dd>¥800</dd></div><div><dt>首页设计与搭建</dt><dd>¥2,000</dd></div><div><dt>产品页模板</dt><dd>¥1,500</dd></div><div><dt>基础 SEO</dt><dd>¥800</dd></div><div><dt>AI 视觉素材</dt><dd>¥1,500</dd></div><div><dt>移动端适配</dt><dd>¥800</dd></div><div><dt>上线与交接</dt><dd>¥600</dd></div>
          <div className="total"><dt>合计</dt><dd>¥8,000</dd></div>
        </dl>
      </section>

      <section className="section shell" id="rules">
        <header className="sectionHead"><p>05 / 合作规则</p><h2>合作前，先把边界说清楚</h2></header>
        <div className="rules">{rules.map(([no,title,text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <footer id="contact">
        <div className="shell">
          <p className="eyebrow">READY TO START?</p>
          <h2>先聊需求，<br />再给你一份清晰报价。</h2>
          <div className="contact">
            <span>咨询合作｜获取详细报价单</span>
            <div className="contactMethods">
              <a href="mailto:aiiierrrr16@gmail.com"><small>EMAIL</small>aiiierrrr16@gmail.com ↗</a>
              <a href="tel:18255319596"><small>PHONE</small>182 5531 9596 ↗</a>
              <p><small>WECHAT</small>amlstc1012</p>
            </div>
          </div>
          <small>© 2026 AML Independent Site Studio · 报价以最终确认的服务范围为准</small>
        </div>
      </footer>
    </main>
  );
}
