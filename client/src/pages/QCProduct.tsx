/**
 * Medical Record Quality Control Product Detail Page
 * Design Philosophy: Neo-Medical
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Hospital, 
  CheckCircle2, 
  Zap, 
  Clock, 
  TrendingUp,
  FileCheck,
  Settings,
  Users,
  BarChart3,
  Sparkles,
  Shield,
  Workflow,
  MessageSquare,
  Database,
  Bell,
  ArrowRight,
  ChevronRight,
  Download,
  Play,
  Star,
  Award,
  Target,
  Layers,
  Code,
  RefreshCw
} from "lucide-react";
import { Link } from "wouter";

export default function QCProduct() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-900">超脑AI质控</div>
                  <div className="text-xs text-slate-600">专注医疗AI大模型</div>
                </div>
              </a>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/">
                <a className="text-slate-600 hover:text-slate-900 transition-colors">返回首页</a>
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                申请试用
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              核心产品 · 已服务多家医院
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI病历质控系统
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              基于超脑松杉大模型的智能质控解决方案<br/>
              全流程AI驱动，从病历抓取到报表生成，2小时即可部署上线
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
                立即试用
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                观看演示
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                <Download className="w-5 h-5 mr-2" />
                下载产品手册
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600">质控覆盖率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-slate-600">病历合格率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">10倍+</div>
              <div className="text-slate-600">效率提升</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">2小时</div>
              <div className="text-slate-600">快速部署</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">产品概览</h2>
            <p className="text-xl text-slate-600">AI驱动的全流程智能质控解决方案</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/hero-medical-ai.png" 
                alt="AI病历质控系统界面" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">为什么选择超脑AI质控?</h3>
                <p className="text-slate-600 leading-relaxed">
                  传统病历质控依赖人工抽检和规则引擎,覆盖率低、效率低、准确性差。超脑AI质控系统基于医疗大模型,实现全流程AI自动化,从病历抓取到报表生成无需人工干预,质控覆盖率达到100%,效率提升10倍以上。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <Target className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">精准定位</div>
                  <div className="text-sm text-slate-600">字段级缺陷定位</div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-4">
                  <Zap className="w-8 h-8 text-cyan-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">快速部署</div>
                  <div className="text-sm text-slate-600">2小时上线使用</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <Brain className="w-8 h-8 text-green-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">AI驱动</div>
                  <div className="text-sm text-slate-600">大模型智能分析</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <RefreshCw className="w-8 h-8 text-purple-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">持续学习</div>
                  <div className="text-sm text-slate-600">模型自动优化</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">核心功能</h2>
            <p className="text-xl text-slate-600">全方位覆盖病历质控各个环节</p>
          </div>

          <Tabs defaultValue="workflow" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="workflow">智能工作流</TabsTrigger>
              <TabsTrigger value="rules">规则管理</TabsTrigger>
              <TabsTrigger value="analysis">AI分析</TabsTrigger>
              <TabsTrigger value="reports">报表统计</TabsTrigger>
            </TabsList>

            <TabsContent value="workflow" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">AI全自动化工作流</h3>
                      <p className="text-slate-600 mb-6">
                        从病历抓取到报表生成,全流程AI驱动,无需人工干预。AI虚拟机技术突破传统接口限制,实现真正的零门槛接入。
                      </p>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 font-bold">1</span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">AI虚拟机自动抓取</div>
                            <div className="text-sm text-slate-600">无需HIS/EMR接口,自动采集病历数据</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 font-bold">2</span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">AI自动跑质控规则</div>
                            <div className="text-sm text-slate-600">智能引擎执行规则检查,识别缺陷</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-cyan-600 font-bold">3</span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">智能推送+修改意见</div>
                            <div className="text-sm text-slate-600">AI生成修改建议,自动推送给医生</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 font-bold">4</span>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">自动生成报表</div>
                            <div className="text-sm text-slate-600">智能汇总分析,多维度质控报表</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/ai-workflow-new.png" 
                        alt="AI智能工作流" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rules" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">智能规则管理系统</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
                      <h4 className="text-lg font-bold text-slate-900 mb-2">自然语言配置</h4>
                      <p className="text-slate-600 text-sm">
                        用中文描述即可创建质控规则,无需代码,医生也能创建。配置效率提升5-10倍。
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <Database className="w-10 h-10 text-green-600 mb-4" />
                      <h4 className="text-lg font-bold text-slate-900 mb-2">国家级规则库</h4>
                      <p className="text-slate-600 text-sm">
                        覆盖18项核心制度,国家/省市级评分标准包,热门专科增强包,下载量100+。
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6">
                      <Users className="w-10 h-10 text-purple-600 mb-4" />
                      <h4 className="text-lg font-bold text-slate-900 mb-2">医生规则商城</h4>
                      <p className="text-slate-600 text-sm">
                        医生创作规则,智能审核,商城上架全院复用。众创共享、严选认证、即插即用。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">AI智能分析引擎</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/ai-brain-network.png.png" 
                        alt="AI分析引擎" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">超脑松杉大模型</h4>
                        <p className="text-slate-600">
                          专注医疗领域的AI大模型,深度理解医疗场景和专业术语,准确识别病历缺陷。
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">规则+大模型协同</h4>
                        <p className="text-slate-600">
                          传统规则引擎与AI大模型双引擎结合,确保准确性和灵活性,减少误报和漏报。
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">专科术语增强</h4>
                        <p className="text-slate-600">
                          内置肿瘤、骨科、心内等专科知识,减少专业性误报,贴合临床实际需求。
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">持续学习优化</h4>
                        <p className="text-slate-600">
                          基于医生反馈自动优化模型,版本迭代与闭环学习,通过RLHF持续提升效果。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">智能报表统计系统</h3>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img 
                        src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/data-dashboard.png" 
                        alt="数据仪表盘" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <BarChart3 className="w-6 h-6 text-blue-600" />
                          <h4 className="font-bold text-slate-900">病历问题统计</h4>
                        </div>
                        <p className="text-sm text-slate-600">按科室、医生、病历类型统计缺陷分布</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                          <h4 className="font-bold text-slate-900">质量趋势分析</h4>
                        </div>
                        <p className="text-sm text-slate-600">病历质量指标趋势,改进效果可视化</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="w-6 h-6 text-purple-600" />
                          <h4 className="font-bold text-slate-900">18项核心制度</h4>
                        </div>
                        <p className="text-sm text-slate-600">国家标准合规性报表,支持等级评审</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <Users className="w-6 h-6 text-cyan-600" />
                          <h4 className="font-bold text-slate-900">绩效统计</h4>
                        </div>
                        <p className="text-sm text-slate-600">医生整改效率、响应时间等绩效指标</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Solution Scenarios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">解决方案</h2>
            <p className="text-xl text-slate-600">针对不同场景,提供灵活的部署方案</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Hospital className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">全院级质控方案</h3>
                <p className="text-slate-600 mb-6">
                  与HIS/EMR无缝对接,实时交互预警,全流程闭环管理。适用于医务处、病案室、信息科统筹建设。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">HIS/EMR系统无缝对接</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">实时交互预警</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">全流程闭环管理</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">1-2周完成对接上线</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  了解详情
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-500 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-white px-4 py-1 text-sm font-medium">
                推荐方案
              </div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">单科室版智控</h3>
                <p className="text-slate-600 mb-6">
                  零门槛接入,2小时完成部署,即开即用。适用于临床科室主任、质控员快速试用。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">零门槛接入(无需接口)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">2小时完成部署</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">即开即用</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">满意后全院推广</span>
                  </li>
                </ul>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  立即试用
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Workflow className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">事中+事后双重质控</h3>
                <p className="text-slate-600 mb-6">
                  全流程覆盖,从书写到归档的每个环节。实现质控前置和全流程闭环管理。
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">事中:工作站实时拦截</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">事后:出院前自动触发</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">归档前最后防线</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">全流程质控闭环</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  了解详情
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">客户案例</h2>
            <p className="text-xl text-slate-600">已成功服务多家医院,效果显著</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Hospital className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-900">某三甲综合医院</div>
                    <div className="text-sm text-slate-500">1500床位</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-600 text-sm">质控覆盖率</span>
                    <span className="font-bold text-green-600">30% → 100%</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-600 text-sm">病历合格率</span>
                    <span className="font-bold text-green-600">85% → 98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-sm">整改耗时</span>
                    <span className="font-bold text-green-600">缩短60%</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "AI质控系统让我们的病历质量管理工作效率提升了10倍,医生反馈也很好。"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Hospital className="w-8 h-8 text-cyan-600" />
                  <div>
                    <div className="font-bold text-slate-900">某专科医院</div>
                    <div className="text-sm text-slate-500">800床位</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-600 text-sm">部署时间</span>
                    <span className="font-bold text-cyan-600">2小时</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-600 text-sm">规则配置效率</span>
                    <span className="font-bold text-cyan-600">提升8倍</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-sm">缺陷复发率</span>
                    <span className="font-bold text-cyan-600">降低35%</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "单科室版让我们快速体验了AI质控的强大,现在已经推广到全院。"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Hospital className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="font-bold text-slate-900">某市级医院</div>
                    <div className="text-sm text-slate-500">1200床位</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-600 text-sm">等级评审</span>
                    <span className="font-bold text-green-600">顺利通过</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-600 text-sm">质控人员</span>
                    <span className="font-bold text-green-600">减少50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-sm">响应时间</span>
                    <span className="font-bold text-green-600">&lt;5分钟</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "AI质控帮助我们顺利通过了等级评审,18项核心制度合规性大幅提升。"
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              查看更多案例
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing & Trial */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">立即开始使用</h2>
            <p className="text-xl text-blue-100 mb-12">
              多种试用方式,满足不同需求。专业团队全程支持,确保顺利上线。
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">云端体验</h3>
                  <div className="text-3xl font-bold mb-2">3分钟</div>
                  <p className="text-blue-100 text-sm">开通账号即刻体验</p>
                </CardContent>
              </Card>

              <Card className="bg-white text-slate-900 scale-105 shadow-2xl">
                <CardContent className="p-6">
                  <div className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                    推荐
                  </div>
                  <Hospital className="w-12 h-12 mx-auto mb-4 text-cyan-600" />
                  <h3 className="text-xl font-bold mb-2">科室级试用</h3>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">2小时</div>
                  <p className="text-slate-600 text-sm">单科室先行先试</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <Settings className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">全院级对接</h3>
                  <div className="text-3xl font-bold mb-2">1-2周</div>
                  <p className="text-blue-100 text-sm">完整对接上线</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-12">
                立即申请试用
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-12">
                联系销售咨询
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">超脑AI质控</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">专注医疗AI大模型 · 让质控更智能</p>
            <div className="flex justify-center gap-6 text-sm mb-6">
              <Link href="/"><a className="hover:text-white transition-colors">返回首页</a></Link>
              <a href="#" className="hover:text-white transition-colors">产品文档</a>
              <a href="#" className="hover:text-white transition-colors">API接口</a>
              <a href="#" className="hover:text-white transition-colors">联系我们</a>
            </div>
            <div className="border-t border-slate-800 pt-6 text-sm text-slate-500">
              © 2026 上海超脑松杉医疗科技有限公司 版权所有
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
