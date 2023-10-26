export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: {
          active: boolean;
          created_at: string;
          id: string;
          name: string;
          updated_at: string;
        };
        Insert: {
          active?: boolean;
          created_at?: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          active?: boolean;
          created_at?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      patients: {
        Row: {
          birthDate?: string;
          created_at?: string | null;
          email: string;
          gender?: string;
          id: string;
          name: string;
          updated_at?: string;
        };
        Insert: {
          birthDate: string;
          created_at?: string | null;
          email: string;
          gender: string;
          id?: string;
          name: string;
          updated_at?: string;
        };
        Update: {
          birthDate?: string;
          created_at?: string | null;
          email?: string;
          gender?: string;
          id?: string;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
