// Web Audio API Sound Synthesizer for Sattvik Temple Audio Effects

class TempleSoundManager {
  private ctx: AudioContext | null = null;
  private ambientOsc: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play realistic brass temple bell (मंदिर की घंटी)
  public playTempleBell() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const frequencies = [880, 1760, 2640, 3520, 4400]; // Multi-harmonic bell pitch
      
      frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq + (idx * 3), now);

        const volume = 0.3 / (idx + 1);
        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5 - (idx * 0.3));

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 2.5);
      });
    } catch (e) {
      console.warn("Audio Context error:", e);
    }
  }

  // Play divine Shankh sound (शंख ध्वनि)
  public playShankhSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc1.type = 'sawtooth';
      osc2.type = 'sine';

      // Pitch glide like blowing shankh
      osc1.frequency.setValueAtTime(220, now);
      osc1.frequency.linearRampToValueAtTime(330, now + 0.6);
      osc1.frequency.setValueAtTime(330, now + 2.2);
      osc1.frequency.exponentialRampToValueAtTime(160, now + 3.0);

      osc2.frequency.setValueAtTime(440, now);
      osc2.frequency.linearRampToValueAtTime(660, now + 0.6);
      osc2.frequency.exponentialRampToValueAtTime(220, now + 3.0);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);
      filter.frequency.linearRampToValueAtTime(1200, now + 0.8);
      filter.frequency.exponentialRampToValueAtTime(400, now + 3.0);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.5);
      gain.gain.setValueAtTime(0.4, now + 2.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 3.2);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 3.2);
      osc2.stop(now + 3.2);
    } catch (e) {
      console.warn("Shankh sound error:", e);
    }
  }

  // Toggle ambient Om sound drone (ॐ धुन)
  public toggleOmAmbient(): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.isAmbientPlaying) {
        this.stopOmAmbient();
        return false;
      } else {
        const now = this.ctx.currentTime;
        this.ambientOsc = this.ctx.createOscillator();
        this.ambientGain = this.ctx.createGain();

        this.ambientOsc.type = 'sine';
        this.ambientOsc.frequency.setValueAtTime(136.1, now); // 136.1 Hz is the sacred frequency of Om (C#)

        this.ambientGain.gain.setValueAtTime(0.001, now);
        this.ambientGain.gain.linearRampToValueAtTime(0.15, now + 2);

        this.ambientOsc.connect(this.ambientGain);
        this.ambientGain.connect(this.ctx.destination);

        this.ambientOsc.start(now);
        this.isAmbientPlaying = true;
        return true;
      }
    } catch (e) {
      console.warn("Ambient Om error:", e);
      return false;
    }
  }

  public stopOmAmbient() {
    if (this.ambientOsc && this.ambientGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 1);
      setTimeout(() => {
        if (this.ambientOsc) {
          this.ambientOsc.stop();
          this.ambientOsc.disconnect();
          this.ambientOsc = null;
        }
        this.isAmbientPlaying = false;
      }, 1000);
    }
  }
}

export const soundManager = new TempleSoundManager();
