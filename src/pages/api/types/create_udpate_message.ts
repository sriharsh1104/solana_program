export type TesterWorld = {
  version: "0.1.0";
  name: "solana_hello_world";
  instructions: [
    {
      name: "createMessage";
      accounts: [
        {
          name: "message";
          isMut: true;
          isSigner: true;
        },
        {
          name: "author";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "content";
          type: "string";
        }
      ];
    },
    {
      name: "updateMessage";
      accounts: [
        {
          name: "message";
          isMut: true;
          isSigner: false;
        },
        {
          name: "author";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "content";
          type: "string";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "message";
      type: {
        kind: "struct";
        fields: [
          {
            name: "author";
            type: "publicKey";
          },
          {
            name: "timestamp";
            type: "i64";
          },
          {
            name: "content";
            type: "string";
          }
        ];
      };
    }
  ];
  metadata: {
    address: "5kN42v3GPG6YCrAwZXUUCARmp4BoiFa2LCTSn8zzpRWX";
  };
};

// {

export const IDL: TesterWorld = {
  version: "0.1.0",
  name: "solana_hello_world",
  instructions: [
    {
      name: "createMessage",
      accounts: [
        {
          name: "message",
          isMut: true,
          isSigner: true,
        },
        {
          name: "author",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "content",
          type: "string",
        },
      ],
    },
    {
      name: "updateMessage",
      accounts: [
        {
          name: "message",
          isMut: true,
          isSigner: false,
        },
        {
          name: "author",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "content",
          type: "string",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "message",
      type: {
        kind: "struct",
        fields: [
          {
            name: "author",
            type: "publicKey",
          },
          {
            name: "timestamp",
            type: "i64",
          },
          {
            name: "content",
            type: "string",
          },
        ],
      },
    },
  ],
  metadata: {
    address: "5kN42v3GPG6YCrAwZXUUCARmp4BoiFa2LCTSn8zzpRWX",
  },
};
