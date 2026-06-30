

import { apiClient } from "@/lib/axios/instance";

export async function fetchBranchList() {
  try {
    const { data } = await apiClient.get("/api/branches");
    const list = data?.data?.list || data?.list || [];

    // Validate shape — accept only objects with an id and branch_name
    return list.filter(
      (b) => b && (b.id !== undefined) && typeof b.branch_name === "string"
    );
  } catch {
    // Log a non-sensitive failure notice; return empty array as a safe fallback
    if (process.env.NODE_ENV !== "production") {
      console.warn("[fetchBranchList] Failed to load branches");
    }
    return [];
  }
}
