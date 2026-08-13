import { describe, expect, it } from 'vitest';
import { buildMailtoUrl } from './contact';

describe('buildMailtoUrl', () => {
  it('trims and safely encodes form content', () => {
    const url = buildMailtoUrl('owner@example.com', {
      firstName: '  Ada ',
      lastName: ' Lovelace  ',
      email: ' ada@example.com ',
      message: 'Build an AI tool & dashboard?',
    });

    expect(url).toBe(
      'mailto:owner@example.com?subject=Portfolio%20Contact%20from%20Ada%20Lovelace&body=Name%3A%20Ada%20Lovelace%0AEmail%3A%20ada%40example.com%0A%0AMessage%3A%0ABuild%20an%20AI%20tool%20%26%20dashboard%3F',
    );
  });

  it('keeps header-like user input inside the encoded body', () => {
    const url = buildMailtoUrl('owner@example.com', {
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      message: 'Hello\nBcc: attacker@example.com',
    });

    expect(url).not.toContain('\n');
    expect(url).toContain('Hello%0ABcc%3A%20attacker%40example.com');
  });

  it('removes line breaks from mail header values', () => {
    const url = buildMailtoUrl('owner@example.com', {
      firstName: 'Ada\r\nBcc: attacker@example.com',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      message: 'Hello',
    });
    const subject = url.split('&body=')[0];

    expect(subject).not.toContain('%0A');
    expect(subject).not.toContain('%0D');
    expect(subject).toContain('subject=Portfolio%20Contact%20from%20Ada%20Bcc%3A');
  });
});
