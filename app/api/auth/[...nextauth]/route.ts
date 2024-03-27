import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Remova a exportação de authOptions
const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  // Adicione outras opções de autenticação conforme necessário
};

// Exporte o manipulador da rota
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
