import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, X } from 'lucide-react';

export const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fanning layout matching exact handwritten sketch:
  // 1. Email (Envelope icon) -> Top-Left
  // 2. Chat (Message bubble icon) -> Straight UP
  // 3. Phone (Receiver icon) -> Top-Right / Right
  const contactOptions = [
    {
      id: 'email',
      label: 'Email us',
      icon: Mail,
      href: 'mailto:support@agrivera.com',
      isExternal: false,
      title: 'Send an Email Query',
      positionClass: 'pos-email-topleft',
      delayOpen: '0s',
      delayClose: '0.2s',
      tooltipClass: 'tooltip-left'
    },
    {
      id: 'chat',
      label: 'Chat with us',
      icon: MessageSquare,
      href: 'https://wa.me/919876543210',
      isExternal: true,
      title: 'Chat on WhatsApp',
      positionClass: 'pos-chat-top',
      delayOpen: '0.1s',
      delayClose: '0.1s',
      tooltipClass: 'tooltip-above'
    },
    {
      id: 'phone',
      label: 'Call us',
      icon: Phone,
      href: 'tel:+919876543210',
      isExternal: false,
      title: 'Call Agritech Advisory',
      positionClass: 'pos-phone-right',
      delayOpen: '0.2s',
      delayClose: '0s',
      tooltipClass: 'tooltip-above'
    }
  ];

  return (
    <div className="fab-menu-root">
      <div className="fab-main-container">
        {/* Continuous 3 Radar Wipe Animated Rings */}
        <div className={`fab-radar-rings ${isOpen ? 'active-glow' : ''}`}>
          <div className="fab-ring fab-ring-1" />
          <div className="fab-ring fab-ring-2" />
          <div className="fab-ring fab-ring-3" />
          <div className="fab-radar-beam" />
        </div>

        {/* 72px Main Green Circular Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`fab-main-trigger ${isOpen ? 'active' : ''}`}
          aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        >
          <div className="fab-trigger-icon">
            {isOpen ? (
              <X size={22} color="#FFFFFF" strokeWidth={2.6} />
            ) : (
              <MessageSquare size={22} color="#FFFFFF" strokeWidth={2.2} />
            )}
          </div>
        </button>

        {/* Option Buttons (Fanning out as sketched: Email top-left, Chat top, Phone right) */}
        {contactOptions.map((opt) => {
          const IconComponent = opt.icon;
          return (
            <div
              key={opt.id}
              className={`fab-option-wrapper ${opt.positionClass} ${isOpen ? 'open' : ''}`}
              style={{
                transitionDelay: isOpen ? opt.delayOpen : opt.delayClose
              }}
            >
              <a
                href={opt.href}
                target={opt.isExternal ? '_blank' : '_self'}
                rel={opt.isExternal ? 'noopener noreferrer' : ''}
                className="fab-option-btn"
                title={opt.title}
              >
                <IconComponent size={18} color="#FFFFFF" strokeWidth={2.2} />
              </a>

              {/* Glass Tooltip (Visible ONLY on Hover) */}
              <span className={`fab-tooltip ${opt.tooltipClass}`}>
                {opt.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingContactWidget;
