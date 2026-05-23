import urllib.request
import xml.etree.ElementTree as ET

url = 'https://alnasrcranes.vercel.app/sitemap.xml'
print('Fetching', url)
with urllib.request.urlopen(url) as resp:
    data = resp.read()
print('Length', len(data))
root = ET.fromstring(data)
print('Root tag:', root.tag)
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = root.findall('s:url', ns)
print('URL count:', len(urls))
errors = 0
for idx, url_el in enumerate(urls, 1):
    loc = url_el.find('s:loc', ns)
    if loc is None or not loc.text or not loc.text.strip():
        print('Missing loc at entry', idx)
        errors += 1
        continue
    uri = loc.text.strip()
    if ' ' in uri:
        print('Space in URL:', uri)
        errors += 1
    if not uri.startswith('https://'):
        print('Non-https URL:', uri)
        errors += 1
    lastmod = url_el.find('s:lastmod', ns)
    if lastmod is None or not lastmod.text or not lastmod.text.strip():
        print('Missing lastmod:', uri)
        errors += 1
print('Errors:', errors)
