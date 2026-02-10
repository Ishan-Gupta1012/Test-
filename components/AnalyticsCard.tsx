"use client";

import { LucideIcon } from "lucide-react";

interface AnalyticsCardProps {
    icon: LucideIcon;
    label: string;
    value: string | number;
    subtitle?: string;
}

export default function AnalyticsCard({
    icon: Icon,
    label,
    value,
    subtitle,
}: AnalyticsCardProps) {
    return (
        <div
            className="rounded-xl p-6 transition-all duration-300"
            style={{
                background: '#1a1a2e',
                border: '1px solid #2d2d44'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2d2d44';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-lg" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                    <Icon className="text-purple-400" size={24} />
                </div>

                {/* Content */}
                <div className="flex-1">
                    <p className="text-sm font-medium mb-1" style={{ color: '#94a3b8' }}>{label}</p>
                    <p className="text-2xl font-bold" style={{ color: '#e4e4e7' }}>{value}</p>
                    {subtitle && (
                        <p className="text-xs mt-1" style={{ color: '#64748b' }}>{subtitle}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
