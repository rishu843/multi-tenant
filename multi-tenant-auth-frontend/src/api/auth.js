// Replace with your real backend API calls

export async function fakeLogin({ email,  }) {
  // simulate backend response
  if (email === "super@admin.com") {
    return {
      token: btoa(
        JSON.stringify({ role: "superadmin", tenant: "all", email })
      ) + ".fake.signature",
    };
  }
  if (email === "admin@tenant.com") {
    return {
      token: btoa(
        JSON.stringify({ role: "admin", tenant: "TenantA", email })
      ) + ".fake.signature",
    };
  }
  return {
    token: btoa(
      JSON.stringify({ role: "user", tenant: "TenantA", email })
    ) + ".fake.signature",
  };
}

export async function fakeSignup({ email, password, tenant }) {
  return { success: true, email, tenant,password };
}
