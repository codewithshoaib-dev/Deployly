import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const tabs = ["Overview", "Deploy Flow", "Features", "Pricing"];

const pricingPlans: [string, string, string[]][] = [
  ["Starter", "Free", ["1 project", "3 deploys/day"]],
  ["Pro", "$19/mo", ["Unlimited projects", "Custom domains"]],
  ["Team", "$99/mo", ["Team management", "Priority support"]],
];

export default function DemoModal({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState("Overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-2xl bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              How Deployly Works
            </h2>
            <p className="text-sm text-gray-500">
              Product walkthrough
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 pt-4 border-b border-gray-200">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Overview */}
          {activeTab === "Overview" && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Ship production-ready products without DevOps overhead
                </h3>
                <p className="mt-2 text-gray-600">
                  Deployly automates your entire deployment pipeline. From code
                  push to global distribution, so you can focus on building
                  features.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-700">
                  What this demo represents
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>• Automated CI/CD pipelines</li>
                  <li>• Global edge deployment</li>
                  <li>• Instant rollback safety</li>
                  <li>• Secure environment management</li>
                </ul>
              </div>
            </div>
          )}

          {/* Deploy Flow */}
          {activeTab === "Deploy Flow" && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                From push to production in seconds
              </h3>

              <div className="grid gap-4">
                {[
                  [
                    "Push your code",
                    "Connect your repo and push changes as usual.",
                  ],
                  [
                    "CI/CD runs automatically",
                    "Build, test, and optimize your app.",
                  ],
                  [
                    "Deploy globally",
                    "Your app is deployed across edge regions.",
                  ],
                  ["Rollback anytime", "Revert instantly with zero downtime."],
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-lg border border-gray-200 p-4 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-medium">
                      {i + 1}
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">{step[0]}</p>
                      <p className="text-sm text-gray-600 mt-1">{step[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "Features" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["1-Click Rollbacks", "Instantly revert deployments"],
                ["Global Edge Network", "Fast performance worldwide"],
                ["Secrets & Access", "Secure environment management"],
                ["Audit Logs", "Track every deployment event"],
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow"
                >
                  <p className="font-medium text-gray-900">{f[0]}</p>
                  <p className="text-sm text-gray-600 mt-1">{f[1]}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pricing */}
          {activeTab === "Pricing" && (
            <div className="grid gap-4 sm:grid-cols-3">
              {pricingPlans.map((plan, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 p-5 flex flex-col justify-between"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{plan[0]}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {plan[1]}
                    </p>

                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      {plan[2].map((feat, j) => (
                        <li key={j}>• {feat}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 text-sm text-gray-500">
          UI demo only. Full architecture available on request.
        </div>
      </div>
    </div>
  );
}
