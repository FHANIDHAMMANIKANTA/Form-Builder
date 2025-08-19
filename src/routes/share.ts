import { Router } from 'express';
import { prisma } from '../index.js';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

// Generate shareable link
router.post('/forms/:id/share', async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // Check if form exists
    const form = await prisma.form.findUnique({
      where: { id }
    });
    
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    
    // Generate unique share token
    const shareToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    // Update form with share token
    const updatedForm = await prisma.form.update({
      where: { id },
      data: { shareToken }
    });
    
    res.json({
      shareUrl: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FRONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FRONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FRONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FRONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    });
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareUrl: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.FrONTEND_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share/${shareToken}',
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
    };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost:5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost.5173'}/#/share`${shareToken}`,
      shareToken
   };
    
    return res.json({
      shareToken: `${process.env.Frontend_url || 'http://localhost
