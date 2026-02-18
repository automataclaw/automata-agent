# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in Automata, please email us at security@automata-agent.dev instead of using the issue tracker.

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Security Best Practices

When using Automata:

1. **Never commit Private Keys**: Always use `.gitignore` to prevent wallet.json from being pushed to GitHub
2. **Use Environment Variables**: Store sensitive configuration in `.env` files (which are gitignored)
3. **Verify Addresses**: Always verify wallet addresses before sending funds
4. **Keep Dependencies Updated**: Regularly update dependencies to patch security issues

## Supported Versions

- Latest version: Fully supported
- Previous version: Security patches only
- Older versions: Not supported

## Security Audits

Automata undergoes regular security reviews. For audit reports, please contact us directly.

## Responsible Disclosure

We appreciate responsible disclosure and will work with security researchers to address vulnerabilities promptly.
