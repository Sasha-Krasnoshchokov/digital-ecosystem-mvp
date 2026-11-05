export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          username: string;
          password: string;
          is_admin: boolean;
          is_blocked: boolean;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          email: string;
          username: string;
          password: string;
          is_admin?: boolean;
          is_blocked?: boolean;
          created_at?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      is_blocked_user: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};
