export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin&vs_currencies=usd&include_24hr_change=true",
      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch market data" },
        { status: 502 }
      );
    }

    const data = await response.json();

    return Response.json({
      bitcoin: {
        price: data.bitcoin?.usd ?? null,
        change24h: data.bitcoin?.usd_24h_change ?? null,
      },
      ethereum: {
        price: data.ethereum?.usd ?? null,
        change24h: data.ethereum?.usd_24h_change ?? null,
      },
      solana: {
        price: data.solana?.usd ?? null,
        change24h: data.solana?.usd_24h_change ?? null,
      },
      bnb: {
        price: data.binancecoin?.usd ?? null,
        change24h: data.binancecoin?.usd_24h_change ?? null,
      },
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return Response.json(
      { error: "Market service unavailable" },
      { status: 500 }
    );
  }
        }
