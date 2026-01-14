import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { Brain, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";

export default function TrialApplication() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    hospitalName: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    department: "",
    position: "",
    productInterest: "qc" as "qc" | "generation" | "both",
    hospitalScale: "" as "" | "small" | "medium" | "large" | "extra_large",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const submitMutation = trpc.trialApplications.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("申请提交成功", {
        description: "我们会尽快与您联系",
      });
    },
    onError: (error) => {
      toast.error("提交失败", {
        description: error.message,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      ...formData,
      hospitalScale: formData.hospitalScale || undefined,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Navigation */}
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-900">超脑智能</div>
                    <div className="text-xs text-slate-600">专注医疗AI大模型</div>
                  </div>
                </div>
              </Link>
              <Button onClick={() => setLocation("/")} variant="outline">
                返回首页
              </Button>
            </div>
          </div>
        </nav>

        {/* Success Message */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">提交成功!</h1>
            <p className="text-xl text-slate-600 mb-8">
              感谢您的申请,我们的销售团队会在1个工作日内与您联系,为您安排产品演示和试用。
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setLocation("/")}>
                返回首页
              </Button>
              <Button size="lg" variant="outline" onClick={() => setSubmitted(false)}>
                提交另一个申请
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-900">超脑智能</div>
                  <div className="text-xs text-slate-600">专注医疗AI大模型</div>
                </div>
              </div>
            </Link>
            <Button onClick={() => setLocation("/")} variant="outline">
              返回首页
            </Button>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">申请试用</h1>
            <p className="text-xl text-slate-600">
              填写以下信息,我们会尽快与您联系安排产品演示和试用
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>基本信息</CardTitle>
              <CardDescription>请填写您的联系方式和医院信息</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hospital Name */}
                <div className="space-y-2">
                  <Label htmlFor="hospitalName">
                    医院名称 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="hospitalName"
                    required
                    value={formData.hospitalName}
                    onChange={(e) =>
                      setFormData({ ...formData, hospitalName: e.target.value })
                    }
                    placeholder="请输入医院全称"
                  />
                </div>

                {/* Contact Name */}
                <div className="space-y-2">
                  <Label htmlFor="contactName">
                    联系人姓名 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactName"
                    required
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                    placeholder="请输入您的姓名"
                  />
                </div>

                {/* Contact Phone */}
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">
                    联系电话 <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    required
                    value={formData.contactPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, contactPhone: e.target.value })
                    }
                    placeholder="请输入手机号码"
                  />
                </div>

                {/* Contact Email */}
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">邮箱地址</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, contactEmail: e.target.value })
                    }
                    placeholder="请输入邮箱地址(可选)"
                  />
                </div>

                {/* Department */}
                <div className="space-y-2">
                  <Label htmlFor="department">所在科室/部门</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    placeholder="例如:医务处、病案室、信息科"
                  />
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label htmlFor="position">职位</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    placeholder="例如:主任、科长、质控员"
                  />
                </div>

                {/* Product Interest */}
                <div className="space-y-2">
                  <Label htmlFor="productInterest">
                    感兴趣的产品 <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.productInterest}
                    onValueChange={(value: "qc" | "generation" | "both") =>
                      setFormData({ ...formData, productInterest: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="qc">病历质控系统</SelectItem>
                      <SelectItem value="generation">病历生成系统(云诊精灵)</SelectItem>
                      <SelectItem value="both">两者都感兴趣</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Hospital Scale */}
                <div className="space-y-2">
                  <Label htmlFor="hospitalScale">医院规模</Label>
                  <Select
                    value={formData.hospitalScale}
                    onValueChange={(value: "small" | "medium" | "large" | "extra_large") =>
                      setFormData({ ...formData, hospitalScale: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="请选择医院规模" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">小型医院(&lt;500床)</SelectItem>
                      <SelectItem value="medium">中型医院(500-1000床)</SelectItem>
                      <SelectItem value="large">大型医院(1000-2000床)</SelectItem>
                      <SelectItem value="extra_large">特大型医院(&gt;2000床)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="requirements">需求描述</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) =>
                      setFormData({ ...formData, requirements: e.target.value })
                    }
                    placeholder="请简要描述您的需求和期望(可选)"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        提交中...
                      </>
                    ) : (
                      "提交申请"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 text-center text-slate-600">
            <p className="mb-2">如有任何问题,欢迎直接联系我们:</p>
            <p className="font-medium">电话: 18521362982</p>
            <p className="font-medium">邮箱: junfengwang@allianity.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
