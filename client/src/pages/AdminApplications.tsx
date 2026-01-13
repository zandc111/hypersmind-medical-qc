import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { Brain, Loader2, Eye } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

type TrialApplication = {
  id: number;
  hospitalName: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string | null;
  department: string | null;
  position: string | null;
  productInterest: "qc" | "generation" | "both";
  hospitalScale: "small" | "medium" | "large" | "extra_large" | null;
  requirements: string | null;
  status: "pending" | "contacted" | "demo_scheduled" | "converted" | "rejected";
  notes: string | null;
  createdAt: Date;
  updatedAt: Date;
};

const statusLabels = {
  pending: "待处理",
  contacted: "已联系",
  demo_scheduled: "已安排演示",
  converted: "已转化",
  rejected: "已拒绝",
};

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  contacted: "bg-blue-100 text-blue-800",
  demo_scheduled: "bg-purple-100 text-purple-800",
  converted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const productLabels = {
  qc: "病历质控",
  generation: "病历生成",
  both: "两者都感兴趣",
};

const scaleLabels = {
  small: "小型医院(<500床)",
  medium: "中型医院(500-1000床)",
  large: "大型医院(1000-2000床)",
  extra_large: "特大型医院(>2000床)",
};

export default function AdminApplications() {
  const { user, loading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedApp, setSelectedApp] = useState<TrialApplication | null>(null);
  const [detailDialogOpen, setDetailDialogOpen] = useState(false);
  const [statusUpdateNotes, setStatusUpdateNotes] = useState("");

  const { data: applications, isLoading, refetch } = trpc.trialApplications.list.useQuery();

  const updateStatusMutation = trpc.trialApplications.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("状态更新成功");
      refetch();
      setStatusUpdateNotes("");
    },
    onError: (error) => {
      toast.error("更新失败", {
        description: error.message,
      });
    },
  });

  const handleStatusUpdate = (
    id: number,
    status: "pending" | "contacted" | "demo_scheduled" | "converted" | "rejected"
  ) => {
    updateStatusMutation.mutate({
      id,
      status,
      notes: statusUpdateNotes || undefined,
    });
  };

  const handleViewDetails = (app: TrialApplication) => {
    setSelectedApp(app);
    setDetailDialogOpen(true);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>权限不足</CardTitle>
            <CardDescription>只有管理员可以访问此页面</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setLocation("/")}>返回首页</Button>
          </CardContent>
        </Card>
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
                  <div className="font-bold text-lg text-slate-900">超脑AI质控</div>
                  <div className="text-xs text-slate-600">管理后台</div>
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">欢迎, {user.name || user.email}</span>
              <Button onClick={() => setLocation("/")} variant="outline">
                返回首页
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">试用申请管理</h1>
          <p className="text-lg text-slate-600">
            共 {applications?.length || 0} 条申请记录
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>申请列表</CardTitle>
            <CardDescription>查看和管理所有试用申请</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              </div>
            ) : applications && applications.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>医院名称</TableHead>
                      <TableHead>联系人</TableHead>
                      <TableHead>电话</TableHead>
                      <TableHead>产品</TableHead>
                      <TableHead>状态</TableHead>
                      <TableHead>申请时间</TableHead>
                      <TableHead>操作</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.hospitalName}</TableCell>
                        <TableCell>{app.contactName}</TableCell>
                        <TableCell>{app.contactPhone}</TableCell>
                        <TableCell>{productLabels[app.productInterest]}</TableCell>
                        <TableCell>
                          <Badge className={statusColors[app.status]}>
                            {statusLabels[app.status]}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {format(new Date(app.createdAt), "yyyy-MM-dd HH:mm", {
                            locale: zhCN,
                          })}
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleViewDetails(app)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            查看
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500">暂无申请记录</div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Detail Dialog */}
      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>申请详情</DialogTitle>
            <DialogDescription>查看和更新申请状态</DialogDescription>
          </DialogHeader>

          {selectedApp && (
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-slate-500">医院名称</Label>
                  <p className="font-medium">{selectedApp.hospitalName}</p>
                </div>
                <div>
                  <Label className="text-slate-500">联系人</Label>
                  <p className="font-medium">{selectedApp.contactName}</p>
                </div>
                <div>
                  <Label className="text-slate-500">联系电话</Label>
                  <p className="font-medium">{selectedApp.contactPhone}</p>
                </div>
                <div>
                  <Label className="text-slate-500">邮箱</Label>
                  <p className="font-medium">{selectedApp.contactEmail || "-"}</p>
                </div>
                <div>
                  <Label className="text-slate-500">科室/部门</Label>
                  <p className="font-medium">{selectedApp.department || "-"}</p>
                </div>
                <div>
                  <Label className="text-slate-500">职位</Label>
                  <p className="font-medium">{selectedApp.position || "-"}</p>
                </div>
                <div>
                  <Label className="text-slate-500">感兴趣的产品</Label>
                  <p className="font-medium">{productLabels[selectedApp.productInterest]}</p>
                </div>
                <div>
                  <Label className="text-slate-500">医院规模</Label>
                  <p className="font-medium">
                    {selectedApp.hospitalScale ? scaleLabels[selectedApp.hospitalScale] : "-"}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              {selectedApp.requirements && (
                <div>
                  <Label className="text-slate-500">需求描述</Label>
                  <p className="mt-1 text-sm text-slate-700 whitespace-pre-wrap">
                    {selectedApp.requirements}
                  </p>
                </div>
              )}

              {/* Current Status */}
              <div>
                <Label className="text-slate-500">当前状态</Label>
                <div className="mt-1">
                  <Badge className={statusColors[selectedApp.status]}>
                    {statusLabels[selectedApp.status]}
                  </Badge>
                </div>
              </div>

              {/* Notes */}
              {selectedApp.notes && (
                <div>
                  <Label className="text-slate-500">备注</Label>
                  <p className="mt-1 text-sm text-slate-700 whitespace-pre-wrap">
                    {selectedApp.notes}
                  </p>
                </div>
              )}

              {/* Timestamps */}
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-500">
                <div>
                  <Label className="text-slate-500">申请时间</Label>
                  <p>
                    {format(new Date(selectedApp.createdAt), "yyyy-MM-dd HH:mm:ss", {
                      locale: zhCN,
                    })}
                  </p>
                </div>
                <div>
                  <Label className="text-slate-500">更新时间</Label>
                  <p>
                    {format(new Date(selectedApp.updatedAt), "yyyy-MM-dd HH:mm:ss", {
                      locale: zhCN,
                    })}
                  </p>
                </div>
              </div>

              {/* Update Status */}
              <div className="border-t pt-6 space-y-4">
                <Label>更新状态</Label>
                <Select
                  value={selectedApp.status}
                  onValueChange={(value) =>
                    handleStatusUpdate(
                      selectedApp.id,
                      value as "pending" | "contacted" | "demo_scheduled" | "converted" | "rejected"
                    )
                  }
                  disabled={updateStatusMutation.isPending}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">待处理</SelectItem>
                    <SelectItem value="contacted">已联系</SelectItem>
                    <SelectItem value="demo_scheduled">已安排演示</SelectItem>
                    <SelectItem value="converted">已转化</SelectItem>
                    <SelectItem value="rejected">已拒绝</SelectItem>
                  </SelectContent>
                </Select>

                <div>
                  <Label htmlFor="notes">备注(可选)</Label>
                  <Textarea
                    id="notes"
                    value={statusUpdateNotes}
                    onChange={(e) => setStatusUpdateNotes(e.target.value)}
                    placeholder="添加备注信息..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
