import { NextResponse } from "next/server";

export function proxy(request) {
  console.log("Middleware is running on:", request.nextUrl.href);

  let url = request.nextUrl;

  // Decode URL parameters
  let decodedSearch = decodeURIComponent(url.search);

  // Check if decoded URL contains "ignorenitro"
  if (decodedSearch.includes("ignorenitro")) {
    url.search = ""; // Remove all query parameters (clean the URL)

    return NextResponse.redirect(url); // Redirect to the clean URL
  }

  return NextResponse.next(); // Continue normally if no changes
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
