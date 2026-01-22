/**
 * Medical Record Generation Product Detail Page - 云诊精灵
 * Design Philosophy: Neo-Medical
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  CheckCircle2, 
  Sparkles,
  Mic,
  FileText,
  Clock,
  TrendingUp,
  Shield,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  Download,
  Play,
  Award,
  Zap,
  Users,
  Hospital,
  Camera,
  AlertTriangle,
  BarChart3,
  Settings,
  FileCheck,
  Stethoscope,
  Clipboard
} from "lucide-react";
import { Link } from "wouter";

export default function GenerationProduct() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-900">云诊精灵</div>
                  <div className="text-xs text-slate-600">AI医生助手</div>
                </div>
              </a>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/">
                <a className="text-slate-600 hover:text-slate-900 transition-colors">返回首页</a>
              </Link>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                申请试用
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI病历生成系统
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              云诊精灵医生AI助手
            </h1>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              基于超脑医疗大模型的智能病历生成系统<br/>
              自动采集医患对话,实时生成结构化病历,让医生专注于诊疗
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 text-lg px-8">
                立即体验
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8" onClick={() => setShowVideo(true)}>
                <Play className="w-5 h-5 mr-2" />
                观看演示
              </Button>
            </div>

            <Dialog open={showVideo} onOpenChange={setShowVideo}>
              <DialogContent className="sm:max-w-[90vw] max-w-[95vw]">
                <div className="m-2">
                  <video 
                    src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/%E8%B6%85%E8%84%91%E6%9D%BE%E6%9D%89AI%E7%97%85%E5%8E%86%E8%B4%A8%E6%8E%A7%E7%B3%BB%E7%BB%9F%E6%BC%94%E7%A4%BAV1.7.mp4" 
                    controls 
                    autoPlay 
                    className="w-full h-auto rounded-lg"
                    style={{ maxHeight: '80vh' }}
                  />
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">2-3秒</div>
              <div className="text-slate-600">生成电子病历</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-slate-600">节省病历书写时间</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-slate-600">符合率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">1.5倍</div>
              <div className="text-slate-600">患者服务数量提升</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">产品概览</h2>
            <p className="text-xl text-slate-600">AI驱动的智能病历生成解决方案</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/voice-recording-medical.png" 
                alt="云诊精灵AI助手" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">为什么选择云诊精灵?</h3>
                <p className="text-slate-600 leading-relaxed">
                  传统病历书写耗费医生大量时间,影响诊疗效率和患者体验。云诊精灵基于超脑医疗大模型,通过语音识别和自然语言处理技术,实时将医患对话转化为结构化病历,让医生从繁重的文书工作中解放出来,专注于诊疗本身。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-50 rounded-xl p-4">
                  <Mic className="w-8 h-8 text-cyan-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">语音录入</div>
                  <div className="text-sm text-slate-600">自然对话即可生成</div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <Zap className="w-8 h-8 text-green-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">实时生成</div>
                  <div className="text-sm text-slate-600">2-3秒完成病历</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <Brain className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">AI理解</div>
                  <div className="text-sm text-slate-600">医学术语精准识别</div>
                </div>
                <div className="bg-purple-50 rounded-xl p-4">
                  <FileCheck className="w-8 h-8 text-purple-600 mb-2" />
                  <div className="font-bold text-slate-900 mb-1">一键回写</div>
                  <div className="text-sm text-slate-600">无缝集成HIS系统</div>
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
            <p className="text-xl text-slate-600">覆盖门诊、查房、手术等多种医疗场景</p>
          </div>

          <Tabs defaultValue="consultation" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="consultation">AI诊间问诊</TabsTrigger>
              <TabsTrigger value="ward">AI病程记录</TabsTrigger>
              <TabsTrigger value="surgery">AI手术记录</TabsTrigger>
              <TabsTrigger value="summary">AI阶段小结</TabsTrigger>
              <TabsTrigger value="discharge">AI出院小结</TabsTrigger>
            </TabsList>

            <TabsContent value="consultation" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">AI诊间问诊</h3>
                      <p className="text-slate-600 mb-6">
                        通过一体化终端设备,实时采集医患对话,AI自动生成结构化门诊病历,包括主诉、现病史、既往史、体格检查、诊断信息等。
                      </p>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mic className="w-5 h-5 text-cyan-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">语音实时录入</div>
                            <div className="text-sm text-slate-600">支持方言、补录音,自动转换为文字</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Brain className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">智能推荐诊疗意见</div>
                            <div className="text-sm text-slate-600">辅助检查、用药建议、注意事项、复诊计划</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">AI风险提醒</div>
                            <div className="text-sm text-slate-600">问诊过程中对风险和遗漏进行提醒</div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileCheck className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">一键回写HIS</div>
                            <div className="text-sm text-slate-600">生成的病历直接纳入电子病历系统</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://chaonao-aiwork.oss-cn-shanghai.aliyuncs.com/songshan/gw_images/ai-medical-assistant.png" 
                        alt="AI诊间问诊" 
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ward" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">AI病程记录</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="bg-cyan-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Stethoscope className="w-6 h-6 text-cyan-600" />
                          <h4 className="font-bold text-slate-900">查房记录生成</h4>
                        </div>
                        <p className="text-slate-600 text-sm mb-3">
                          设备绑定病床号,一键开启录音,对整个查房过程进行录音。将对话录音转换成符合要求的病历信息。
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>首次病程录</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>查房记录</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>阶段小结</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <BarChart3 className="w-6 h-6 text-green-600" />
                          <h4 className="font-bold text-slate-900">智能分析推送</h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          智能分析检查检验异常数值,并推送医生。医生可以将对应病床已生成的病历复制导入。
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-100 to-green-100 rounded-2xl p-8 flex items-center justify-center">
                      <div className="text-center">
                        <Clipboard className="w-20 h-20 text-cyan-600 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-slate-900 mb-2">AI病程记录</div>
                        <div className="text-slate-600">智能查房助手</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="surgery" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">AI手术记录</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-cyan-50 border-cyan-200">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">术前谈话</h4>
                        <p className="text-slate-600 text-sm mb-4">
                          术前谈话阶段,系统启动实时语音记录功能,捕捉医生与患者的对话内容。医生通常会进行病史回顾、手术风险告知、麻醉方案讨论及手术过程简述。
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                            <span>自动转化为结构化文字记录</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                            <span>标注关键术语(术式名称、解剖部位)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></div>
                            <span>直接纳入电子病历系统</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-bold text-slate-900 mb-3">手术小结</h4>
                        <p className="text-slate-600 text-sm mb-4">
                          手术完成后,系统启动术后小结记录功能,通过音频采集设备记录医生对手术过程的详细描述。医生可在术后第一时间描述手术步骤。
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                            <span>切口部位、器械使用</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                            <span>解剖结构处理、出血量与止血措施</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                            <span>生成带有时间戳和步骤标记的记录</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold text-slate-900 text-sm">精确度提升</div>
                      <div className="text-xs text-slate-600 mt-1">确保记录内容精确完整</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-semibold text-slate-900 text-sm">时间效率</div>
                      <div className="text-xs text-slate-600 mt-1">大幅减少手动记录时间</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-4 text-center">
                      <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                      <div className="font-semibold text-slate-900 text-sm">数据安全</div>
                      <div className="text-xs text-slate-600 mt-1">符合医疗信息安全标准</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="summary" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">AI阶段小结</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <p className="text-slate-600 leading-relaxed">
                        利用AI自动生成阶段小结,通过自动提取查房记录内容,确保信息的准确性和完整性。阶段小结可随查房记录更新,为医生提供患者的最新病情总结。
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-cyan-50 rounded-xl p-4">
                          <Clock className="w-8 h-8 text-cyan-600 mb-2" />
                          <div className="font-bold text-slate-900 mb-1">节省时间</div>
                          <div className="text-sm text-slate-600">减少医生手动记录时间</div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4">
                          <CheckCircle2 className="w-8 h-8 text-green-600 mb-2" />
                          <div className="font-bold text-slate-900 mb-1">提高准确性</div>
                          <div className="text-sm text-slate-600">自动提取确保完整性</div>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-4">
                          <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                          <div className="font-bold text-slate-900 mb-1">实时更新</div>
                          <div className="text-sm text-slate-600">随查房记录同步更新</div>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                          <Settings className="w-8 h-8 text-purple-600 mb-2" />
                          <div className="font-bold text-slate-900 mb-1">个性化调节</div>
                          <div className="text-sm text-slate-600">支持不同专科需求</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
                      <div className="text-center">
                        <FileText className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                        <div className="text-2xl font-bold text-slate-900 mb-2">AI阶段小结</div>
                        <div className="text-slate-600">智能病情总结</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discharge" className="space-y-8">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">AI出院小结</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-cyan-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <FileText className="w-6 h-6 text-cyan-600" />
                          <h4 className="font-bold text-slate-900">出院信息自动汇总</h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          系统自动提取住院期间的关键医疗数据(如诊断、治疗、检查结果等),汇总为出院小结,帮助医生快速生成出院报告,减轻手动整理的负担。
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <MessageSquare className="w-6 h-6 text-green-600" />
                          <h4 className="font-bold text-slate-900">规范化的出院指导</h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          出院小结包含规范化的患者出院指导建议(如复查时间、用药方案、患者计划等),确保患者出院后的医嘱清晰准确,减少医嘱遗漏,提升患者的依从性。
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Zap className="w-6 h-6 text-blue-600" />
                          <h4 className="font-bold text-slate-900">减少重复输入</h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          系统可以根据住院期间记录的数据,无需医生重复输入或手动摘抄,直接生成出院小结,优化信息传递的效率,降低工作强度。
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <FileCheck className="w-6 h-6 text-purple-600" />
                          <h4 className="font-bold text-slate-900">病历归档与随访准备</h4>
                        </div>
                        <p className="text-slate-600 text-sm">
                          出院小结可以自动归档至电子病历系统,便于后续医生或随访团队查阅患者的住院信息,支持未来的复查或随访工作,为患者的长期健康管理打下基础。
                        </p>
                      </div>
                      <div className="bg-slate-100 rounded-xl p-6">
                        <h4 className="font-bold text-slate-900 mb-3">核心价值</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>节省医生时间,提高工作效率</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>确保出院指导的准确性和完整性</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>支持病历归档和随访管理</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Generation Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">三大病历生成方式</h2>
            <p className="text-xl text-slate-600">灵活多样,满足不同场景需求</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-cyan-500 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <Mic className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">自然语音录入与关键词抓取</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  支持医患通过自然语音录入,自动抓取核心关键词,精准提炼病历内容,减少手动记录负担。确保病历格式的统一和规范。
                </p>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-cyan-900 mb-2">适用场景</div>
                  <div className="text-xs text-cyan-700">门诊问诊、查房记录、术前谈话</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">历史病历生成</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  基于AI分析快速生成结构化病历,包括症状、诊断和建议,提升病历编写效率。系统可以根据患者信息、疾病等信息智能提示漏项、不合规项目。
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-green-900 mb-2">适用场景</div>
                  <div className="text-xs text-green-700">复诊患者、慢病管理、随访记录</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Camera className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">检查报告智能分析</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  拍照上传检查报告后,AI自动识别异常项并解读内容,为医生提供分析支持。对患者的病情进行风险评估,提醒医生注意潜在的并发症。
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-blue-900 mb-2">支持格式</div>
                  <div className="text-xs text-blue-700">CT、X光、B超、MRI、心电图、胃镜、肠镜、骨密度等</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialty Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">专科病历个性化</h2>
            <p className="text-xl text-slate-600">深度理解不同专科的特殊需求</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">理解复杂医学术语</h3>
                <p className="text-slate-600 text-sm">
                  系统准确解析和理解专科医学专业术语,以确保病历内容的准确性和专业性。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Hospital className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">适应不同专科特点</h3>
                <p className="text-slate-600 text-sm">
                  不同专科如内科、外科、眼科、口腔科等有其特定的病历格式和术语,系统支持不同专科的模版配置。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">智能风险预警</h3>
                <p className="text-slate-600 text-sm">
                  医疗安全预警、电子病历强制报告、传染病预警(检测异常病例、聚集性病例等)。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">应用效果</h2>
            <p className="text-xl text-slate-600">真实数据验证,显著提升医疗效率</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">提高工作效率</h3>
                <p className="text-slate-600 text-sm mb-4">
                  系统能够自动生成病历,大大减少了医生的工作量,提高了工作效率。
                </p>
                <div className="text-3xl font-bold text-cyan-600">75%</div>
                <div className="text-sm text-slate-600">节省病历书写时间</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">患者等待时间</h3>
                <p className="text-slate-600 text-sm mb-4">
                  系统提升了医生的就诊效率,可以让患者减少排队时间,更好的就医体验。
                </p>
                <div className="text-3xl font-bold text-green-600">40%</div>
                <div className="text-sm text-slate-600">病历质量提升</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">医院接诊量</h3>
                <p className="text-slate-600 text-sm mb-4">
                  系统可以帮助医院完成更多的日接诊量,更好的解决患者就医难、预约难的问题。
                </p>
                <div className="text-3xl font-bold text-blue-600">1.5倍</div>
                <div className="text-sm text-slate-600">患者服务数量提升</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">立即体验云诊精灵</h2>
            <p className="text-xl text-cyan-100 mb-12">
              让AI助手帮助医生从繁重的文书工作中解放出来,专注于诊疗本身
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50 text-lg px-12">
                申请试用
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-12">
                联系我们
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-lg mb-2">产品状态说明</div>
                  <p className="text-cyan-100">
                    云诊精灵当前版本持续优化中,我们正在不断改进语音识别准确率、专科术语理解能力和系统稳定性。短期内不会作为主推产品,但欢迎您申请试用体验最新功能,您的反馈将帮助我们打造更好的产品。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">云诊精灵</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">AI医生助手 · 让病历书写更智能</p>
            <div className="flex justify-center gap-6 text-sm mb-6">
              <Link href="/"><a className="hover:text-white transition-colors">返回首页</a></Link>
              <a href="#" className="hover:text-white transition-colors">产品文档</a>
              <a href="#" className="hover:text-white transition-colors">使用指南</a>
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
