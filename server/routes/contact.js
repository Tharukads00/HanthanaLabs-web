import express from 'express';

const router = express.Router();

// In-memory log of messages for demo/preview purposes
const receivedMessages = [];

router.post('/', (req, res) => {
  const { name, email, domain, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide all required fields: name, email, and message.',
    });
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    });
  }

  const newMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    domain: domain || 'General Inquiry',
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  receivedMessages.push(newMessage);

  console.log('═══════════════════════════════════════════════════════');
  console.log('📩 [HanthanaLabs] New Contact Inquiry Received:');
  console.log(`   From:    ${newMessage.name} <${newMessage.email}>`);
  console.log(`   Domain:  ${newMessage.domain}`);
  console.log(`   Time:    ${newMessage.receivedAt}`);
  console.log(`   Message: ${newMessage.message}`);
  console.log('═══════════════════════════════════════════════════════');

  return res.status(200).json({
    success: true,
    message: 'Thank you for contacting HanthanaLabs. Our engineering team will review your inquiry and get back to you shortly.',
    data: {
      id: newMessage.id,
      name: newMessage.name,
      receivedAt: newMessage.receivedAt,
    },
  });
});

// GET endpoint to view recent inquiries (for verification)
router.get('/', (req, res) => {
  res.json({
    total: receivedMessages.length,
    messages: receivedMessages.slice(-10),
  });
});

export default router;
