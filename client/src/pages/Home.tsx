/**
 * Design Philosophy: Neo-Medical
 * - Medical Blue (#1e40af) + Intelligent Cyan (#06b6d4) color system
 * - Z-pattern visual flow for quick decision making
 * - Space Grotesk for headings, Inter for body
 * - Smooth natural animations, immediate feedback
 * - Card-based layout with glass-morphism effects
 */

import { useAuth } from "@/_core/hooks/useAuth";
// import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg text-slate-900">超脑AI质控</div>
                <div className="text-xs text-slate-600">专注医疗AI大模型</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 outline-none">
                  产品
                  <ChevronRight className="w-4 h-4 rotate-90" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/product/qc" className="flex items-start gap-3 p-3 cursor-pointer">
                      <FileCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">病历质控</div>
                        <div className="text-xs text-slate-500 mt-0.5">AI智能质控系统</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/product/generation" className="flex items-start gap-3 p-3 cursor-pointer">
                      <Sparkles className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-900">病历生成</div>
                        <div className="text-xs text-slate-500 mt-0.5">云诊精灵AI助手</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="#future" className="text-slate-700 hover:text-blue-600 transition-colors">未来规划</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">联系我们</a>
              {user?.role === 'admin' && (
                <Link href="/admin/applications" className="text-slate-700 hover:text-blue-600 transition-colors">
                  管理后台
                </Link>
              )}
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="text-sm">
                    <div className="text-slate-900 font-medium">{user.name || user.email}</div>
                    <div className="text-xs text-slate-500">{user.role === 'admin' ? '管理员' : '用户'}</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={logout}>
                    退出
                  </Button>
                </div>
              ) : (
                <Button variant="outline" onClick={() => window.location.href = getLoginUrl()}>
                  登录
                </Button>
              )}
              <Link href="/trial-application">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  申请试用
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Z-pattern: top-left to top-right, diagonal to bottom-left, then bottom-right */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Main message */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                专注AI大模型 · 专注医疗AI
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                AI病历质控系统
                <span className="block text-blue-600 mt-2">让质控更智能</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                全流程智能质控解决方案 · 已服务多家医院落地
              </p>
              
              {/* Top-right: Key metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-600 mt-1">质控覆盖率</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-3xl font-bold text-green-600">10倍+</div>
                  <div className="text-sm text-slate-600 mt-1">效率提升</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-3xl font-bold text-cyan-600">60%</div>
                  <div className="text-sm text-slate-600 mt-1">整改时间缩短</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-3xl font-bold text-amber-600">2-4周</div>
                  <div className="text-sm text-slate-600 mt-1">实施周期</div>
                </div>
              </div>

              {/* Bottom-right: CTA */}
              <div className="flex gap-4 pt-4">
                <Link href="/trial-application">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8">
                    申请试用
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 text-lg px-8">
                  观看演示
                </Button>
              </div>
            </div>

            {/* Right: Visual element */}
            <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} delay-200`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/hero-medical-ai.png" 
                  alt="AI病历质控系统界面" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section - Medical Record QC Product */}
      <section id="qc-product" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">全流程AI质控解决方案</h2>
            <p className="text-xl text-slate-600">针对不同场景，提供灵活的质控方案</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Hospital className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">全院级质控方案</h3>
                <p className="text-slate-600 mb-6">与HIS/EMR无缝对接，实时交互预警，全流程闭环管理</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">与HIS/EMR系统无缝对接</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">实时交互预警</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">全流程闭环管理</span>
                  </li>
                </ul>
                <div className="text-sm text-slate-500">适用：医务处/病案室/信息科</div>
              </CardContent>
            </Card>

            {/* Solution 2 */}
            <Card className="border-2 border-cyan-500 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-white px-4 py-1 text-sm font-medium">
                快速试用
              </div>
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">单科室版智控</h3>
                <p className="text-slate-600 mb-6">零门槛接入，2小时完成部署，即开即用</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">零门槛接入（无需接口）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">2小时完成部署</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">即开即用</span>
                  </li>
                </ul>
                <div className="text-sm text-slate-500">适用：临床科室主任/质控员</div>
              </CardContent>
            </Card>

            {/* Solution 3 */}
            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Workflow className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">事中+事后双重质控</h3>
                <p className="text-slate-600 mb-6">全流程覆盖，从书写到归档的每个环节</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">事中：医生工作站实时拦截</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">事后：出院前24-78小时触发</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">归档前最后一道防线</span>
                  </li>
                </ul>
                <div className="text-sm text-slate-500">全流程质控闭环</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Workflow Visualization */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI智能质控全流程</h2>
            <p className="text-xl text-slate-600">全自动化流程，无需人工干预，AI驱动每个环节</p>
          </div>
          


          {/* Workflow Steps Detail */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-2 border-blue-100 hover:border-blue-500 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">AI虚拟机自动抓取</h3>
                <p className="text-slate-600 text-sm mb-3">无需HIS/EMR接口对接，AI虚拟机自动采集病历数据</p>
                <div className="flex items-center gap-2 text-xs text-cyan-600 font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>零门槛接入</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-purple-100 hover:border-purple-500 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">AI自动跑质控规则</h3>
                <p className="text-slate-600 text-sm mb-3">AI引擎自动执行质控规则检查，智能识别缺陷</p>
                <div className="flex items-center gap-2 text-xs text-purple-600 font-medium">
                  <Brain className="w-4 h-4" />
                  <span>智能分析</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-cyan-100 hover:border-cyan-500 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">智能推送报告+修改意见</h3>
                <p className="text-slate-600 text-sm mb-3">AI生成修改建议，自动推送给医生，精准定位问题</p>
                <div className="flex items-center gap-2 text-xs text-cyan-600 font-medium">
                  <MessageSquare className="w-4 h-4" />
                  <span>AI修改建议</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-100 hover:border-green-500 transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">自动生成报表</h3>
                <p className="text-slate-600 text-sm mb-3">智能汇总分析数据，自动生成多维度质控报表</p>
                <div className="flex items-center gap-2 text-xs text-green-600 font-medium">
                  <BarChart3 className="w-4 h-4" />
                  <span>数据洞察</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Highlight */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8" />
              <h3 className="text-2xl font-bold">核心优势：AI全自动化</h3>
            </div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              从病历抓取到报表生成，全流程AI驱动，无需人工干预。AI虚拟机技术突破传统接口限制，2小时即可部署上线。
            </p>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI驱动的智能质控引擎</h2>
            <p className="text-xl text-slate-600">基于超脑松杉大模型，专为医疗质控场景优化</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/ai-brain-network.png" 
                alt="AI神经网络" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">自然语言配置规则</h3>
                  <p className="text-slate-600">用中文描述即可创建质控规则，无需代码，医生也能创建。配置效率提升5-10倍。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI自动生成修改意见</h3>
                  <p className="text-slate-600">不仅发现问题，还给出修改建议。颗粒度精准定位到字段级别，联动临床指南和规范。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">专科术语增强包</h3>
                  <p className="text-slate-600">内置肿瘤、骨科、心内等专科知识，减少专业性误报，贴合临床实际。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">持续学习与优化</h3>
                  <p className="text-slate-600">基于医生反馈自动优化模型，版本迭代与闭环学习，通过RLHF持续提升效果。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Foundation */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <Brain className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">超脑松杉大模型</h4>
              <p className="text-slate-600">专注医疗领域的AI大模型，深度理解医疗场景和专业术语</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
              <Settings className="w-10 h-10 text-cyan-600 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">规则+大模型协同引擎</h4>
              <p className="text-slate-600">传统规则与AI大模型双引擎结合，确保准确性和灵活性</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-6 border border-green-100">
              <FileCheck className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">国家级质控规则库</h4>
              <p className="text-slate-600">覆盖18项核心制度，国家/省市级评分标准包</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Capabilities Section */}
      <section id="capabilities" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">专业病历质控全链路能力</h2>
            <p className="text-xl text-slate-600">从规则配置到数据接入，从智能推送到闭环管理</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">质控规则库</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 国家/省市级评分标准包</li>
                  <li>• 18项核心制度覆盖</li>
                  <li>• 热门专科增强包</li>
                  <li>• 下载量100+</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-cyan-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">医生规则商城生态</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 医生创作规则</li>
                  <li>• 智能审核</li>
                  <li>• 商城上架全院复用</li>
                  <li>• 众创共享、严选认证</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Workflow className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">多元数据接入</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• HIS/EMR系统（API/中间库）</li>
                  <li>• 本地文件（Excel/PDF/Word）</li>
                  <li>• 灵活触发（在线/离线/文件）</li>
                  <li>• 全场景覆盖</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Bell className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-3">智能推送与通知</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 钉钉/企业微信</li>
                  <li>• 邮件通知</li>
                  <li>• PC端弹窗</li>
                  <li>• 消息送达率99.9%</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Data Section */}
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">真实落地效果</h2>
            <p className="text-xl text-slate-600">数据说话，用实际效果证明价值</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/data-dashboard.png" 
                alt="质控数据仪表盘" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">对比传统方式</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">质控覆盖率</span>
                    <div className="text-right">
                      <div className="text-sm text-slate-500">传统: 30%</div>
                      <div className="text-lg font-bold text-green-600">超脑: 100% ↑233%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">病历合格率</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">98%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">整改耗时</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">缩短50%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="text-slate-700 font-medium">缺陷复发率</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">降低30%</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">配置效率</span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">提升5-10倍</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">全流程闭环管理</h4>
                    <p className="text-slate-600">环节质控（事中）→ 终末质控（事后）→ 归档质控 → 统计报表 → 持续改进</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Trial Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">快速试用，即刻体验</h2>
            <p className="text-xl text-blue-100">三种方式，满足不同需求</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">云端体验平台</h3>
                <p className="text-blue-100 mb-6">3分钟开通账号，即刻体验功能，零风险</p>
                <div className="text-3xl font-bold mb-2">3分钟</div>
                <div className="text-sm text-blue-100">开通时间</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-slate-900 shadow-2xl scale-105">
              <CardContent className="p-8">
                <div className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                  推荐
                </div>
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <Hospital className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">科室级试用</h3>
                <p className="text-slate-600 mb-6">支持单科室先行先试，满意后全院推广</p>
                <div className="text-3xl font-bold text-cyan-600 mb-2">2小时</div>
                <div className="text-sm text-slate-600">部署时间</div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">全院级对接</h3>
                <p className="text-blue-100 mb-6">1-2周完成对接上线，专业实施团队，全程技术支持</p>
                <div className="text-3xl font-bold mb-2">1-2周</div>
                <div className="text-sm text-blue-100">对接周期</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/trial-application">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-12 py-6 h-auto">
                立即申请试用
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Record Generation Product */}
      <section id="generation-product" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                产品介绍
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">病历生成系统</h2>
              <p className="text-xl text-slate-600 mb-6">云诊精灵医生AI助手，自动采集医患对话并生成门诊和住院病历</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">智能语音识别</div>
                    <div className="text-slate-600 text-sm">实时采集医患对话，自动转化为结构化病历</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">一键回写HIS</div>
                    <div className="text-slate-600 text-sm">生成的病历一键回写至电子病历系统，无缝集成</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">多场景支持</div>
                    <div className="text-slate-600 text-sm">支持门诊、住院、查房等多种医疗场景</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Link href="/product/generation">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center hover:shadow-xl transition-all cursor-pointer">
                  <div className="text-center">
                    <Sparkles className="w-20 h-20 text-cyan-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-slate-900 mb-2">云诊精灵</div>
                    <div className="text-slate-600">AI病历生成助手</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section id="future" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">未来产品规划</h2>
            <p className="text-xl text-slate-600">持续创新，构建全面的医疗AI产品矩阵</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coding Robot */}
            <Card className="border-2 border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-500/10 to-transparent w-32 h-32"></div>
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  研发中
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">编码机器人</h3>
                <p className="text-slate-600 mb-6">
                  基于AI的智能编码助手，自动读取病历内容，智能推荐ICD编码和DRG分组，提升编码准确性和效率。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>智能ICD编码推荐</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>自动DRG分组</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>编码质控与审核</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Follow-up Management */}
            <Card className="border-2 border-slate-200 hover:border-cyan-500 hover:shadow-xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-cyan-500/10 to-transparent w-32 h-32"></div>
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  规划中
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">随访管理系统</h3>
                <p className="text-slate-600 mb-6">
                  AI驱动的患者随访管理平台，智能制定随访计划，自动提醒和跟踪，提升患者粘性和治疗效果。
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                    <span>智能随访计划生成</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                    <span>多渠道自动提醒</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                    <span>患者健康数据跟踪</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="font-medium">持续关注我们，更多创新产品即将推出</span>
            </div>
          </div>
        </div>
      </section>

      {/* About & Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">超脑松杉医疗</h2>
              <p className="text-lg text-slate-600 mb-8">
                专注AI大模型，专注医疗AI。为医疗机构提供全链路智能化升级服务，凭借深厚的技术沉淀与创新能力，已成功服务多家医院。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">已成功服务多家医院</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">全链路智能化升级服务</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">深厚的技术沉淀与创新能力</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">顶尖行业专家与技术团队</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">联系我们</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-slate-500 mb-1">总部地址</div>
                  <div className="text-slate-700">上海浦东新区御桥路1220弄3号1018室</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">分公司</div>
                  <div className="text-slate-700">北京 · 江苏 · 浙江 · 成都</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">联系电话</div>
                  <div className="text-slate-700 font-medium">18521362982</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">邮箱联系</div>
                  <div className="text-slate-700 font-medium">junfengwang@allianity.com</div>
                </div>
              </div>
              <Link href="/trial-application">
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                  申请试用
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">超脑AI质控</span>
              </div>
              <p className="text-sm text-slate-400">专注医疗AI大模型<br/>让质控更智能</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">产品服务</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#solutions" className="hover:text-white transition-colors">解决方案</a></li>
                <li><a href="#technology" className="hover:text-white transition-colors">AI技术</a></li>
                <li><a href="#capabilities" className="hover:text-white transition-colors">专业能力</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="hover:text-white transition-colors">联系我们</a></li>
                <li><a href="#results" className="hover:text-white transition-colors">落地效果</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">联系方式</h4>
              <ul className="space-y-2 text-sm">
                <li>电话: 18521362982</li>
                <li>邮箱: junfengwang@allianity.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2026 上海超脑松杉医疗科技有限公司 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
