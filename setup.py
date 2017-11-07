# -*- coding: utf-8 -*-

from setuptools import setup, find_packages
import os

version = '3.1.4.dev0'

setup(name='collective.js.abcjs',
      version=version,
      description="",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Environment :: Web Environment",
        "Framework :: Plone",
        "Framework :: Plone :: 5.0",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.7",
        "Operating System :: OS Independent",
        "License :: OSI Approved :: GNU General Public License v2 (GPLv2)",
    ],
      keywords='Python Plone',
    author='Eric Hardy',
    author_email='Eric.Hardy@univ-brest.fr',
    url='https://pypi.python.org/pypi/collective.js.abcjs',
      license='GPL version 2',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['collective', 'collective.js'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          # -*- Extra requirements: -*-
          'plone.app.jquery',
          ],
      extras_require=dict(
          tests=['plone.app.testing'],
      ),
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
