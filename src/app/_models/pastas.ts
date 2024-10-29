export interface Bucket {
  nome: string;
  pastas: Pasta[];
  arquivos: Arquivo[];
}

export interface Pasta {
  nome: string;
  pastas: Pasta[];
  arquivos: Arquivo[];
}

export interface Arquivo {
  nome: string;
  criadoEm: string;
}

export const BUCKET_1: Bucket = {
  nome: "bucket-exemplo-1",
  pastas: [
    {
      nome: "pasta-exemplo-1",
      pastas: [
        {
          nome: "pasta-exemplo-1-2",
          pastas: [],
          arquivos: [
            {
              nome: "arquivo-exemplo-1-2-3",
              criadoEm: "16/10/2024"
            },
            {
              nome: "arquivo-exemplo-1-2-1",
              criadoEm: "16/10/2024"
            }
          ]
        },
      ],
      arquivos: [
        {
          nome: "arquivo-exemplo-1-1-1",
          criadoEm: "16/10/2024"
        },
        {
          nome: "arquivo-exemplo-1-1-2",
          criadoEm: "16/10/2024"
        },
        {
          nome: "arquivo-exemplo-1-1-3",
          criadoEm: "16/10/2024"
        },
        {
          nome: "arquivo-exemplo-1-1-4",
          criadoEm: "16/10/2024"
        }
      ]
    },
    {
      nome: "pasta-exemplo-3",
      pastas: [],
      arquivos: []
    }
  ],
  arquivos: []
}