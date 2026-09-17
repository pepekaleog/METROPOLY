export async function POST(request) {
  try {
    const body = await request.json();

    const { phone, amount, operator } = body;

    if (!phone || !amount || !operator) {
      return Response.json(
        {
          success: false,
          error: "Phone, amount and operator are required",
        },
        { status: 400 }
      );
    }

    if (Number(amount) < 100) {
      return Response.json(
        {
          success: false,
          error: "Minimum deposit is 100 TZS",
        },
        { status: 400 }
      );
    }

    /*
      SANDBOX ONLY

      We are not moving real money yet.
      The real provider API key will be added later
      through environment variables.
    */

    return Response.json({
      success: true,
      mode: "sandbox",
      status: "pending",
      message: "Deposit request created in sandbox mode",
      transaction: {
        id: crypto.randomUUID(),
        phone,
        amount: Number(amount),
        operator,
        currency: "TZS",
        status: "pending",
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Invalid deposit request",
      },
      { status: 400 }
    );
  }
        }
