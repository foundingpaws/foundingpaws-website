'use client';

import { useState, useEffect } from 'react';
import { generateLaunchReport, getLaunchReadiness, getCriticalTasks, getOverdueTasks } from '@/lib/launch-checklist';
import { getBackupReport, getBackupStatus } from '@/lib/backup-manager';
import FadeIn from './FadeIn';
import Transform3D from './Transform3D';

interface LaunchDashboardProps {
  isVisible: boolean;
  onClose?: () => void;
}

export default function LaunchDashboard({ isVisible, onClose }: LaunchDashboardProps) {
  const [report, setReport] = useState<any>(null);
  const [readiness, setReadiness] = useState<any>(null);
  const [criticalTasks, setCriticalTasks] = useState<any[]>([]);
  const [overdueTasks, setOverdueTasks] = useState<any[]>([]);
  const [backupReport, setBackupReport] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isVisible) {
      loadData();
    }
  }, [isVisible]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [launchReport, launchReadiness, critical, overdue, backup] = await Promise.all([
        generateLaunchReport(),
        getLaunchReadiness(),
        getCriticalTasks(),
        getOverdueTasks(),
        getBackupReport(),
      ]);

      setReport(launchReport);
      setReadiness(launchReadiness);
      setCriticalTasks(critical);
      setOverdueTasks(overdue);
      setBackupReport(backup);
    } catch (error) {
      console.error('Error loading launch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'overdue': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getReadinessColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <FadeIn>
          <Transform3D hoverEffect="lift" className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green to-copper p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-cream">Launch Dashboard</h2>
                  <p className="text-cream/80 mt-1">Founding Paws Go-Live Plan</p>
                </div>
                <button
                  onClick={onClose || (() => {})}
                  className="text-cream/80 hover:text-cream text-2xl transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {isLoading ? (
              <div className="p-8 text-center">
                <div className="animate-spin w-8 h-8 border-2 border-green border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-600">Loading launch data...</p>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {/* Launch Readiness */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Launch Readiness</h3>
                    <div className={`text-3xl font-bold ${getReadinessColor(readiness?.score || 0)}`}>
                      {readiness?.score || 0}%
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{report?.completedTasks || 0}</div>
                      <div className="text-sm text-gray-600">Completed Tasks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{criticalTasks.length}</div>
                      <div className="text-sm text-gray-600">Critical Issues</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{overdueTasks.length}</div>
                      <div className="text-sm text-gray-600">Overdue Tasks</div>
                    </div>
                  </div>

                  {readiness?.issues && readiness.issues.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-700 mb-2">Issues to Address:</h4>
                      <ul className="space-y-1">
                        {readiness.issues.map((issue: string, index: number) => (
                          <li key={index} className="text-sm text-red-600 flex items-center gap-2">
                            <span>⚠️</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Critical Tasks */}
                {criticalTasks.length > 0 && (
                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Critical Tasks</h3>
                    <div className="space-y-3">
                      {criticalTasks.slice(0, 5).map((task, index) => (
                        <div key={task.id} className="flex items-center justify-between p-3 bg-white rounded border border-red-200">
                          <div className="flex-1">
                            <div className="font-medium text-gray-800">{task.title}</div>
                            <div className="text-sm text-gray-600">{task.description}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              {task.assignedTo} • Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs ${getStatusColor(task.status)}`}>
                              {task.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Overdue Tasks */}
                {overdueTasks.length > 0 && (
                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Overdue Tasks</h3>
                    <div className="space-y-3">
                      {overdueTasks.slice(0, 5).map((task, index) => (
                        <div key={task.id} className="flex items-center justify-between p-3 bg-white rounded border border-orange-200">
                          <div className="flex-1">
                            <div className="font-medium text-gray-800">{task.title}</div>
                            <div className="text-sm text-gray-600">{task.description}</div>
                            <div className="text-xs text-red-600 mt-1">
                              Overdue since: {new Date(task.dueDate).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                            <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-600">
                              overdue
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Backup Status */}
                {backupReport && (
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Backup Status</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{backupReport.totalItems}</div>
                        <div className="text-sm text-gray-600">Total Backups</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{backupReport.successfulBackups}</div>
                        <div className="text-sm text-gray-600">Successful</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">{backupReport.failedBackups}</div>
                        <div className="text-sm text-gray-600">Failed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">
                          {Math.round(backupReport.totalSize / 1024 / 1024)}MB
                        </div>
                        <div className="text-sm text-gray-600">Total Size</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Launch Phases */}
                {report?.phases && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Launch Phases</h3>
                    <div className="space-y-4">
                      {report.phases.map((phase: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded border">
                          <div className="flex-1">
                            <div className="font-medium text-gray-800">{phase.phase}</div>
                            <div className="text-sm text-gray-600">
                              {phase.tasks.length} tasks • 
                              {new Date(phase.startDate).toLocaleDateString()} - {new Date(phase.endDate).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 rounded text-sm ${getStatusColor(phase.status)}`}>
                              {phase.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    onClick={loadData}
                    disabled={isLoading}
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 disabled:opacity-50"
                  >
                    {isLoading ? 'Loading...' : 'Refresh Data'}
                  </button>
                  <button
                    onClick={() => {
                      const data = {
                        report,
                        readiness,
                        criticalTasks,
                        overdueTasks,
                        backupReport,
                        timestamp: new Date().toISOString(),
                      };
                      console.log('Launch Dashboard Data:', data);
                      alert('Data logged to console');
                    }}
                    className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
                  >
                    Export Data
                  </button>
                </div>
              </div>
            )}
          </Transform3D>
        </FadeIn>
      </div>
    </div>
  );
}
